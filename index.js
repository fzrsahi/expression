const express = require("express");
const session = require("express-session");
const flash = require("connect-flash");
const Router = require("./routes/web");
const app = express();
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const TOKEN = process.env.TOKEN || "ajulgantengsekali";
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  session({
    secret: TOKEN,
    saveUninitialized: false,
    resave: false,
    name: "sessionToken",
    cookie: {
      sameSite: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.alert = req.flash("alert");
  res.locals.message = req.flash("message");
  next();
});

app.use((req, res, next) => {
  if (req.session.userId === undefined) {
    res.locals.username = "Guest";
    res.locals.isLoggedIn = false;
  } else {
    res.locals.isLoggedIn = true;
    res.locals.name = req.session.name;
  }
  next();
});

app.use("/", Router);

app.use((req, res, next) => {
  res.status(404);
  res.send("<h1>Sala url</h1>");
});

app.listen(PORT, () => {
  console.log(`Server Berjalan Di http://localhost:${PORT}`);
});
