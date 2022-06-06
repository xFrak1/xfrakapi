const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: "/api/",
    method: "get",
    run(application, req, res) {
        res.sendFile("main.html", {
            root: "source/webpage/"
        });
    }
})