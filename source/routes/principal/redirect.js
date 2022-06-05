// Requerimiento de Express
const express = require("express");

/**
 * @param {express} application 
 */

// Exportación del inicio de la pagina web
module.exports = {
    url: '/',
    method: 'get',
    run(application, req, res) {
        res.redirect("/api/");
    }
}