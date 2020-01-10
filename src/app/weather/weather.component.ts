import { Component, OnInit, ViewChild, Input, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { MatInput } from '@angular/material';
import { LoaderService } from '../shared/loader.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  subscriptions: Subscription[] = []
  city: any

  options: string[] = []

  @ViewChild(MatInput, {static: false}) input: MatInput;
  constructor(private http: HttpClient, private loader: LoaderService) { }

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
        console.log(res)
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
  // if (value.length % 3 === 0) {
  //   const term = value.toLowerCase()
  //   this.loader.start()
  //   this.subscriptions.push(
  //     this.http.get(`https://andruxnet-world-cities-v1.p.rapidapi.com/?query=${term}&searchby=city`, {
  //       headers: {
  //         "x-rapidapi-host": "andruxnet-world-cities-v1.p.rapidapi.com",
  //         "x-rapidapi-key": "dac1bfeac6msh81fea4f48af0f77p162317jsn2d9f313ea36f"
  //       }
  //     })
  //       .subscribe((res:any) => {
  //         this.loader.stop()
  //         console.log(res)
  //       }, error => {console.error(error)})
  //   )    
  // }
}

  ngOnDestroy() {
    this.subscriptions.forEach(s => {s.unsubscribe()})
  }
}
