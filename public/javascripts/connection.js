const mongoose = require('mongoose');

const uri ="mongodb+srv://mspavan:Pavan965$@cluster0-h5ava.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
  await mongoose
  .connect( uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => console.log( 'Database Connected' ))
  .catch(err => console.log( err ))
};

module.exports = connectDB;
