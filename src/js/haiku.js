export default class Haiku {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

  joinLines() {
    let lines = [this.line1, this.line2, this.line3];
    let joinedLines = lines.join("\n");
    return joinedLines;
  }
}

