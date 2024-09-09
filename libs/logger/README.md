# Birr Logger Module

This module is used to log messages to the standard output. It is a wrapper
around the [winston](https://www.npmjs.com/package/winston) module and replaces
the default NestJS Logger utility. The logger is configured to log messages as
JSON formatted output.

## Features

- Colorful pretty print for development environment
- JSON formatted output for production environment
- Log levels: error, warn, info, verbose, debug
