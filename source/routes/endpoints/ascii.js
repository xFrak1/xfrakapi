const ascii = require("ascii-art");
const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: "/api/ascii(%3Ftext=:text)?",
    method: "get",
    run(application, req, res) {
        let text = req.query.text;

        if(!text) {
            return res.status(400).json({ error: "Debes incluir un texto." });
        } else ascii.font(text, "Doom", (err, result) => {
            if(err) {
                return res.status(400).json({ error: err });
            } else res.json({ result: result });
        });
    }
})