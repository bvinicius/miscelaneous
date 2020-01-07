import { Component, OnInit, ViewChild, Input, ViewChildren } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  subscriptions: Subscription[] = []
  countries: String[] = []

  city: any

  @ViewChild(MatInput, {static: false}) input: MatInput;
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {this.input.focus()})
  }

  fetchWeather(city:string) {
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
        console.log(res)
        this.city = {
          name: res.name,
          country: res.sys.country,
          temperature: res.main.temp
        }
      })
  }

    onChange(value:string) {
    const term = value.toLowerCase()
    this.subscriptions.push(
      this.http.get('')
        .subscribe((res:any) => {
          this.countries = res
          console.log(res)
        }, error => {})
    )  
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => {s.unsubscribe()})
  }
}
