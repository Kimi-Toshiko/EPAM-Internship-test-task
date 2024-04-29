import React from "react";
import useFetch from "./useFetch";
import IWinner from "./Interfaces/IWinner";

interface IWinnerListProps {
    winners: IWinner[];
}

const WinnerList: React.FC<IWinnerListProps> = ({winners}) => {

    const {data: carsData, isPending: carsIsPending, error: carsError} = useFetch('http://localhost:3000/garage');

    console.log(carsIsPending);
    console.log(carsError);

    function filterById(jsonObject: [], id: number) {
        return jsonObject.filter(function(jsonObject) {
            return (jsonObject['id'] === id);})[0];
    };

    let isCarsDataLoaded = false;

    try {
        if (carsData == null) {
            console.log('cars data is null');
            console.log(`cars data load is: ${isCarsDataLoaded}`);
        }
        else {
            console.log('cars data is loaded');
            isCarsDataLoaded = true;
            console.log(`cars data load is: ${isCarsDataLoaded}`);
        }
    }
    catch {
        console.log('error with cars data occurred');
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
                    winners.map(winner => (
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
            <div className="pagination">
                <button className='orange-btn sm-padding'><i className="fa-solid fa-caret-left"></i></button>
                <p>PAGE #1</p>
                <button className='orange-btn sm-padding'><i className="fa-solid fa-caret-right"></i></button>
            </div>
        </div>
    );
}
 
export default WinnerList;