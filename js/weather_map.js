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
            html1 += "<h2>" + Math.round(data.list[0].main.temp_max) + "/" + Math.round(data.list[0].main.temp_min) + "&#8457;</h2>" +
                "<p><strong>" + data.list[0].weather[0].main + ": </strong>" + data.list[0].weather[0].description + "</p><p><strong>" + "Humidity: </strong>" + data.list[0].main.humidity + "</p><p><strong>" + "Wind: </strong>" + data.list[0].wind.speed + "</p><p><strong>" + "Pressure: </strong>" + data.list[0].main.pressure + "</p>";
            $("#div1").append(html1);

            var html2 = "";
            html2 += "<h2>" + Math.round(data.list[1].main.temp_max) + "/" + Math.round(data.list[1].main.temp_min) + "&#8457;</h2>" +
                "<p><strong>" + data.list[1].weather[0].main + ": </strong>" + data.list[1].weather[0].description + "</p><p><strong>" + "Humidity: </strong>" + data.list[1].main.humidity + "</p><p><strong>" + "Wind: </strong>" + data.list[1].wind.speed + "</p><p><strong>" + "Pressure: </strong>" + data.list[1].main.pressure + "</p>";
            $("#div2").append(html2);

            var html3 = "";
            html3 += "<h2>" + Math.round(data.list[2].main.temp_max) + "/" + Math.round(data.list[2].main.temp_min) + "&#8457;</h2>" +
                "<p><strong>" + data.list[2].weather[0].main + ": </strong>" + data.list[2].weather[0].description + "</p><p><strong>" + "Humidity: </strong>" + data.list[2].main.humidity + "</p><p><strong>" + "Wind: </strong>" + data.list[2].wind.speed + "</p><p><strong>" + "Pressure: </strong>" + data.list[2].main.pressure + "</p>";
            $("#div3").append(html3);
        });
    });
})();



