(function () {
    "use strict";
    $(document).ready(function () {

        $("#geoSubmit").click(function () {
            $("#forecasts").empty();
            $("#coordinatesCity").empty();
            getCoordinates();
        });

        var latitude = $("#lat");
        var longitude = $("#lon");

        function getCoordinates() {
            if (latitude.val() !== "" && longitude.val() !== "") {
                var lat = $("#lat").val();
                var lon = $("#lon").val();
                getWeather(lat, lon)
            } else {
                alert("You must enter your coordinates!")
            }
        }

        function getWeather(lat, lon) {
            $.get('http://api.openweathermap.org/data/2.5/forecast', {
                APPID: "1d9259fc21b4fb3a6976934537609e66",
                lat: lat,
                lon: lon,
                units: "imperial",
                cnt: 3
            }).done(function (data) {
                console.log(data);
                var city = data.city.name;
                var cityHtml = "";
                cityHtml += "<h2>" + city + "</h2>";
                $("#coordinatesCity").append(cityHtml);
                data.list.forEach(function (day) {
                    var icon = day.weather[0].icon;
                    var url = "http://openweathermap.org/img/w/" + icon + ".png";
                    var img = "<img src='" + url + "'>";
                    var html = "<div class='col-xs-4 weatherInfo'>";

                    html += "<h2>" + Math.round(day.main.temp_max) + "°/" + Math.round(day.main.temp_min) + "°</h2><span>" + img +
                        "</span><p><strong>" + day.weather[0].main + ": </strong>" + day.weather[0].description + "</p><p><strong>" + "Humidity: </strong>" + day.main.humidity + "</p><p><strong>" + "Wind: </strong>" + day.wind.speed + "</p><p><strong>" + "Pressure: </strong>" + day.main.pressure + "</p></div>";
                    $("#forecasts").append(html);
                })
            });
        }
    })
})();



