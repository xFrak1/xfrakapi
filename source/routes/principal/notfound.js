const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: /[^\/]+/,
    method: 'get',
    run(application, req, res) {
        if (!application.endpoints.has(req.url)) {
            res.status(404).sendFile("notfound.html", {
                root: "source/webpage/"
            });
        }
    }
})