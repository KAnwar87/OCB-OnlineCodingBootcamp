const userController = (req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.send(
        `<html><head><title>NodeJs Assignment</title></head><body><h1>User Controller</h1><h2>Hello ${username}!</h2></body></html>`
    );
};

module.exports = userController;
