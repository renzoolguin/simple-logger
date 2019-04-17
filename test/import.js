import * as ES6_Logger from '../dist/simple-logger';
const chai = require('chai');
const expect = chai.expect;
const padding = '\n    ';

describe('Logger', function() {
  describe(`${padding}Require Logger as a CommonJS module`, function() {
    const CJS_Logger = require('../dist/simple-logger');
    testLoggerClass(CJS_Logger);
  });

  describe(`${padding}Import Logger as an ES6 module`, function() {
    testLoggerClass(ES6_Logger);
  });

  describe(`${padding}Get Logger from global scope (loaded via script tag)`, function() {
    testLoggerClass(window.Logger);
  });
});

function testLoggerClass(LoggerClass) {
  const padding = '\n      ';
  let logger;

  console.log('LoggerClass:', LoggerClass);

  it('Logger module is a function', function() {
    expect(LoggerClass).to.be.a('function');
  });

  it('Logger has static method, init()', function() {
    expect(LoggerClass).to.have.own.property('init').to.be.a('function');
  });

  it('Logger has static property, enabled<Boolean>', function() {
    expect(LoggerClass).to.have.own.property('enabled').to.be.a('boolean');
  });

  it('Logger is a constructor', function() {
    logger = new LoggerClass('CommonJS Logger');
    expect(logger).to.be.an('object');
  });

  it('Logger instance has public property, prefix<String>', function() {
    logger = new LoggerClass('CommonJS Logger');
    expect(logger).to.have.own.property('prefix').to.be.a('string');
  });

  describe(`${padding}Logger instance has public methods:`, function() {
    let methods = ['debug', 'error', 'info', 'log', 'warn'];
    methods.forEach(method => {
      it(method, function() {
        expect(logger).to.have.own.property(method).to.be.a('function');
      });
    });
  });
}

