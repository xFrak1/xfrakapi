// Requerimiento de Express
const express = require("express");

// Requerimiento de ASCII Art
const math = require("math-expression-evaluator");

/**
 * @param {express} application 
 */

// Exportación del endpoint "ASCII"
module.exports = {
    url: '/calculator/:operation',
    method: 'get',
    run(application, req, res) {
        const operation = req.params.operation;
        try {
            res.json({ operation: operation, result: math.eval(operation) });
        } catch(error) {
            res.sendStatus(400).json({ error: error });
        }
    }
}