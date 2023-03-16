const express = require("express");
const { index } = require("../controller/index.controller");
const { logIn, logOut, register } = require("../controller/user.controller");
const { verifyUser } = require("../middlewares/user.middleware");
const { addQuote } = require("../controller/quotes.controller");
const { checkQuotes } = require("../middlewares/quotes.middleware");

const Router = express.Router();

Router.get("/", index);
Router.post("/login", verifyUser, logIn);
Router.post("/register", register);
Router.get("/logout", logOut);

Router.post("/quote", checkQuotes, addQuote);

module.exports = Router;
