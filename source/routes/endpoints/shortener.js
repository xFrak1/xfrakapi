const axios = require("axios").default;

module.exports = {
    url: "/api/shortener(%3Furl=:url)?",
    method: "get",
    async run(application, req, res) {
        let url = req.query.url;

        if(!url) res.status(400).json({ error: "URL invalida" })
        else await axios.get(`https://is.gd/create.php?format=json&url=${url}`).then((res1) => res1.data.shorturl).then((req1) => {
            res.json({ url: `${req1}` });
        }).catch((e) => {
            res.status(400).json({ error: e });
        })
    }
}