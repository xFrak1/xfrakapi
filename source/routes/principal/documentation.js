// Requerimiento de Express
const express = require("express")();

/**
 * @param {express} application 
 */

// Exportación del inicio de la pagina web
module.exports = (application) => {
    application.get("/api/docs", (req, res) => {
        res.sendFile("documentation.html", {
            root: "source/webpage/"
        })
    })
}