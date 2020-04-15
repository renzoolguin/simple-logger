export default class Logger {
  constructor (className) {
    this.log = this.log.bind(this);
    this.info = this.info.bind(this);
    this.warn = this.warn.bind(this);
    this.error = this.error.bind(this);
    this.debug = this.debug.bind(this);

    this.prefix = className;
    this.isEnabled = false;
    this.appName = '';
    this.appVersion = '';

    this.prefix += '\n';
  }

  static set enabled(value) {
    this.isEnabled = value;
  }

  static get enabled() {
    return this.isEnabled;
  }

  static init(app, version) {
    this.appName = app;
    this.appVersion = version;
    if (this.appName !== '') {
      this.prefix += ' :: ' + this.appName;
      if (this.appVersion !== '') {
        this.prefix += ' v' + this.appVersion;
      }
    }
  }


  log (message, data, type, force) {
    if (this.isEnabled === true || force === true) {
      let args = [this.prefix];

      if (typeof message === 'string') {
        args[0] += message;
      } else {
        args.push(message);
      }

      if (typeof data !== 'undefined') {
        args.push(data);
      }

      if(typeof console !== 'undefined') {
        if(type === 'error' && console.error) {
          console.error.apply(console, args);
        }
        else if(type === 'error' && typeof window.Error === 'function') {
          throw new Error(args);
        }
        else if(type === 'info' && console.info) {
          console.info.apply(console, args);
        }
        else if(type === 'warn' && console.warn) {
          console.warn.apply(console, args);
        }
        else if(type === 'debug' && console.debug) {
          console.debug.apply(console, args);
        }
        else if(console.log) {
          console.log.apply(console, args);
        }
      }
      else if(typeof window.debug !== 'undefined') {
        window.debug.log.apply(null, args);
      }
    }
  }

  // Aliases
  debug (message, data, force) {
    this.log(message, data, 'debug', force);
  }

  info (message, data, force) {
    this.log(message, data, 'info', force);
  }

  warn (message, data, force) {
    this.log(message, data, 'warn', force);
  }

  error (message, data, force) {
    this.log(message, data, 'error', force);
  }
}

global.Logger = Logger;
