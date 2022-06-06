const axios = require("axios").default;
const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: "/api/shortener(%3Furl=:url)?",
    method: "get",
    async run(application, req, res) {
        let url = req.query.url;

        if(!url) res.status(400).json({ error: "URL invalida" })
        else await axios.get(`https://is.gd/create.php?format=json&url=${url}`).then((res1) => res1.data.shorturl).then(async (req1) => {
            return await res.json({ url: `${req1}` });
        }).catch((e) => {
            return res.status(400).json({ error: e });
        })
    }
})