const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3050;
const bodyParser = require('body-parser');
const ConnectDB = require('./config/db');

const productsRouter = require('./routes/productsRouter');

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/images', express.static('images'));
app.use(cors());

ConnectDB();

app.use('/api/products', productsRouter);

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
