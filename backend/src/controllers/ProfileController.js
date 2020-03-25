const connection = require('../database/connections')

module.exports = {
    async listEspecificForOng(req, res){
        const ong_id = req.headers.authorization;
        console.log(ong_id);

        const incidents = await connection('incidents').where('ong_id', ong_id).select('*');

        return res.json(incidents);
    }

}