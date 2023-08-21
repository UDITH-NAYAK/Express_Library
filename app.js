const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const ConnectDB = require("./connectDb");
ConnectDB();
const indexRouter = require("./routes/index");
// const usersRouter = require("./routes/users");
const catalogRouter = require("./routes/catalog");
const compression = require("compression");
const { body, validationResult } = require("express-validator");
const helmet = require("helmet");

const app = express();

// Set up rate limiter: maximum of twenty requests per minute
const RateLimit = require("express-rate-limit");
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20,
});
// Apply rate limiter to all requests
app.use(limiter);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//Midlewares
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": ["'self'", "code.jquery.com", "cdn.jsdelivr.net"],
    },
  })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(compression());

app.use("/", indexRouter);

// app.use("/users", usersRouter);
app.use("/catalog", catalogRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// app.listen(3000, () => {
//   console.log(`listing port ${3000}`);
// });

// app.use("/connect", function (req, res) {
//   main().catch((err) => console.log(err));
// async function main() {
//   try {
//     mongoose.set("strictQuery", false);
//     const mongoDB =
//       "mongodb+srv://udith:udithLIBRARY1234@cluster0.euxoaeq.mongodb.net/local_library?retryWrites=true&w=majority";
//     await mongoose.connect(mongoDB);
//     console.log("Connected Sucessfuly..");
//   } catch (err) {
//     console.log(`🤔🤔${err}`);
//   }
// }
// main();
// });
module.exports = app;
