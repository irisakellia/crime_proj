const express = require('express');
const cors = require('cors');
require('dotenv').config();
const dbconnection = require('./utils/dbconnection')
const router = require('./routes/routes.js')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/', router);




dbconnection();

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
})
