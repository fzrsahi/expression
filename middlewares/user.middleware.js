module.exports = {
  verifyUser: (req, res, next) => {
    if (
      req.body === undefined ||
      req.body.email === "" ||
      req.body.password === ""
    ) {
      req.flash("alert", {
        hex: "#716844",
        color: "success",
        status: "Success",
      });
      req.flash("message", "co isi ksna email itu deng password");
      res.redirect("/");
    } else {
      next();
    }
  },
};
