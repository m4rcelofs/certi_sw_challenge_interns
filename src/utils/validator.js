const { normalize } = require('./normalizer');

const toBeProperJson = response => JSON.parse(response.text);

const toHaveProperText = text => response => {
  const key = 'extenso';
  const responseText = response.body[key] || JSON.parse(response.text)[key];
  if (!responseText) {
    throw new Error(`Unexpected response for ${text}: \n ${response.text}`);
  }
  const str = normalize(responseText);
  const acceptedAlternatives = text.split('|').map(normalize);
  if (!acceptedAlternatives.includes(str)) {
    throw new Error(`Wrong response for "${acceptedAlternatives}": "${responseText}"`);
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
