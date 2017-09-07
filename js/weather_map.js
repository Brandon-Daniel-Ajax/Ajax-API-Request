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
            data.list.forEach(function (day) {
                var icon = day.weather[0].icon;
                var url = "http://openweathermap.org/img/w/" + icon + ".png";
                var img = "<img src='" + url + "'>";
                var html = "<div class='col-xs-4 weatherInfo'>";

                html += "<h2>" + Math.round(day.main.temp_max) + "/" + Math.round(day.main.temp_min) + "&#8457;</h2><span>" + img +
                    "</span><p><strong>" + day.weather[0].main + ": </strong>" + day.weather[0].description + "</p><p><strong>" + "Humidity: </strong>" + day.main.humidity + "</p><p><strong>" + "Wind: </strong>" + day.wind.speed + "</p><p><strong>" + "Pressure: </strong>" + day.main.pressure + "</p></div>";
                $("#forecasts").append(html);

            })

            // var icon1 =  data.list[1].weather[0].icon;
            // var url1 = "http://openweathermap.org/img/w/" + icon1 + ".png";
            // var img1 = "<img src='" + url1 + "'>";
            // var html2 = "";
            // html2 += "<h2>" + Math.round(data.list[1].main.temp_max) + "/" + Math.round(data.list[1].main.temp_min) + "&#8457;</h2><span>" + img1 +
            //     "</span><p><strong>" + data.list[1].weather[0].main + ": </strong>" + data.list[1].weather[0].description + "</p><p><strong>" + "Humidity: </strong>" + data.list[1].main.humidity + "</p><p><strong>" + "Wind: </strong>" + data.list[1].wind.speed + "</p><p><strong>" + "Pressure: </strong>" + data.list[1].main.pressure + "</p>";
            // $("#div2").append(html2);
            //
            // var icon2 =  data.list[2].weather[0].icon;
            // var url2 = "http://openweathermap.org/img/w/" + icon2 + ".png";
            // var img2 = "<img src='" + url2 + "'>";
            // var html3 = "";
            // html3 += "<h2>" + Math.round(data.list[2].main.temp_max) + "/" + Math.round(data.list[2].main.temp_min) + "&#8457;</h2><span>" + img2 +
            //     "</span><p><strong>" + data.list[2].weather[0].main + ": </strong>" + data.list[2].weather[0].description + "</p><p><strong>" + "Humidity: </strong>" + data.list[2].main.humidity + "</p><p><strong>" + "Wind: </strong>" + data.list[2].wind.speed + "</p><p><strong>" + "Pressure: </strong>" + data.list[2].main.pressure + "</p>";
            // $("#div3").append(html3);
        });
    });
})();



