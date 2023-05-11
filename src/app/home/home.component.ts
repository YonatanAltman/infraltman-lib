import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'test-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,OnChanges {
  title = 'this is home!';
  ngOnInit(): void {
    console.log('ngOnInit happened',{hey:'Yonatan'})

    this.title = 'בית';

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges happened', {hey: 'Meir'})
  }
  constructor() {
  }

}
