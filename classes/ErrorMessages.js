/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5dbf025f9ef7a1181f8dfa87
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 * Define cusom errors
 */
const ErrorMessages = Object.freeze({
  UNKNOWN: { status: 500, message: "Unknown server error" },
  UNKNOWN_DB: { status: 500, message: "Unknown DB error" },
  UNAUTHORIZED: { status: 401, message: "Unauthorized" },
  JWT_INVALID: { status: 401, message: "JWT is invalid" },
  JWT_EXPIRED: { status: 401, message: "JWT is expired" },
  NO_TOKEN: { status: 403, message: "No token provided" },
  INVALID_AUTH_HEADER: {
    status: 401,
    message: "Missing `authorization` header"
  },
  OLD_PWD_NOT_VALID: { status: 500, message: "Old password not valid" },
  PWD_ADMIN_NOT_VALID: { status: 500, message: "Password admin not valid" },
  INVALID_LOGIN: { status: 401, message: "Not Authorized" },
  INVALID_BODY: { status: 400, message: "Invalid JSON body" },
  INVALID_QUERY: { status: 400, message: "Invalid query string" }
});

export default ErrorMessages;
