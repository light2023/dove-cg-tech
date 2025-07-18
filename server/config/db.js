// import database model
const mongoose = require('mongoose'); 


// config

const connectDB = async () => {
  try{
    const conn = await mongoose.connect(process.env.MONGO_URI, {
       useNewUrlParser: true,
       useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
 } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
 }
};
module.exports = connectDB;



// connection or logic

// export the database







