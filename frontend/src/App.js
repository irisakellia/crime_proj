import React, { useEffect } from 'react';
import HomePage from './components/HomePage';
import AboutUs from './containers/AboutUs';
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import AddCase from './case/AddCase';
import BlogPage from './blog/BlogPage';
import ContactPage from './contact/ContactPage';
import Login from './components/login/Login';
import SignUp from './components/signup/SignUp.jsx';
import { Toaster } from 'react-hot-toast';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
  {
    path: '/case',
    element: <AddCase />,
  },
  {
    path: '/blog',
    element: <BlogPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign',
    element: <SignUp />,
  },
]);

const App = () => {
  useEffect(() => {
    fetch('http://localhost:4000/api/home')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); 
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
      });
  }, []);

  return (
    <div>
      <RouterProvider router={routes} />
    
    </div>
  );
};

export default App;
