const axios = require("axios").default;
const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: "/api/shortener(/:url)?",
    method: "get",
    async run(application, req, res) {
        let url = req.params.url;

        if(!url || url.length < 10) {
            res.status(400).json({ error: "URL invalida" })
        } else {
            await axios.get(`https://is.gd/create.php?format=json&url=${url}`).then((res1) => res1.data.shorturl).then((req1) => {
                await res.json({ url: `${req1}` })
            }).catch((e) => {
                res.status(400).json({ err: `${e.message}` })
            })
        }
    }
})