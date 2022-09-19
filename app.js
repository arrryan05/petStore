const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors =  require('cors')
const morgan = require('morgan')

const petRoutes = require('./routes/pet');

const app = express();

const PORT = 8080;


app.use(bodyParser.json());
app.use(cors())
app.use(morgan())



app.use('/api', petRoutes);

mongoose
  .connect('mongodb+srv://aryan:aryan@cluster0.xyvpbmn.mongodb.net/test',{ useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(result => {
    app.listen(PORT);
  })
  .catch(err => console.log(err));
