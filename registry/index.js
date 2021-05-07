var Registry = require('./Registry');

module.exports = (host, port) => {
  return new Registry(host, port);
}