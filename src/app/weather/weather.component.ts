import { Component, OnInit, ViewChild, Input, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { MatInput } from '@angular/material';
import { LoaderService } from '../shared/loader.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  subscriptions: Subscription[] = []
  city: any

  formControl = new FormControl()
  options: string[] = []

  @ViewChild(MatInput, {static: false}) input: MatInput;
  constructor(private http: HttpClient, private loader: LoaderService) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {this.input.focus()})
  }

  fetchWeather(city:string) {
    this.loader.start()
    this.input.value = ''

    const term = city
                  .split(' ')
                  .join('+')

    console.log(term)
    
    this.http.get(`https://community-open-weather-map.p.rapidapi.com/weather?q=${term}&units=metric`,
      {
        headers: {	
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key": "dac1bfeac6msh81fea4f48af0f77p162317jsn2d9f313ea36f"
        }
      })
      .subscribe((res:any) => {
        this.loader.stop()
        // console.log(res)
        this.city = {
          name: res.name,
          country: res.sys.country,
          temperature: res.main.temp, 
          feelsLike: res.main.feels_like,
          weather: res.weather[0].description
        }
      })
  }

  onChange(value:string) {
    if (value.length >= 3) {
      const term = value.toLowerCase();

      this.http.get(`https://secure.geobytes.com/AutoCompleteCity?key=7c756203dbb38590a66e01a5a3e1ad96&q=${term}&sort=size&limit=5`)
      .subscribe((res:any) => {
        this.options = res
      })
    } 
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => {s.unsubscribe()})
  }
}
