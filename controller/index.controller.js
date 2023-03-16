const model = require("../models/index");

module.exports = {
  index: async (req, res) => {
    const data = await model.Quotes.findAll({
      attributes: ["uuid", "quote", "createdAt"],
      include: [
        {
          model: model.User,
          attributes: ["uuid", "name"],
        },
      ],
    });
    const result = data.map((item) => {
      return {
        name: item.User.name,
        quote: item.quote,
        createdAt: item.createdAt,
      };
    });
    res.render("index", { result });
  },
};
