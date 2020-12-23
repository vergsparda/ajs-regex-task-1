export default class Validator {
  static validUsername(name) {
    const allowedCharacters = /[^(a-zA-Z\d)]/.test(name);
    const threeNumbers = /\d{3,}/.test(name);
    const startEndString = /^[-_\d]|[-_\d]$/.test(name);

    return !allowedCharacters && !threeNumbers && !startEndString;
  }
}
