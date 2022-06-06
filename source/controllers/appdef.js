const { application } = require("../main");

/**
 * @param {application} application 
 * @param {unknown} req 
 * @param {unknown} res 
 */
function run(application, req, res){}

module.exports = {
    App: class {
        /**
        * @typedef {{ url: string, method: string, run: run }} options
        * @param {options} options
        */
    
        constructor(options) {
            this.url = options.url;
            this.method = options.method;
            this.run = options.run;
        }
    }
}