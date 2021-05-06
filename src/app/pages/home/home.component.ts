import { Component } from '@angular/core';
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DatePipe]
})

export class HomeComponent {

  myDate = new Date();
  fecha: string = '';

  constructor(private datePipe: DatePipe) {
    this.fecha = this.datePipe.transform(this.myDate, 'dd - MMMM - yyyy');
  }




}
