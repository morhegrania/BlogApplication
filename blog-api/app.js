
const  cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const blogRouter = require('./routers/blogRouter');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/blog', blogRouter);

mongoose
  .connect(
    "mongodb+srv://rania:Test@blog-app.whaiaex.mongodb.net/test"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database ")
  )
  .catch((err) => console.log(err));