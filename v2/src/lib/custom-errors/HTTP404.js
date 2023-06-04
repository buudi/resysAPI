class HTTP404 extends Error {
  constructor(message) {
    super(message);
    this.name = '404 Not Found';
    this.status = 404;
    this.message = message || 'Not Found';
  }
}

module.exports = HTTP404;