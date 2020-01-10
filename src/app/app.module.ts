import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout'

import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatInputModule, MatProgressBarModule, MatOptionModule, MatAutocompleteModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http'
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component'
import { SharedModule } from './shared/shared.module';
import { SynthesizerComponent } from './synthesizer/synthesizer.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    SynthesizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    MatOptionModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    SharedModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
