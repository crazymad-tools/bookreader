function init() {
    global.isFullScreen = false;            // 标记当前是否处于全屏状态
    global.bookindex = 1;                   // 当前正在阅读的小说在小说队列中的index值
    global.config = {};                     // 储存应用的配置项

    var fs = require("fs");
    // 读取配置项
    var conf = "" + fs.readFileSync("config.json", function(err, data) {
        return data;
    });
    conf = JSON.parse(conf);
    for (var item in conf) {
        global.config[item] = conf[item];
    }
    // 读取小说队列信息
    var books = "" + fs.readFileSync("books.json", function(err, data) {
        return data;
    });
    books = JSON.parse(books);
    console.log(books);
    global.books = books;
    console.log(global.books[1]);
}
function saveBooks() {
    var json = [];
    for (var i = 0; i < global.books.length; i++) {
        console.log(global.books[i].bookmark);
        json.push({
            "bookname" : global.books[i].bookname,
            "filename" : global.books[i].filename,
            "bookmark" : global.books[i].bookmark
        });
    }
    console.log(json);
    var fs = require("fs");
    fs.writeFileSync("books.json", JSON.stringify(json), function(err) {
        if (err) {
            console.log(err + "books.json文件写入失败");
        } else {
            console.log("books.json文件写入完成");
        }
    })
}
function saveConfig() {
    var fs = require("fs");
    fs.writeFileSync("config.json", JSON.stringify(global.config), function(err) {
        if (err) {
            console.log(err, "config.json文件写入失败");
        } else {
            console.log("config.json文件写入完成");
        }
    })
}

