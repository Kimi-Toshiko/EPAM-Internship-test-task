import React from "react";
import { ICarListProps } from "./Interfaces/ICar";
import usePagination from "./Hooks/usePagination";
import axios from "axios";
import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import 'animate.css';
import { winnersViewLink } from "./Variables/DataLinksVariables";
import StartRace from "./API/GarageView/StartRace";
import ShowAlert from "./API/DOM/ShowAlert";
import ResetRace from "./API/GarageView/ResetRace";
import StopSingleCar from "./API/GarageView/StopSingleCar";
import StartSingleCar from "./API/GarageView/StartSingleCar";

const contentPerPage: number = 7;

const CarList: React.FC<ICarListProps> = ({cars, isDataChanged, isRaceClicked, isResetClicked}) => {
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        totalPages,
    } = usePagination({
        contentPerPage: contentPerPage,
        count: cars.length,
    });

    const {data: winnersData} = useFetch(winnersViewLink);

    const [carContainerId, setCarContainerId] = useState<number>(cars.length + 1);
    const [btnSelectedAmount, setBtnSelectedAmount] = useState<number>(0);
    const [isRaceClickedCount, setIsRaceClickedCount] = useState<number>(0);
    const [isResetClickedCount, setIsResetClickedCount] = useState<number>(0);

    if(isRaceClicked > isRaceClickedCount) {
      setIsRaceClickedCount(isRaceClicked + 1);
      StartRace(cars, winnersData, firstContentIndex, lastContentIndex, contentPerPage);
    }

    if (isResetClicked > isResetClickedCount) {
      setIsResetClickedCount(isResetClicked + 1);
      ResetRace(cars, firstContentIndex, lastContentIndex);
    }

    const handleRemoveCar = (carId: number) => {
      if (document.getElementById(`select-btn-${carId}`)?.classList.contains('btn-selected-active')) {
        ShowAlert("Please, deselect this car before deleting it!");
    }
    else {
        axios.delete(`http://localhost:3000/garage/${carId}`)
        .catch(err => {console.log(err)});
        isDataChanged !== undefined ? isDataChanged() : console.log('isDataChanged not defined');
      }
    }

    const handleSelectCar = (carId: number) => {
      if (btnSelectedAmount >= 1) {
        if (document.getElementById(`select-btn-${carId}`)?.classList.contains('btn-selected-active')) {
            document.getElementById(`select-btn-${carId}`)?.classList.toggle('btn-selected-active');
            setBtnSelectedAmount(btnSelectedAmount - 1);
            setCarContainerId(cars.length + 1);
        }
        else {
            ShowAlert("Please, deselect the previous car!");
        }
    }
      else {
        setCarContainerId(carId);
        setBtnSelectedAmount(btnSelectedAmount + 1);
        document.getElementById(`select-btn-${carId}`)?.classList.toggle('btn-selected-active');
      }
    }

    return (
        <div className="class-list-container">
            <div className="cars-list">
            {cars.slice(firstContentIndex, lastContentIndex).map(car => (
                <div className="car car-container" data-selected={`${carContainerId}`} key={car.id}>
                    <div className="car-sets">
                        <div className="car-race-btns">
                            <button 
                            className='orange-btn md-padding sm-btn' 
                            id={`select-btn-${car.id}`}
                            onClick={() => {handleSelectCar(car.id)}}>Select</button>
                            <button 
                            className='light-blue-btn md-padding sm-btn' 
                            onClick={() => {handleRemoveCar(car.id)}}>Remove</button>
                        </div>
                        <div className="start-stop-btns">
                          <button className='green-btn sm-padding sm-btn engine-active-btn'
                            id={`btn-start-engine-${car.id}`}
                            onClick={() => {StartSingleCar(car.id, car.name)}}>A</button>
                            <button className='gray-btn sm-padding sm-btn engine-inactive-btn'
                                    id={`btn-stop-engine-${car.id}`}
                                    onClick={() => {StopSingleCar(car.id)}}>B</button>
                        </div>
                        <div className="car-ico" style={{'color': car.color}}>
                            <i className="fa-solid fa-car-side" id={`animated-car-${car.id}`} is-participating='false'></i>
                        </div>
                        <div className="car-name">
                            <p>{car.name}</p>
                        </div>
                    </div>
                    <div className="finish-block"></div>
                    <hr />
                </div>
            ))}
            <div className="garage-info">
              <div className="garage-count">
                <p>GARAGE ({cars.length})</p>
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
          </div>
        </div>
    );
}

export default CarList;