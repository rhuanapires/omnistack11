const connection = require("../database/connections");

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

      console.log(ong);

      if (!ong){
        return res.status(400).json({error: "No ong found with this ID"});
    }

    return res.json(ong);

  }
};
