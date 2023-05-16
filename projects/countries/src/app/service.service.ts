import {Injectable} from '@angular/core';
import {ApiService} from "@infra";
import {Observable} from "rxjs";

export interface Country {
  name: {
    common: string
  }
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private api: ApiService) {
  }

  getAll(): Observable<Country[]> {
    return this.api.get<Country[]>('all');
  }
}
