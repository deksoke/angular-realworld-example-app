import { IPagedResponse } from './../interfaces/ipaged-response.model';

export class PagedResponse<T> implements IPagedResponse<T> {
    total: number;
    data: T[];

    pageIndex: number;
    pageSize: number;
    pageTotal: number;
}