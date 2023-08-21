// // Set up mongoose connection
// const mongoose = require("mongoose");
// mongoose.set("strictQuery", false);

// const express = require("express");
// const app = express();

// const mongoDB =
//   "mongodb+srv://udith:udithLIBRARY1234@cluster0.euxoaeq.mongodb.net/local_library?retryWrites=true&w=majority";

// app.listen(3000, () => {
//   console.log(`listing port ${3000}`);
// });
// app.get("/connect", function (req,res) {
//   main().catch((err) => console.log(err));
//   async function main() {
//     await mongoose.connect(mongoDB);
//     console.log("Connected Sucessfuly..");
//     res.send("connected")
//   }
// });

const wilkiRouter = require("./routers/wili.js");
const express = require("express");
const app = express();
// app.listen(3000, () => {
//   console.log(`listing port ${3000}`);
// });
app.use("/wiki", wilkiRouter);
