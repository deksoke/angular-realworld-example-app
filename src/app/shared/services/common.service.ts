import { Injectable } from '@angular/core';
import { URLSearchParams, Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApiService } from './api.service';
import { Post } from '../models';


export enum ConfirmBoxType {
  success,
  info,
  warn,
  error
}

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

  alertMessage(message: string){
    alert(message);
  }
  alertSuccessMessage(){
    alert('ทำรายการสำเร็จ');
  }
  alertErrorMessage(){
    alert('เกิดข้อผิดพลาดขึ้น กรุณาทำรายการอีกครั้ง');
  }
  alertInforMessage(message: string){
    alert(message);
  }
  alertWarningMessage(message: string){
    alert(message);
  }

  confirm(message: string, confirmBoxType: ConfirmBoxType, acceptCallback:()=> void, rejectCallback:()=> void = null){

  }
  confirmAddNewData(message: string, acceptCallback:()=> void, rejectCallback:()=> void = null){
    this.confirm(message, ConfirmBoxType.info, () => {}, () => {});
  }
  confirmUpdateData(message: string, acceptCallback:()=> void, rejectCallback:()=> void = null){
    this.confirm(message, ConfirmBoxType.warn, () => {}, () => {});
  }
  confirmDeleteData(message: string, acceptCallback:()=> void, rejectCallback:()=> void = null){
    this.confirm(message, ConfirmBoxType.error, () => {}, () => {});
  }


}
