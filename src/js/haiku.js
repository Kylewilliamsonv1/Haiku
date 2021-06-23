const vowelArray = ["a","e","i","o","u","y"];
export class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
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
    

  vowelLineArray.push(line1VowelCount,line2VowelCount,line3VowelCount);
    return vowelLineArray;
  }
  // oneVowel() {
  //   let oneVowelWords = [];
  //   let line1Array = this.line1.toLowerCase().split(" ");
  //   let line2Array = this.line2.toLowerCase().split(" ");
  //   let line3Array = this.line3.toLowerCase().split(" ");
  //   let line1Counter=[];
  //   let line2Counter=[];
  //   let line3Counter=[];
  //   vowelArray.forEach(i => {
  //     line1Array.forEach(j => {
  //       let vowelsInWord = 0;
  //       let split = j.split("");
  //       split.forEach(k => {
  //         if(k.includes(i)) {
  //           vowelsInWord++;
  //         }
  //       });
  //       line1Counter.push(vowelsInWord);
  //     });
  //   });
    
  // line1Counter.forEach(i => {
  //   let counter = 0;
  //   if (i === 1) {
  //   counter++;
  //   }
  //   oneVowelArray.push(counter);
  // })
  //   return oneVowelWords;

  // }
}

export class Word {
  constructor(word) {
    this.word = word;
    //syllables = function to find number of syllables//
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
}
