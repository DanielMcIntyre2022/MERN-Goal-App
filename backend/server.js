require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;

const app = express();

app.listen(port, console.log(`listening on port ${port}!`));