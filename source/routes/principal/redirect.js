module.exports = {
    url: "/",
    method: "get",
    run(application, req, res) {
        res.redirect("/api/");
    }
}