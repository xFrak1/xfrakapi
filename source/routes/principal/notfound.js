// Requerimiento de Express
const express = require("express");

/**
 * @param {express} application 
 */

const { application } = require('../../main.js');

// Exportación del inicio de la pagina web
module.exports = {
    url: /.+/,
    method: 'get',
    run(application, req, res) {
        if (!application.endpoints.has(application.url)) {
            res.status(404).sendFile("notfound.html", {
                root: "source/webpage/"
            });
            //res.sendStatus(404);
        }
    }
}