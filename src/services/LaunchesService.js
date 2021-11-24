const axios = require('axios');

class LaunchesService {
  static baseUrl = 'https://api.spacexdata.com/v5/launches/';

  static next() {
    return axios.get(this.baseUrl + 'next').then(response => response.data);
  }

  static latest() {
    return axios.get(this.baseUrl + 'latest').then(response => response.data);
  }

  static upcoming() {
    return axios.get(this.baseUrl + 'upcoming').then(response => response.data);
  }

  static past() {
    return axios.get(this.baseUrl + 'past').then(response => response.data);
  }
}

module.exports = LaunchesService
