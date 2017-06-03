import { Injectable } from '@angular/core';
import { URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { IService } from '../interfaces';
import { DataModel, PagedResponse } from '../models';

@Injectable()
export class DataService implements IService<DataModel> {

  getData(): Observable<DataModel> {
    throw new Error("Method not implemented.");
  }
  getDataByID(id: any): Observable<DataModel> {
    throw new Error("Method not implemented.");
  }
  save(model: DataModel): DataModel {
    throw new Error("Method not implemented.");
  }
  delete(model: DataModel): boolean {
    throw new Error("Method not implemented.");
  }

  constructor (private apiService: ApiService) {}

  getDataByPage(pageIndex: number, pageSize:number = 10): Observable<PagedResponse<DataModel>> {
    return this.apiService.get("/data/" + pageIndex + "/" + pageSize)
      .map(res => res);
  }

}