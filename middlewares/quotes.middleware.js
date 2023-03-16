const model = require("../models/index");

module.exports = {
  checkQuotes: (req, res, next) => {
    if (req.session.userId === null || req.session.userId === undefined) {
      req.flash("alert", {
        hex: "#716844",
        color: "success",
        status: "Success",
      });
      req.flash("message", "Login ato beken akun dulu cuy");
      return res.redirect("/");
    }
    if (
      req.body.quote == null ||
      req.body.quote === undefined ||
      req.body.quote === " "
    ) {
      req.flash("alert", {
        hex: "#716844",
        color: "success",
        status: "Success",
      });
      req.flash("message", "Isi kasana cuy!");
      return res.redirect("/");
    }
    const makian = [
      "tahede",
      "babi",
      "anjing",
      "thd",
      "cukimai",
      "hulelilamu",
      "hule",
      "kudacuki",
    ];
    const quote = req.body.quote.split(" ");
    for (let i = 0; i <= makian.length; i++) {
      if (makian.includes(quote[i])) {
        req.flash("alert", {
          hex: "#716844",
          color: "success",
          status: "Success",
        });
        req.flash("message", "jangan b maki uti plis");
        return res.redirect("/");
      }
    }
    next();
  },
};
