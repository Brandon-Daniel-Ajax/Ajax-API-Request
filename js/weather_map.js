(function () {
    "use strict";
    $(document).ready(function () {


        $.get('http://api.openweathermap.org/data/2.5/forecast', {
            APPID: "1d9259fc21b4fb3a6976934537609e66",
            q: "San Antonio, TX",
            units: "imperial",
            cnt: 3
        }).done(function (data) {
            console.log(data);
            var html1 = "";
            html1 += "<h2>" + data.list[0].main.temp_max + "/" + data.list[0].main.temp_min + "</h2>" +
                "<p><strong>" + data.list[0].weather[0].main + ": </strong>" + data.list[0].weather[0].description + "</p>"
            console.log(html1);
            $("#div1").append(html1);
        });
    });
})();



