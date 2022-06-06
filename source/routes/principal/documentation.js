const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: "/api/docs",
    method: "get",
    run(application, req, res)  {
        res.sendFile("documentation.html", {
            root: "source/webpage/"
        });
    }
})