const math = require("math-expression-evaluator");
const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: "/api/calculator(%3Fcalculation=:calculation)?",
    method: "get",
    run(application, req, res) {
        let operation = req.query.calculation;

        if (!operation) {
            return res.status(400).json({ error: "Debes escribir un cálculo." });
        } else try {
            res.json({ operation: operation, result: math.eval(operation) });
        } catch(error) {
            res.status(400).json({ error: error });
        }
    }
})