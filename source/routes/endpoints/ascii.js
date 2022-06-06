const ascii = require("ascii-art");
const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: "/api/ascii(/:text)?",
    method: "get",
    run(application, req, res) {
        let text = req.params.text;
        if (!text) return res.status(400).json({ error: "Debes incluir un texto." });
        ascii.font(text, "Doom", (err, result) => {
            if (err) {
                return res.status(400).json({ error: err });
            }
            res.json({ result: result });
        });
    }
})