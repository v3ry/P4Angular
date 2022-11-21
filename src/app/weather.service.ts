import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiUrl: string = 'https://api.openweathermap.org/data/2.5';
  apiKey: string = '7e54a59e0551e6f9ec17b3b29810c0ba';
  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/weather?appid=${this.apiKey}&q=${cityName}&lang=fr`
    );
  }

  //getWeather('Lyon');
}
