const f = require("figlet")
const align = require("align-text")
const colours = require("colours")
const moment = require("moment")
module.exports = class CLI {

    constructor() {}

    /**
     * Log an error.
     * @param {String} msg Message to log.
     * @returns {console}
     * @function
     */
    error(msg) {
        return console.log(colours.red(`[error | ${moment(moment.now()).format("DD/MM/YYYY HH:mm:ss")}]: `) + msg);
    }

    /**
     * Log info.
     * @param {String} msg Message to log.
     * @returns {console}
     * @function
     */
    info(msg) {
        return console.log(colours.blue(`[info | ${moment(moment.now()).format("DD/MM/YYYY HH:mm:ss")}]: `) + msg);
    }

    /**
     * Log a success.
     * @param {String} msg Message to log.
     * @returns {console}
     * @function
     */
    success(msg) {
        return console.log(colours.green(`[success | ${moment(moment.now()).format("DD/MM/YYYY HH:mm:ss")}]: `) + msg);
    }

    /**
     * Log a warning.
     * @param {String} msg Message to log.
     * @returns {console}
     * @function
     */
    warn(msg) {
        return console.log(colours.yellow(`[warn | ${moment(moment.now()).format("DD/MM/YYYY HH:mm:ss")}]: `) + msg);
    }

    setup(config) {
        var keys = config.keys();
        
    }
}