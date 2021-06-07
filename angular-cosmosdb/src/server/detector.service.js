const Detector = require('./detector.model');

require('./mongo').connect();

function getDetectors(req, res) {
  const docquery = Detector.find({});
  docquery
    .exec()
    .then(detectors => {
      res.status(200).json(detectors);
    })
    .catch(error => {
      res.status(500).send(error);
      return;
    });
}

module.exports = {
  getDetectors
};