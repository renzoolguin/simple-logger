// Type definitions for simple-logger v1.0.1

/*~ If this module is a UMD module that exposes a global variable 'myClassLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace Logger;

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = Logger;

/*~ Write your module's methods and properties in this class */
declare class Logger {
  constructor(className: string);
  private isEnabled: boolean;
  private prefix: string;
  private appName: string;
  private appVersion: string;
  init(app: string, version: string): void;
  set enabled(value: boolean): void;
  get enabled(): boolean;
  log(message: string, data: object, type: string, force: boolean): void;
  debug(message: string, data: object, type: string, force: boolean): void;
  info(message: string, data: object, type: string, force: boolean): void;
  warn(message: string, data: object, type: string, force: boolean): void;
  error(message: string, data: object, type: string, force: boolean): void;
}