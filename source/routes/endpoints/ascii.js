// Requerimiento de Express
const express = require("express")();

// Requerimiento de ASCII Art
const ascii = require("ascii-art");

/**
 * @param {express} application 
 */

// Exportación del endpoint "ASCII"
module.exports = (application) => {
    application.get("/api/ascii/:text", (req, res) => {
        let text = req.params.text;
        
        if(!text) {
            res.json({ error: "Texto no proporcionado" })
        } else if(text || text.length > 0) {
            ascii.font(text, "Doom", (err, result) => {
                if(err) {
                    res.sendStatus(400);
                } else res.json({ result: `${result}` });
            })
        }
    })
}