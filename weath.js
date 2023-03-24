function selectCity() {
  let city = document.getElementById("mySelect").value;
  return city;
}
$("#show_weather").click(function () {
  $.getJSON(
    `https://api.openweathermap.org/data/2.5/weather?q=${selectCity()}&units=metric&APPID=06ddd03d11d9a328c9ecbdd226fb407f`,
    function (result) {
      let show = document.getElementById("weather");
      show.innerHTML = `<table><tr><th>Temperature</th><th>Cloudiness</th><th>Atmosphere pressure</th><th>Wind speed</th></tr><tr><td>${result.main.temp}</td><td>${result.weather[0].description}</td><td>${result.wind.speed}</td><td>${result.main.humidity}</td></tr></table>`;
      console.log(result);
      // console.log(result.weather[0].main + " " + result.weather[0].description);
      // console.log(result.coord.lat + " " + result.coord.lon);
      // $.each(result, function (i, field) {
      //     $("#weather").append(`i ${field.name} ${field.author}  <br>`);
      // });
    }
  );
});
