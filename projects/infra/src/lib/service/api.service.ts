import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, Observable} from "rxjs";
import {INFRA_ENVIRONMENT_TOKEN, InfraEnvironment} from "../tokens/environment.token";

export interface InfraHttpResponse {
  rc?: number;
  message?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly api: string;

  constructor(private http: HttpClient,
              @Inject(INFRA_ENVIRONMENT_TOKEN) environment: InfraEnvironment) {
    this.api = environment.api;
    console.log('environment', environment);
  }

  get<T>(url: string): Observable<T> {
    return this.http.get<T>(this.api + url)
  }

  post<T, R = InfraHttpResponse>(url: string, body: T): Observable<R> {
    return this.http.post<R>(this.api + url, body).pipe(catchError(err => {
      return EMPTY;
    }))
  }
}
