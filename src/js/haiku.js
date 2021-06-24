const vowelArray = ["a", "e", "i", "o", "u", "y"];
export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }
  checkHaiku() {
    if (this.lineSyllableCount === [5,7,5]) {
      return this.joinLines();
    } else {
      return "This doesn't match the syllable pattern or you're using some funky words!"
    }
  }
  joinLines() {
    let lines = [this.line1, this.line2, this.line3];
    let joinedLines = lines.join("<br>");
    return joinedLines;
  }

  lineVowelCount() {
    let vowelLineArray = [];
    let line1VowelCount = 0;
    let line2VowelCount = 0;
    let line3VowelCount = 0;
    vowelArray.forEach(i => {
      this.line1.toLowerCase().split("").forEach(j => {
        if (j.includes(i)) {
          line1VowelCount++;
        }
      });
      this.line2.toLowerCase().split("").forEach(j => {
        if (j.includes(i)) {
          line2VowelCount++;
        }
      });
      this.line3.toLowerCase().split("").forEach(j => {
        if (j.includes(i)) {
          line3VowelCount++;
        }
      });
    });


    vowelLineArray.push(line1VowelCount, line2VowelCount, line3VowelCount);
    return vowelLineArray;
  }

  lineSyllableCount() {
    let syllableArray = [];
    let line1SyllableCount = 0; 
    let line2SyllableCount = 0; 
    let line3SyllableCount = 0; 
    const line1Words = this.line1.split(" ");
    const line2Words = this.line2.split(" ");
    const line3Words = this.line3.split(" ");
    line1Words.forEach(i => {
      let word = new Word(i);
      line1SyllableCount += word.syllableWord();
    });
    line2Words.forEach(i => {
      let word = new Word(i);
      line2SyllableCount += word.syllableWord();
    });
    line3Words.forEach(i => {
      let word = new Word(i);
      line3SyllableCount += word.syllableWord();
    });
    syllableArray = [line1SyllableCount,line2SyllableCount,line3SyllableCount];
    return syllableArray;
  }

}
export class Word {
  constructor(word) {
    this.word = word.replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-./:;<=>?@[\]^_`{|}~]/,"");
  }

  syllableWord() {
    let vowelTotal = this.wordVowelCount();
    let multiVowelTotal = this.multiVowelCount();
    let endsWithVCE = this.checkEndsWithVCE();
    let syllableCount = vowelTotal - multiVowelTotal - endsWithVCE;
    return syllableCount;
  }
  wordVowelCount() {
    const letterArray = this.word.toLowerCase().split("");
    let vowelCount = 0;
    vowelArray.forEach(i => {
      letterArray.forEach(j => {
        if (j.includes(i)) {
          vowelCount++;
        }
      });
    });
    return vowelCount;
  }

  toVowelArray() {
    const letterArray = this.word.toLowerCase().split("");
    let vowelCheckArray = [];
    let vowelCheck = 0;
    letterArray.forEach(i => {
      vowelArray.forEach(j => {
        if (j.includes(i)) {
          vowelCheck = 1;
        }
      });
      vowelCheckArray.push(vowelCheck);
      vowelCheck = 0;
    });
    return vowelCheckArray;
  }

  multiVowelCount() {
    let vowelPosArray = this.toVowelArray();
    let multiVowelCounter = 0;
    let counter = 0;
    vowelPosArray.forEach(i => {
      if (i === 1) {
        counter++;
      } else {
        if (counter !=0) {
          multiVowelCounter = multiVowelCounter + counter - 1;
          counter = 0;
        }
      }
    });
    if (counter > 0) {
      multiVowelCounter = multiVowelCounter + counter - 1;
    }
    return multiVowelCounter;
  }
  checkEndsWithVCE() {
    const letterArray = this.word.toLowerCase().split("");
    if (letterArray[letterArray.length-1] === "e") {
      if (letterArray[letterArray.length-2] === "l") {
        return 0;
      } else {
        return 1;
      }
    } else {
      return 0;
    }
  }
  
}