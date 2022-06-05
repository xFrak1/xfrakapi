// Requerimiento de FS
const { readdirSync } = require("fs");

// Exportación del handler
module.exports = (application)  => {
    application.endpoints = new Map();
    readdirSync(`./source/routes/`).forEach((dir) => {
        readdirSync(`./source/routes/${dir}/`).forEach((file) => {
            const endpoint = require(`../routes/${dir}/${file}`);
            application.endpoints.set(endpoint.url, endpoint)
            application[endpoint.method](endpoint.url, (req, res) => {
                endpoint.run(application, req, res);
            });
        });
    });
}