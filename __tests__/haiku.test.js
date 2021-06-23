import {Haiku, Word} from './../src/js/haiku.js';

describe('Haiku', () => {

let haiku;

  beforeEach(() => {
    haiku = new Haiku("Fragile, breakable", "I don't want to help you move", "I'm gonna drop things.");
  });

  test('it will take 3 row inputs from a user', () => {
    expect(haiku.line1).toEqual("Fragile, breakable");
    expect(haiku.line2).toEqual("I don't want to help you move");
    expect(haiku.line3).toEqual("I'm gonna drop things.");
  });

  test('it will combine the lines into a single string on separate lines', () => {
    expect(haiku.joinLines()).toEqual("Fragile, breakable<br>I don't want to help you move<br>I'm gonna drop things.");
  });

  test('it will count the number of vowels in each word and return the total per line', () => {
    expect(haiku.lineVowelCount()).toEqual([7,10,5])
  });
});

describe('Word', () => {
  
  let word;
  
  test('it will count the vowels in each word', () => {
    word = new Word("breakable");
    expect(word.wordVowelCount()).toEqual(4);
  });
});