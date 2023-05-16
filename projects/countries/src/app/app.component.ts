import {Component, OnInit} from '@angular/core';
import {AppService, Country} from "./service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'countries';
  countries: Country[] = [];

  constructor(private service: AppService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll(): void {
    this.service.getAll().subscribe(arr => {
      this.countries = arr;
    })
  }
}
