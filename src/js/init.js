function init() {
    global.config = {};

    var fs = require("fs");
    var conf = "" + fs.readFileSync("config.json", function(err, data) {
        return data;
    });
    conf = JSON.parse(conf);
    for (var item in conf) {
        global.config[item] = conf[item];
    }

    var books = "" + fs.readFileSync("books.json", function(err, data) {
        return data;
    });
    books = JSON.parse(books);
    global.books = books;
}