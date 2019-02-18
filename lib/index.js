/**
 * Module dependencies.
 */
var fs = require('fs')
  , path = require('path')
  , Server = require('./server')
  , grant = require('./grant')
  , exchange = require('./exchange');


/**
 * Create an OAuth 2.0 server.
 *
 * @return {Server}
 * @api public
 */
function createServer(options) {
  var server = new Server(options);
  return server;
}

// expose createServer() as the module
exports = module.exports = createServer;

/**
 * Export `.createServer()`.
 */
exports.createServer = createServer;


/**
 * Export middleware.
 */
exports.errorHandler = require('./middleware/errorHandler');

/**
 * Load bundled grants.
 */
exports.grant = grant;

// alias grants
exports.grant.authorizationCode = exports.grant.code;
exports.grant.implicit = exports.grant.token;

/**
 * Load bundled exchanges.
 */
exports.exchange = exchange;

// alias exchanges
exports.exchange.code = exports.exchange.authorizationCode;

/**
 * Export errors.
 */
exports.OAuth2Error = require('./errors/oauth2error');
exports.AuthorizationError = require('./errors/authorizationerror');
exports.TokenError = require('./errors/tokenerror');
