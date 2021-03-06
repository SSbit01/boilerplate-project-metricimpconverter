/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res) {
      let input = req.query.input;
      
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);

      let initNum_isnull = initNum === null;
      let initUnit_isnull = initUnit === null;
      if (initNum_isnull && initUnit_isnull) {
        res.send("invalid number and unit");
        return 0;
      } else if (initNum_isnull) {
        res.send("invalid number");
        return 0;
      } else if (initUnit_isnull) {
        res.send("invalid unit");
        return 0;
      }

      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);

      res.json({
        initNum: initNum, 
        initUnit: initUnit, 
        returnNum: returnNum, 
        returnUnit: returnUnit, 
        string: toString
      });
      return 1;
    });   
};