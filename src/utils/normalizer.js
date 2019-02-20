// magic from https://stackoverflow.com/a/37511463/1167210
const normalize = str => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

module.exports = {
  normalize,
};
