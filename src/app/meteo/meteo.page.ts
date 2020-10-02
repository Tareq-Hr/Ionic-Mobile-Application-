/////////////
import { Component, OnInit } from '@angular/core';

import { WeatherService } from "../weather.service";
import {FormGroup, FormControl, Validators } from "@angular/forms";
//ionic storage
import { Storage } from "@ionic/storage";

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.page.html',
  styleUrls: ['./meteo.page.scss'],
})
export class MeteoPage implements OnInit {

  
  constructor(public weatherService: WeatherService) {

  }

  public weatherForm = new FormGroup({
    city: new FormControl('', Validators.required),
  });
  public weather;
  public city;

  search(formData: FormData){
    console.log(formData);

    this.weatherService.getWeatherFromApi().subscribe( weather => {
      this.weather = weather;
      console.log(weather);
    })

  }


  getWeather(){

          this.weatherService.getWeatherFromApi().subscribe( weather => {
            this.weather = weather;
            console.log(weather);
          });

  }

  ngOnInit() {
    this.getWeather();
  }


}
