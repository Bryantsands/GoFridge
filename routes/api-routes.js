// Requiring our models
var db = require("../models");
// Routes
module.exports = function(app) {
// created route to render index.handlebars file
    app.get("/", function(req,res){
        res.render("index");
    });

}