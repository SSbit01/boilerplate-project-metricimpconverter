/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    //result = parseFloat(input);
    let mr = input.match(/[^a-z]*/i)[0];
    if (mr == "") {return 1;}
    try {
      if (mr.split("/").length > 2) {throw "Invalid Input (double fraction)"}
      result = eval(mr);
    } catch(err) {
      result = null;
    } 
    return result;
  };
  
  this.getUnit = function(input) {
    let result;
    regex = /[a-z]+/i;
    result = regex.test(input)?input.match(regex)[0].toLowerCase():null;
    if (result == "l") {result = "L"}
    if (this.spellOutUnit(result) === undefined) {
      result = null;
    } 
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let metricimp = {
      L: "gal",
      l: "gal",
      km: "mi",
      kg: "lbs"
    }
    let result = metricimp[initUnit];
    if (result === undefined) {
      result = Object.keys(metricimp).find(key=>metricimp[key]==initUnit);
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let fnu = {
      gal: "gallons",
      L: "liters",
      l: "liters",
      lbs: "pounds",
      kg: "kilograms",
      mi: "miles",
      km: "kilometers"
    }
    let result = fnu[unit];
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    switch (initUnit) {
      case "gal":
        result = initNum * galToL;
        break;
      case ("L"||"l"):
        result = initNum / galToL;
        break;
      case "lbs":
        result = initNum * lbsToKg;
        break;
      case "kg":
        result = initNum / lbsToKg;
        break;
      case "mi":
        result = initNum * miToKm;
        break;
      case "km":
        result = initNum / miToKm;
    }
    return parseFloat(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;