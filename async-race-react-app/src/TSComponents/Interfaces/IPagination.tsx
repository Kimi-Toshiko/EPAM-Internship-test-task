import { ICar } from "./ICar";
import { IWinner } from "./IWinner";
export interface IUsePaginationProps {
    contentPerPage: number;
    count: number;
}

export interface IUsePaginationReturn {
    page: number;
    totalPages: number;
    firstContentIndex: number;
    lastContentIndex: number;
    nextPage: () => void;
    prevPage: () => void;
}

export interface IPaginationModuleProps {
    paginatedBlockName: string;
    dataArray: ICar[] | IWinner[];
    page: number;
    prevPage: () => void;
    nextPage: () => void;
    totalPages: number;
}