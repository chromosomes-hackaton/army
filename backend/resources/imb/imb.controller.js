const imbService = require('./imb.service');

module.exports.getIMB = async (req, res) => {
    try {
        const data = await imbService.find();
        res.status(200);
        res.send([...data]);
      } catch(e) {
        console.log(e);
    }
};
