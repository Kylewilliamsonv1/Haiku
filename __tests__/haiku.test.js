import {Haiku, Word} from './../src/js/haiku.js';

describe('Haiku', () => {

let haiku;

  beforeEach(() => {
    haiku = new Haiku("Forget, breakable", "I don't want to help you move", "I'm gonna drop things.");
  });

  test('it will take 3 row inputs from a user', () => {
    expect(haiku.line1).toEqual("Forget, breakable");
    expect(haiku.line2).toEqual("I don't want to help you move");
    expect(haiku.line3).toEqual("I'm gonna drop things.");
  });

  test('it will combine the lines into a single string on separate lines', () => {
    expect(haiku.joinLines()).toEqual("Forget, breakable<br>I don't want to help you move<br>I'm gonna drop things.");
  });

  test('it will count the number of vowels in each word and return the total per line', () => {
    expect(haiku.lineVowelCount()).toEqual([6,10,5])
  });
  test('it will count the syllables for each word on a line', () => {
    expect(haiku.lineSyllableCount()).toEqual([5,7,5]);
  });

});

describe('Word', () => {
  
  let word;
  
  test('it will count the vowels in each word', () => {
    word = new Word("breakable");
    expect(word.wordVowelCount()).toEqual(4);
  });

  test('it will create an array with the position of the vowels of the word', () => {
    word = new Word("adieu");
    expect(word.toVowelArray()).toEqual([1,0,1,1,1]);
  });

  test('it will check for words with two or more consecutive vowels and consider that as one syllable', () => {
    word = new Word("adieu");  
    expect(word.multiVowelCount()).toEqual(2);
  });
  
  test('it will check for the amount of syllables in a word', () => {
    word = new Word("adieu");  
    expect(word.syllableWord()).toEqual(2);
  });
  test('it will remove special characters for use in other tests', () => {
    word = new Word("Ain't");
    expect(word.word).toEqual("Aint");
  });

});