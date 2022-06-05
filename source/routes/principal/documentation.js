// Requerimiento de Express
const express = require("express")();

/**
 * @param {express} application 
 */

// Exportación del inicio de la pagina web
module.exports = {
    url: '/api/docs',
    method: 'get',
    run(application, req, res)  {
        res.sendFile("documentation.html", {
            root: "source/webpage/"
        });
    }
}