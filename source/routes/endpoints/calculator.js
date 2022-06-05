// Requerimiento de Express
const express = require("express")();

// Requerimiento de ASCII Art
const math = require("math-expression-evaluator");

/**
 * @param {express} application 
 */

// Exportación del endpoint "ASCII"
module.exports = (application) => {
    application.get("/api/calculator/:operation", (req, res) => {
        let operation = req.params.operation;

        try {
            res.json({ operation: `${operation}`, result: `${math.eval(operation)}` });
        } catch(error) {
            res.sendStatus(400);
        }
    })
}