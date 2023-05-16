import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {InfraButton} from "../../../projects/infra/src/lib/button/button.interface";

@Component({
  selector: 'test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  title = 'this is home!';
  homeButton: InfraButton = {
    label: 'Let go home'
  };
  errorButton: InfraButton = {
    label: 'You\'r late',
    type: 'error'
  };

  ngOnInit(): void {
    console.log('ngOnInit happened', {hey: 'Yonatan'})

    this.title = 'בית';

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges happened', {hey: 'Meir'})
  }

  constructor() {
  }

}
