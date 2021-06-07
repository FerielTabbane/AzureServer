const express = require('express');
const router = express.Router();
const detectorService = require('./detector.service');

router.get('/Detectors', (req, res) => {
   detectorService.getDetectors(req, res);

/*
   res.send(200, [
    {"id": 001, "brand": "Incendia", 
    "model": "XYZ",
    "expiration": "2025-08",
    "Raccord": "yes",
    "telesurveille": "yes",
    "interconnecte": "yes",
    "typeBatterie": "ABC",
    "nbBatterie": "2",
    "lieu": "Corridor SS1",
    "": ""
   
   }
 ])*/
});

module.exports=router;