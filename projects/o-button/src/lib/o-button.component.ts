import {Component, Input} from '@angular/core';
import {OButtonType} from "./o-button.type";

@Component({
  selector: 'o-button',
  template: `
    <button class="o-button" [ngClass]="type">
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['./o-button.component.scss']
})
export class OButtonComponent {

  @Input() type: OButtonType = 'basic';
}
