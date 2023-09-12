const homeController = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(
        "<html><head><title>NodeJs Assignment</title></head><body><h1>Home Controller</h1></body></html>"
    );
};

module.exports = homeController;
