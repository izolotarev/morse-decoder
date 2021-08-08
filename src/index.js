const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0'
};

function decode(expr) {
  let res = '';
  for (let i = 0; i < expr.length; i += 10) {
    let tenChar = expr.slice(i, i + 10);
    if (tenChar == '**********') {
      res += ' ';
      continue;
    }
    let shiftedBits = shift(tenChar);
    let morse = bitsToMorse(shiftedBits);
    let letter = morseToLetter(morse);
    res += letter;
  }
  return res;
}

function shift(letter) {
  return String(+letter);
}

function bitsToMorse(bits) {
  let res = '';
  for (let i = 0; i < bits.length; i += 2) {
    let s = bits.slice(i, i + 2);
    if (s == '10') {
      res += '.';
    } else if (s == '11') {
      res += '-';
    }
  }
  return res;
}

function morseToLetter(morse) {
  return MORSE_TABLE[morse];
}

module.exports = {
  decode
};
