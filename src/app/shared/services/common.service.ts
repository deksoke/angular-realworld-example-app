import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Post } from '../models';

@Injectable()
export class CommonService {
  constructor (
    private apiService: ApiService,
    private http: Http
  ) {}

  getMenuItems(): Observable<any> {
    return this.http.get('/assets/mock-up/menu-items.json')
        .map(data => data.json());
  }
}
