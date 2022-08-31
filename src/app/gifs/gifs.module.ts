import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SerchComponent } from './serch/serch.component';
import { ResultsComponent } from './results/results.component';



@NgModule({
  declarations: [
    GifsPageComponent,
    SerchComponent,
    ResultsComponent
  ],
  exports:[
    GifsPageComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
