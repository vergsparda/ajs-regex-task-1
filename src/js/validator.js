export default class Validator {
  static validUsername(name) {
    const allowedCharacters = /[^(a-zA-Z\d)]/.test(name);
    const threeNumbers = /\d{4}/.test(name);
    const startEndString = /^[^0-9][a-z]|[a-z][^0-9]$/i.test(name);

    return !allowedCharacters && !threeNumbers && startEndString;
  }
}
