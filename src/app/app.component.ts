import { Component, ViewChild } from '@angular/core';

import { MatSidenav } from '@angular/material'
import { Router } from '@angular/router';
import { LoaderService } from './shared/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild(MatSidenav, {static: false}) sidenav: MatSidenav;

  title: 'Miscelaneous'  

  constructor(private router: Router, private loader: LoaderService) {
  }

  toggleSidenav() {
    this.sidenav.toggle()
  }

  goTo(s:string) {
    this.router.navigate([s])

    this.sidenav.toggle()
    console.log(this.router)
  }
}

