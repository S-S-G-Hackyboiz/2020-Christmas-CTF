class Random {
  static string(characters, min, max, prefix = "", suffix = "") {
    let length = this.number(min, max);
    let tempString = "";

    for (let i = 0; i < length; i += 1) {
      tempString += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return prefix + tempString + suffix;
  }

  static identifier() {
    let temp = this.string(
      global.config.randomization.identifier.characters,
      global.config.randomization.identifier.min,
      global.config.randomization.identifier.max
    );

    if (global.identifiers.includes(temp)) {
      return this.identifier();
    }

    global.identifiers.push(temp);

    return temp;
  }

  static number(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static percent(threshold) {
    return Math.random() < threshold;
  }

  static choice(array) {
    return array[this.number(0, array.length - 1)];
  }

  static shuffle(array) {
    for (let i = array.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}

module.exports = Random;
