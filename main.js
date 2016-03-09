var Forecast = require('forecast');
var chalk = require('chalk');

var forecast = new Forecast({
      service: 'forecast.io',
      key : "GO GET A KEY FROM FORECAST.IO",
      units: 'celcius',
      cache: true,
      ttl: {
        minutes:0,
        seconds:30,
      }
    })

// setInterval(
//   ()=>{
//     getOfficeWeather();
//   }, 1000
// )

function getOfficeWeather(){
  forecast.get([37.414685, -122.149854],function(err,weather){
    if(err) return console.error(err);

    if(weather.currently.precipIntensity > 0) console.info(chalk.red('Fuck, it\'s raining ', weather.currently.precipIntensity));
    else console.info(chalk.green('Good to go home'));
  })
}

getOfficeWeather();
