import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(public httpClient: HttpClient) {}

  getWeatherFromApi(){
  return this.httpClient.get('http://api.weatherstack.com/current?access_key=36923d9773ab8e5e2c3b31569add87df&query=Taza%20Morocco');
}

}