const model = require("../models/index");

module.exports = {
  addQuote: async (req, res) => {
    const quote = req.body.quote;
    const data = await model.User.findOne({
      where: {
        uuid: req.session.userId,
      },
    });
    console.log(data);
    try {
      await model.Quotes.create({ 
        userId: data.id,
        quote,
      });
      req.flash("alert", {
        hex: "#716844",
        color: "success",
        status: "Success",
      });
      req.flash("message", "Berhasil menambahkan quotesnya cuy");
      return res.redirect("/");
    } catch (error) {
      req.flash("alert", {
        hex: "#716844",
        color: "danger",
        status: "Failed",
      });
      req.flash("message", error.message);
      return res.redirect("/");
    }
  },
};
