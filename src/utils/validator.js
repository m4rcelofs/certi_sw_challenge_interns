const { normalize } = require('./normalizer');

const toBeProperJson = response => JSON.parse(response.text);

const toHaveProperText = text => response => {
  const key = 'extenso';
  const responseText = response.body[key] || JSON.parse(response.text)[key];
  if (!responseText) {
    throw new Error(`Unexpected response for ${text}: \n ${response.text}`);
  }
  const str = normalize(responseText);
  if (str !== normalize(text)) {
    throw new Error(`Wrong response for "${text}": "${responseText}"`);
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
