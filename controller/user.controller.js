const model = require("../models/index");
const bcrypt = require("bcrypt");

module.exports = {
  logIn: async (req, res) => {
    const userData = await model.User.findOne({
      where: { email: req.body.email },
    });
    if (userData === null) {
      req.flash("alert", { hex: "#716844", color: "danger", status: "Failed" });
      req.flash("message", "email ato password salah cuy");
      res.redirect("/");
    } else {
      bcrypt.compare(
        req.body.password,
        userData.password,
        async (err, result) => {
          if (result) {
            const session = await model.User.findOne({
              where: {
                email: req.body.email,
              },
              attibutes: ["name", "uuid"],
            });
            req.session.userId = session.uuid;
            req.session.name = session.name;
            req.flash("alert", {
              hex: "#716844",
              color: "success",
              status: "Success",
            });
            req.flash("message", "Berhasil login cuy!");
            return res.redirect("/");
          }
          req.flash("alert", {
            hex: "#716844",
            color: "danger",
            status: "Failed",
          });
          req.flash("message", "email ato password salah cuy");
          res.redirect("/");
        }
      );
    }
  },
  register: async (req, res) => {
    const { name, email, password } = req.body;
    const userData = await model.User.findOne({
      where: {
        email,
      },
      attibutes: ["email"],
    });
    if (userData === null) {
      bcrypt.hash(password, 10, async (err, hash) => {
        try {
          await model.User.create({
            name,
            email,
            password: hash,
          });
          await model.User.findOne({
            where: {
              email: email,
            },
            attibutes: ["name", "uuid"],
          })
            .then((result) => {
              req.session.userId = result.uuid;
              req.session.name = result.name;
            })
            .catch((err) => {
              req.flash("alert", {
                hex: "#716844",
                color: "success",
                status: "Success",
              });
              req.flash("message", err.message);
              return res.redirect("/");
            });
          req.flash("alert", {
            hex: "#716844",
            color: "success",
            status: "Success",
          });
          req.flash("message", "Berhasil bikin akun cuy");
          res.redirect("/");
        } catch (error) {
          req.flash("alert", {
            hex: "#716844",
            color: "success",
            status: "Success",
          });
          req.flash("message", error.message);
          return res.redirect("/");
        }
      });
    } else {
      req.flash("alert", {
        hex: "#716844",
        color: "success",
        status: "Success",
      });
      req.flash("message", "email so terdaftar cuy");
      res.redirect("/");
    }
  },
  logOut: (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        return console.log(err);
      } else {
        res.clearCookie("sessionToken");
        res.redirect("/");
      }
    });
  },
};
