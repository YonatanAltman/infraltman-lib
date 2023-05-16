import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

export interface OfekInfraNav {
  label: string;
  link: string;
}

@Component({
  selector: 'infra-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnChanges{
  @Input() navs!: OfekInfraNav[];
  @Input() title?: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges happened', {hey: 'Meir'})
  }

}
