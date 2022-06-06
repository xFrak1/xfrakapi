module.exports = {
    url: "/api/docs",
    method: "get",
    run(application, req, res)  {
        res.sendFile("documentation.html", {
            root: "source/webpage/"
        });
    }
}