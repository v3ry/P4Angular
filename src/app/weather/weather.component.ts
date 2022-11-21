import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  city!: string;
  weath: any = {};
  icon!: string;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService
      .getWeather('Lyon')
      // .subscribe((weather) => console.log(weather));
      .subscribe((weather) => {
        this.weath = {
          weather: weather.weather,
          icon:
            'http://openweathermap.org/img/wn/' +
            weather.weather[0].icon +
            '@2x.png',
          temp: (weather.main.temp - 273.15).toFixed(2),
        };
        this.icon =
          'http://openweathermap.org/img/wn/' +
          weather.weather[0].icon +
          '@2x.png';
        console.log(weather);
      });
  }

  searchWeather(): void {}
}
