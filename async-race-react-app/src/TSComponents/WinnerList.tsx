import React from "react";
import useFetch from "./Hooks/useFetch";
import { IWinnerListProps } from "./Interfaces/IWinner";
import usePagination from "./Hooks/usePagination";
import Pagination from "./Pages/Pagination";
import { garageViewLink } from './Variables/DataLinksVariables';
import filterById from "./API/WinnersView/FilterByID";

const contentPerPage: number = 10;

const WinnerList: React.FC<IWinnerListProps> = ({winners}) => {
    const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, totalPages } = usePagination({ contentPerPage: contentPerPage, count: winners.length });

    const {data: carsData} = useFetch(garageViewLink);

    let isCarsDataLoaded: boolean = false;
    try {
        if (carsData === null) {
            console.log('cars data is null');
        }
        else {
            isCarsDataLoaded = true;
        }
    }
    catch (err) {
        console.log(err);
    }

    return ( 
        <div className="winners-list-content">
            <table className="winners-tb">
                <tr>
                    <th>№</th>
                    <th>CAR</th>
                    <th>NAME</th>
                    <th>WINS</th>
                    <th>BEST TIME (SECONDS)</th>
                </tr>
                {winners.slice(firstContentIndex, lastContentIndex).map(winner => (
                    <tr key={winner.id}>
                        <td>{winner.id}</td>
                        <td><i className="fa-solid fa-car-side" style={{'color': isCarsDataLoaded ? filterById(carsData, winner.id)['color'] : '#CBCBCB'}}></i></td>
                        <td>{isCarsDataLoaded ? filterById(carsData, winner.id)['name'] : ''}</td>
                        <td>{winner.wins}</td>
                        <td>{winner.time} seconds</td>
                    </tr>
                ))}
            </table>
            <Pagination paginatedBlockName="winners" dataArray={winners} page={page} prevPage={prevPage} nextPage={nextPage} totalPages={totalPages} />
        </div>
    );
}

export default WinnerList;