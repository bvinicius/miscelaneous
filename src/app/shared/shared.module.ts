import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderService } from './loader.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ LoaderService ]
})
export class SharedModule {}
