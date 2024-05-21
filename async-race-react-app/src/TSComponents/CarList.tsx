import React from "react";
import { ICarListProps } from "./Interfaces/ICar";
import usePagination from "./Hooks/usePagination";
import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import 'animate.css';
import { winnersViewLink } from "./Variables/DataLinksVariables";
import StartRace from "./API/GarageView/StartRace";
import ResetRace from "./API/GarageView/ResetRace";
import Pagination from "./Pages/Pagination";
import CarInteractionButtons from "./Pages/CarListComponents/CarInteractionButtons";
import CarEngineButtons from "./Pages/CarListComponents/CarEngineButtons";

const contentPerPage: number = 7;

const CarList: React.FC<ICarListProps> = ({cars, isDataChanged, isRaceClicked, isResetClicked}) => {
    const { firstContentIndex, lastContentIndex, nextPage, prevPage, page, totalPages } = usePagination({ contentPerPage: contentPerPage, count: cars.length });

    const {data: winnersData} = useFetch(winnersViewLink);

    const [carContainerId, setCarContainerId] = useState<number>(cars.length + 1);
    const [btnSelectedAmount, setBtnSelectedAmount] = useState<number>(0);
    const [isRaceClickedCount, setIsRaceClickedCount] = useState<number>(0);
    const [isResetClickedCount, setIsResetClickedCount] = useState<number>(0);
    
    const handleChangeBtnSelectedAmount = (method: 'increase' | 'decrease') => {
      method === 'increase' ? setBtnSelectedAmount(btnSelectedAmount + 1) : setBtnSelectedAmount(btnSelectedAmount - 1);
    }

    const handleChangeCarContainerId = (carId: number, isValid: boolean) => {
      !isValid ? setCarContainerId(cars.length + 1) : setCarContainerId(carId);
    }

    if(isRaceClicked > isRaceClickedCount) {
      setIsRaceClickedCount(isRaceClicked + 1);
      StartRace(cars, winnersData, firstContentIndex, lastContentIndex, contentPerPage);
    }

    if (isResetClicked > isResetClickedCount) {
      setIsResetClickedCount(isResetClicked + 1);
      ResetRace(cars, firstContentIndex, lastContentIndex);
    }

    return (
        <div className="class-list-container">
            <div className="cars-list">
            {cars.slice(firstContentIndex, lastContentIndex).map(car => (
                <div className="car car-container" data-selected={`${carContainerId}`} key={car.id}>
                    <div className="car-sets">
                        <CarInteractionButtons carId={car.id} isDataChanged={isDataChanged} btnSelectedAmount={btnSelectedAmount} decreaseSelectedAmount={() => {handleChangeBtnSelectedAmount('decrease')}} changeContainerToInvalid={() => {handleChangeCarContainerId(car.id, false)}} changeContainerToValid={() => {handleChangeCarContainerId(car.id, true)}} increaseSelectedAmount={() => {handleChangeBtnSelectedAmount('increase')}} />
                        <CarEngineButtons car={car} />
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
            <Pagination paginatedBlockName="garage" dataArray={cars} page={page} prevPage={prevPage} nextPage={nextPage} totalPages={totalPages} />
          </div>
        </div>
    );
}

export default CarList;