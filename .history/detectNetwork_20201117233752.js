// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  if (cardNumber.length === 14) {
    if (cardNumber[0] === '3') {
      if (cardNumber[1] === '8' || cardNumber[1] === '9') {
        return 'Diner\'s Club';
      }
    }
  }
  if (cardNumber.length === 15) {
    if (cardNumber[0] === '3') {
      if (cardNumber[1] === '4' || cardNumber[1] === '7') {
        return 'American Express';
      }
    }
  }
  if (cardNumber[0] === '4') {
    if (cardNumber.indexOf('4903') !== 0 && cardNumber.indexOf('4905') !== 0 && cardNumber.indexOf('4911') !== 0 && cardNumber.indexOf('4936') !== 0 ) {
      if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
        return 'Visa';
      }
    }
  }
  if (cardNumber[0] === '5') {
    if (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5') {
      if (cardNumber.length === 16) {
        return 'MasterCard';
      }
    }
  }
  if (cardNumber.indexOf('6011') === 0 || cardNumber.indexOf('644') === 0 || cardNumber.indexOf('645') === 0 || cardNumber.indexOf('646') === 0 || cardNumber.indexOf('647') === 0 || cardNumber.indexOf('648') === 0 || cardNumber.indexOf('649') === 0 || cardNumber.indexOf('65') === 0) {
    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';
    }
  }
  if (cardNumber.indexOf('5018') === 0 || cardNumber.indexOf('5020') === 0 || cardNumber.indexOf('5038') === 0 || cardNumber.indexOf('6304') === 0) {
    if (cardNumber.length >= 12 && cardNumber.length <= 19) {
      return 'Maestro';
    }
  }
  for (var chinaCard1 = 622126; chinaCard1 <= 622925; chinaCard1++) {
    if (cardNumber.indexOf(chinaCard1) === 0) {
      if (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
        return 'China UnionPay';
      }
    }
  }
  for (var chinaCard2 = 624; chinaCard2 <= 626; chinaCard2++) {
    if (cardNumber.indexOf(chinaCard2) === 0) {
      if (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
        return 'China UnionPay';
      }
    }
  }
  for (var chinaCard3 = 6282; chinaCard3 <= 6288; chinaCard3++) {
    if (cardNumber.indexOf(chinaCard3) === 0) {
      if (cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
        return 'China UnionPay';
      }
    }
  }
  if (cardNumber.indexOf('4903') === 0 || cardNumber.indexOf('4905') === 0 || cardNumber.indexOf('4911') === 0 || cardNumber.indexOf('4936') === 0 || cardNumber.indexOf('564182') === 0 || cardNumber.indexOf('633110') === 0 || cardNumber.indexOf('6333') === 0 || cardNumber.indexOf('6759') === 0) {
    if (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) {
      return 'Switch';
    }
  }
};





