'use strict'
const textRoutes = require("./text");

const constructorMethod = (app) => {
    app.use("/", textRoutes);

    app.use("*", (req, res) => {
        res.redirect("/");
    })
};

module.exports = constructorMethod;