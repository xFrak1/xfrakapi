const { App } = require("../../controllers/appdef");

module.exports = new App({
    url: "/",
    method: "get",
    run(application, req, res) {
        res.redirect("/api/");
    }
})