import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl: string = environment.apiUrl;

  constructor(protected httpClient: HttpClient) { }

  protected createUrl(path: string): string {
    return this.apiUrl + path;
  }
}
