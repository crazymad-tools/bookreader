function ShowDateUpdate(obj) {
    var time = new Date();
    var year;
    var month;
    var day;
    var hour;
    var min;
    var sec;

    var update = function() {
        time = (new Date()) + "";
        var data = time.match(/[^\s\:]+/g);
        month = data[1];
        day = data[2];
        year = data[3];
        hour = data[4];
        min = data[5];
        sec = data[6];
    };
    update();
    this.timer = setInterval(function() {
        if (++sec >= 60) {
            update();
        }
        var str = hour + ":" + min + ":" + (sec >= 10 || sec == 0 ? sec : "0"+sec);
        //console.log(str);
        obj.html(str);
    }, 1000);
}

function closeWindow() {
    saveBooks();
    saveConfig();
    window.close();
}
