import React from "react";
import useFetch from "./useFetch";
import IWinner from "./Interfaces/IWinner";
import usePagination from "./usePagination";

interface IWinnerListProps {
    winners: IWinner[];
}

const WinnerList: React.FC<IWinnerListProps> = ({winners}) => {
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        totalPages
    } = usePagination({
        contentPerPage: 10,
        count: winners.length
    });

    const carsUrl: string = 'http://localhost:3000/garage';
    const {data: carsData} = useFetch(carsUrl);

    function filterById(jsonObject: [], id: number) {
        return jsonObject.filter(function(jsonObject) {
            return (jsonObject['id'] === id);})[0];
    };

    let isCarsDataLoaded: boolean = false;

    try {
        if (carsData === null) {
            console.log('cars data is null');
        }
        else {
            console.log('cars data is loaded');
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
                {
                    winners.slice(firstContentIndex, lastContentIndex).map(winner => (
                        <tr key={winner.id}>
                            <td>{winner.id}</td>
                            <td><i className="fa-solid fa-car-side" style={{'color': isCarsDataLoaded ? filterById(carsData, winner.id)['color'] : '#CBCBCB'}}></i></td>
                            <td>{isCarsDataLoaded ? filterById(carsData, winner.id)['name'] : ''}</td>
                            <td>{winner.wins}</td>
                            <td>{winner.time} seconds</td>
                        </tr>
                    ))
                }
            </table>
            <div className="winners-count">
                <p>WINNERS ({winners.length})</p>
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
}
 
export default WinnerList;