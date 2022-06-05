// Requerimiento de Express
const express = require("express");

// Requerimiento de ASCII Art
const ascii = require("ascii-art");

/**
 * @param {express} application 
 */

// Exportación del endpoint "ASCII"
module.exports = {
    url: '/api/ascii/:text',
    method: 'get',
    run(application, req, res) {
        const text = req.params.text;
        ascii.font(text, "Doom", (err, result) => {
            if (err) {
                return res.sendStatus(400).json({ error: err });
            }
            res.json({ result: result });
        });
    }
}
