const math = require("math-expression-evaluator");

module.exports = {
    url: "/api/calculator(/:operation)?",
    method: "get",
    run(application, req, res) {
        let operation = req.params.operation;
        if (!operation) return res.status(400).json({ error: "Debes escribir un cálculo." });
        try {
            res.json({ operation: operation, result: math.eval(operation) });
        } catch(error) {
            res.status(400).json({ error: error });
        }
    }
}