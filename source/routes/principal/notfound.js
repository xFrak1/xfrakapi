module.exports = {
    url: /[^\/]+/,
    method: 'get',
    run(application, req, res) {
        if (!application.endpoints.has(req.url)) {
            res.status(404).sendFile("notfound.html", {
                root: "source/webpage/"
            });
        }
    }
}