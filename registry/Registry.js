'use strict';

const axios = require('axios');
const { serviceRegistryRouteGet, serviceRegistryRouteInscribe } = require('../config/routes');

class Registry {
  constructor(host, port) {
    this.host = host;
    this.port = port;
  }

  build(name, ip, port) {
    return { name: name, ipv4: ip, port: port };
  }

  async sendRegistry(name, ip, port) {
    return axios.post(
      `http://${this.host}:${this.port}/${serviceRegistryRouteInscribe}`,
      this.build(name, ip, port)
    );
  }

  async getService(name) {
    return axios.get(
      `http://${this.host}:${this.port}/${serviceRegistryRouteGet}/${name}`
    );
  }

  async getServiceIPAndPort(name) {
    const { data } = await this.getService(name);
    return `http://${data.ipv4}:${data.port}`;
  }
}

module.exports = Registry;

