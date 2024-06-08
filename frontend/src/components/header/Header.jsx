import React from 'react';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import SignUp from '../signup/SignUp';


const Header = () => {
  return (
    <div>
      <nav>
        <section className='flex items-center'>
          <img src={logo} alt='thelogo' className='mt-2 ml-16 w-14 h-14' />
          <section className='inline-flex mt-4 ml-40 text-sm font-medium'>
            <Link className='ml-10' to={"/"}>Home</Link>
            <Link className='ml-10 ' to={"/about"}>About Us</Link>
            <Link className='ml-10' to={"/case"}>Add case</Link>
            <Link className='ml-10' to={"/blog"}>Our Blog</Link>
            <Link className='ml-10' to={"/contact"}>Contact Us</Link>
            <FontAwesomeIcon icon={faSearch} className='ml-20 mt-px' />
            <button className='ml-40 border-1 border-orange-500 bg-orange-500 p-4 py-2 rounded-xl '> <Link to={"/sign"}>Log in</Link></button>
          </section>
        </section>
       
      </nav>
      </div>
  );
};

export default Header;


//will come back later
