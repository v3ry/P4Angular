import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_KEY } from './secret-constants';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiUrl: string = 'https://api.openweathermap.org/data/2.5';
  apiKey: string = API_KEY;
  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/weather?appid=${this.apiKey}&q=${cityName}&lang=fr`
    );
  }

  //getWeather('Lyon');
}
