const getFileAsync = require('./get-file-async.util');
const { createAxiosResponse } = require('./create-axios-response.util');

function getMockAxiosResponseFromFile(filePath, errorResponse = {}) {
  return getFileAsync(filePath, 'utf8').then((fileData) => {
    try {
      const data = JSON.parse(fileData);
      // return createAxiosResponse(data, {headers: {'Content-Type': 'application/json'}});
      return createAxiosResponse(data);
    } catch (err) {
      return Promise.reject(err);
    }
  }).catch((err) => {
    if (Object.keys(errorResponse).length > 0) {
      return Promise.reject(errorResponse);
    } else {
      return Promise.reject(err);
    }
  });
}

module.exports = getMockAxiosResponseFromFile;
