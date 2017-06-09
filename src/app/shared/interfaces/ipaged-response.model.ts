export interface IPagedResponse<T> {
    total: number;
    data: T[];

    pageIndex: number;
    pageSize: number;
    pageTotal: number;
}
