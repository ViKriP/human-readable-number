const basicNumber = ['zero', 'one', 'two', 'three', 'four', 'five', 'six',
                     'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve',
                     'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen',
                     'eighteen', 'nineteen'];
const dozensNumber = ['twenty', 'thirty', 'forty', 'fifty',
                      'sixty', 'seventy', 'eighty', 'ninety'];
const hundred = 'hundred';


module.exports = function toReadable (number) {

  var numberStr = String(number);

  switch (numberStr.length) {
      case 1:
          return basicNumber[number];
          break;
      case 2:
          return getDozensNumber(number);
          break;
      case 3:
          if (numberStr[1] === '0' && numberStr[2] === '0') {
            return basicNumber[Number(numberStr[0])] + ' ' + hundred;
          } else {
            return basicNumber[Number(numberStr[0])] + ' ' + hundred + ' ' +
                               getDozensNumber(Number(numberStr[1] + numberStr[2]));
          }
          break;
      default:   
  }
}

function getDozensNumber (number) {
  var numberStr = String(number);

  if (number <= 19) {
    return basicNumber[number];
  } else if (numberStr[1] === '0') {
    return dozensNumber[Number(numberStr[0]-2)];
  } else {
    return dozensNumber[Number(numberStr[0]-2)] + ' ' + basicNumber[Number(numberStr[1])];
  }
}