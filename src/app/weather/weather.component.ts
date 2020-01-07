import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  subscriptions: Subscription[] = []
  countries: String[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
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

  fetchCountries() {
    
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => {s.unsubscribe()})
  }
}
