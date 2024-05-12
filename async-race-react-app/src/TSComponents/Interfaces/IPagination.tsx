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