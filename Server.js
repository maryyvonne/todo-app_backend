const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const cors = require('cors');

const app = express();
const port = 5000;

const routes = require('./routes/TodoRoute');

app.use(express.json())
app.use(cors())

app.use(routes);

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to Mongodb...'))
.catch((err)=> console.error(err));

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
  console.log("Connected to backend.");
});