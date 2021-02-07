const path = require('path');
const axios = require('axios');
const getMockAxiosResponseFromFile = require('../utils/get-mock-axios-response-from-file.util');

class CustomAxios {

  constructor(axiosConfig = {}, isMockData = false) {
    this.axiosInstance = axios.create(axiosConfig);
    this.isMockData = isMockData;

    this.init();
  }

  init() {
    console.log('Custom Axios init', new Date().getTime());
    console.log('Using Mock Data?', this.isMockData);
  }

  getUri(config) {
    return this.axiosInstance.getUri(config);
  }

  request(config) {
    return this.axiosInstance.request(config);
  }

  get(url, config) {
    if (this.isMockData) {
      console.log('going to serve up mock data now');
      // return getMockAxiosResponseFromFile(path.join(__dirname, 'mock-data', 'mock-response.json'));
      return getMockAxiosResponseFromFile(path.join(process.cwd(), 'mock-data', 'mock-response.json'));
    } else {
      console.log('going to call the service and get live data');
      return this.axiosInstance.get(url, config);
    }
  }

  delete(url, config) {
    return this.axiosInstance.delete(url, config);
  }

  head(url, config) {
    return this.axiosInstance.head(url, config);
  }

  options(url, config) {
    return this.axiosInstance.options(url, config);
  }

  post(url, data, config) {
    return this.axiosInstance.post(url, data, config);
  }

  put(url, data, config) {
    return this.axiosInstance.put(url, data, config);
  }

  patch(url, data, config) {
    return this.axiosInstance.patch(url, data, config);
  }
}

module.exports = CustomAxios;
