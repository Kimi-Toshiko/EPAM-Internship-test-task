import React from 'react';
import { IPaginationModuleProps } from '../Interfaces/IPagination';

const Pagination: React.FC<IPaginationModuleProps> = ({ paginatedBlockName, dataArray, page, prevPage, nextPage, totalPages }) => {
    return (
        <div className={`${paginatedBlockName}-info`}>
            <div className={`${paginatedBlockName}-count`}>
                <p>{`${paginatedBlockName}`} ({dataArray.length})</p>
            </div>
            <div className="pagination">
                <button 
                    className={`orange-btn sm-padding ${page === 1 ? 'btn-disabled' : 'btn-enabled'}`} 
                    disabled={page === 1 ? true : false} 
                    onClick={prevPage}>
                        <i className="fa-solid fa-caret-left"></i>
                </button>
                <p>PAGE №{page}/{totalPages}</p>
                <button 
                    className={`orange-btn sm-padding ${page === totalPages ? 'btn-disabled' : 'btn-enabled'}`} 
                    disabled={page === totalPages ? true : false} 
                    onClick={nextPage}>
                        <i className="fa-solid fa-caret-right"></i>
                </button>
            </div>
            </div>
    );
};

export default Pagination;