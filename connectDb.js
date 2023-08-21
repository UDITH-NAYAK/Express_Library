const dev_db_url =
  "mongodb+srv://udith:udithLIBRARY1234@cluster0.euxoaeq.mongodb.net/Local_Library?retryWrites=true&w=majority";

  // Set up mongoose connection
const conn = process.env.MONGODB_URI || dev_db_url;

const mongoose = require("mongoose");
const connect = async function () {
  try {
    mongoose.set("strictQuery", false);

    await mongoose.connect(conn);
    console.log("Connected Sucessfuly..");
  } catch (err) {
    console.log(`🤔🤔${err}`);
  }
};
module.exports = connect;
