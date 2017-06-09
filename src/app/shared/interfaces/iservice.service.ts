import { Observable } from "rxjs/Rx";
import { PagedResponse } from "app/shared";

export interface IService<T> {
    getData(): Observable<T>;
    getDataByID(id:any): Observable<T>;
    getDataByPage(pageIndex: number, pageSize: number): Observable<PagedResponse<T>>;
    
    save(model:T): T;
    delete(model:T): boolean;
}
