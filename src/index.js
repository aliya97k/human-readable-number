module.exports = function toReadable (number) {
  const numbers = {
    0: '',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred'
}; 
   if (number === 0) {
    return 'zero';
}
  let numbersLength = number.toString().length;
  let numberStr = number.toString().split('');
  
if (numbersLength === 1) {
    return numbers[number];
}
if (numbersLength === 2) {
    if (numbers[number]) {
        return numbers[number];
    } else return numbers[numberStr[0] + 0] + ' ' + numbers[numberStr[1]];
}
if (numbersLength === 3) {
    if (numbers[number]) { 
        return 'one ' + numbers[number]; 
    } else 
        if (numberStr[1] == 0 && numberStr[2] == 0) { 
        return numbers[numberStr[0]] + ' hundred';
    } else 
        if (numberStr[1] == 0){ 
        return numbers[numberStr[0]] + ' hundred ' + numbers[numberStr[2]];
    } else 
        return numbers[numberStr[0]] + ' hundred ' + (numbers[numberStr[1] + numberStr[2]] || numbers[numberStr[1] + 0] + ' ' + numbers[numberStr[2]]);
} 
}