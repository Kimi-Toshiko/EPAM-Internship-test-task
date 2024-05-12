import React from "react";
import { useState } from "react";
import { IUsePaginationProps, IUsePaginationReturn } from "../Interfaces/IPagination";

type UsePagination = ({contentPerPage, count}: IUsePaginationProps) => (IUsePaginationReturn);

const usePagination: UsePagination = ({contentPerPage, count}) => {
    const [page, setPage] = useState<number>(1);
    const pageCount: number = Math.ceil(count / contentPerPage);
    const lastContentIndex: number = page * contentPerPage;
    const firstContentIndex: number = lastContentIndex - contentPerPage;

    const changePage = (direction: boolean) => {
        setPage((state) => {
            if (direction) {
                if (state === pageCount) {
                    return state;
                }
                return state + 1;
            }
            else {
                if (state === 1) {
                    return state;
                }
                return state - 1;
            }
        });
    };

    return {
        totalPages: pageCount,
        nextPage: () => changePage(true),
        prevPage: () => changePage(false),
        firstContentIndex,
        lastContentIndex,
        page
    }
};

export default usePagination;