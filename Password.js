export class Password {
  length;
  special;
  uppercase;
  lowercase;
  numerical;
  specialChar = [
    "`",
    "~",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "_",
    "+",
    "=",
    ",",
    "<",
    ".",
    ">",
    "/",
    "?",
    ";",
    ":",
    "'",
    "{",
    "[",
    "]",
    "}",
    "\\",
    "|",
  ];
  lowercaseChar = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  uppercaseChar = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  constructor(length, special, uppercase, lowercase, numerical) {
    this.len = length;
    this.special = special;
    this.upper = uppercase;
    this.lower = lowercase;
    this.numeric = numerical;
  }
  getLength() {
    return this.len;
  }
  getSpecial() {
    return this.special;
  }
  getUppercase() {
    return this.upper;
  }
  getLowercase() {
    return this.lower;
  }
  getNumerical() {
    return this.numeric;
  }
  setLength(length) {
    this.len = length;
  }
  setSpecial(special) {
    this.special = special;
  }
  setUppercase(uppercase) {
    this.upper = uppercase;
  }
  setLowercase(lowercase) {
    this.lower = lowercase;
  }
  setNumerical(numerical) {
    this.numeric = numerical;
  }
  //   ---------------------- HELPERS ------ Start -----------------------------------------
  // Function that returns the index of the maximum number in an array
  indexOfMax(arr) {
    if (arr.length === 0) {
      return false;
    }
    let max = arr[0];
    let maxIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        maxIndex = i;
        max = arr[i];
      }
    }
    return maxIndex;
  }

  // function that returns a random value within an array
  pickRandomChar(arr) {
    const randomIndex = Math.floor(Math.random() * (arr.length - 1));
    const randomChar = arr[randomIndex];
    return randomChar;
  }
  // function that returns an array of randomized numbers
  randomizeArray(charTypeFreq) {
    const numSpecial = charTypeFreq.special;
    const numUpper = charTypeFreq.upper;
    const numLower = charTypeFreq.lower;
    const numNumeric = charTypeFreq.numeric;

    // array that holds randomized numbers times the character weight (1/frequency)
    const charTypeWeights = [
      Math.random() * (1 / numSpecial),
      Math.random() * (1 / numUpper),
      Math.random() * (1 / numLower),
      Math.random() * (1 / numNumeric),
    ];

    return charTypeWeights;
  }

  passwordScrambler() {
    const charTypeFreq = {
      special: 1,
      upper: 1,
      lower: 1,
      numeric: 1,
    };
    let password = "";
    let char = "";

    while (password.length < this.len) {
      if (!this.uppercase && !this.special && !this.numeric) {
        char = this.pickRandomChar(this.lowercaseChar);
        console.log(char);
        password = password.concat(char);
        continue;
      }

      const charTypeWeights = this.randomizeArray(charTypeFreq);
      const index = this.indexOfMax(charTypeWeights);
      switch (index) {
        case 0:
          if (this.special) {
            charTypeFreq.special += 2;
            char = this.pickRandomChar(this.specialChar);
          }
          break;
        case 1:
          if (this.upper) {
            charTypeFreq.upper += 2;
            char = this.pickRandomChar(this.uppercaseChar);
          }
          break;
        case 2:
          if (this.lower) {
            charTypeFreq.lower += 2;
            char = this.pickRandomChar(this.lowercaseChar);
            console.log(char);
          }
          break;
        case 3:
          if (this.numeric) {
            charTypeFreq.numeric += 2;
            char = Math.floor(Math.random() * 9);
          }
          break;
      }
      password = password.concat(char);
    }
    return password;
  }
}
