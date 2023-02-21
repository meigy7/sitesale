const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const router = require('./router/index')

const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: true,
  optionsSuccessStatus: 200
}));
app.use('/api', router);

const start = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/sitesale', { useNewUrlParser: true, useUnifiedTopology: true })
    app.listen(PORT, console.log(`Server started on port ${PORT}`))
  } catch (e) {
    console.log(e);
  }
}

start();
