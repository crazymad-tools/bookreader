var fs = require("fs");
var reg = /\s[第]([0-9]+|[一二三四五六七八九十零]+)[章][^\n]*\n/g;			// 断章正则

function getTxtInfo(bookindex) {
	console.log(global.books[1]);
	console.log(bookindex);
	var text = "" + fs.readFileSync(global.books[bookindex].filename, function(err, data) {
		if (err) {
			return console.error(err);
		}
		return data;
	});
	var tmp = "";
	var articles = [];
	while (tmp = reg.exec(text)) {
		var len = tmp[0].length;
		var index = tmp.index;
		tmp = tmp[0].match(/[^\n]+/g)[0];
		articles.push({
			index : index+1,
			textbegin: index+len,
			title : tmp
		});
	}
	global.books[bookindex].text = text;
	global.books[bookindex].articles = articles;
	return {
		articles : articles
	};
}

