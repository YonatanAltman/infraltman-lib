import {Component, Input} from '@angular/core';
import {OfekInfraNav} from "../../nav-bar/nav-bar.component";

@Component({
  selector: 'infra-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  @Input() navs!: OfekInfraNav[];
}
