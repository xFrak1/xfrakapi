module.exports = {
    url: "/api/",
    method: "get",
    run(application, req, res) {
        res.sendFile("main.html", {
            root: "source/webpage/"
        });
    }
}