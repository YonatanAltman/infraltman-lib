import {Component} from '@angular/core';
import {OfekInfraNav} from "../../projects/infra/src/lib/nav-bar/nav-bar.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ofek-infras';

  navs: OfekInfraNav[] = [
    {label: 'home', link: 'home'},
    {label: 'feed', link: 'feed'},

  ]
}
