const { normalize } = require('./normalizer');

const toBeProperJson = response => JSON.parse(response.text);

const toHaveProperText = text => response => {
  const str = normalize(response.body.extenso);
  if (str !== normalize(text)) {
    throw new Error(`"${response.body.extenso}"`);
  }
};

const toNotHaveServerError = response => {
  if (response.serverError) {
    throw new Error(response.status)
  }
};

module.exports = {
  toBeProperJson,
  toHaveProperText,
  toNotHaveServerError,
};
