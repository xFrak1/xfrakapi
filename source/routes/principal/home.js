// Requerimiento de Express
const express = require("express")();

/**
 * @param {express} application 
 */

// Exportación del inicio de la pagina web
module.exports = (application) => {
    application.get("/api/", (req, res) => {
        res.sendFile("main.html", {
            root: "source/webpage/"
        })
    })
}