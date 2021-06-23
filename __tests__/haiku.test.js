import Haiku from './../src/js/haiku.js';

describe('Haiku', () => {

let haiku;

  beforeEach(() => {
    haiku = new Haiku("Line 1", "Line 2", "Line 3");
  });

  test('it will take 3 row inputs from a user', () => {
    expect(haiku.line1).toEqual("Line 1");
    expect(haiku.line2).toEqual("Line 2");
    expect(haiku.line3).toEqual("Line 3");
  });

  test('it will combine the lines into a single string on separate lines', () => {
    expect(haiku.joinLines()).toEqual("Line 1\nLine 2\nLine 3");
  });

  test(' ', () => {

  })

// ___ 5 syllables
// ___ 7
// ___ 5




});