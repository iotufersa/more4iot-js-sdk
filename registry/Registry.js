'use strict';

const axios = require('axios');

class Registry {
  constructor(host, port){
    this.host = host;
    this.port = port;
  }

  build(name, ip, port){
    return { name: name, ipv4: ip, port: port };
  }

  async sendRegistry(name, ip, port){
    return await axios.post(
      `http://${host}:${port}`,
      build(name, ip, port)
    );
  }
  
  async getService(name) {
    return await axios.get(
      `http://${host}:${port}/${name}`
    );
  }
  
  async getServiceIPAndPort(name){
    const { data } = await getService(name);
    return `http://${data.ipv4}:${data.port}`;
  }
}

module.exports = Registry;

