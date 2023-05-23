import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

export interface Role {
  rid: 'user' | 'viewer' | 'admin';
  name?: string;
}

export interface User {
  uid: string;
  fullName: string;
  roles: Role[];
}

export const toInfraUser = (_user:any):User=>{
  return {
    ..._user,
    uid: _user.id || _user.sid || _user.tz || _user.phone
  }
}

@Component({
  selector: 'infra-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.scss']
})
export class UserActionsComponent implements OnChanges {
  fullname?: string;
  @Input() user!: User;
  @Input() startDate?: string;
  label = {
    hey: 'Hey'
  }

  onChanges() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    const _user = changes['user'];
    if (_user.currentValue) {
      this.fullname = _user.currentValue.fullName;
    }
  }

}
