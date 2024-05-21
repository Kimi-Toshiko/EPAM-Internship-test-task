import React from 'react';
import StopSingleCar from '../../API/GarageView/StopSingleCar';
import StartSingleCar from '../../API/GarageView/StartSingleCar';
import { ICar } from '../../Interfaces/ICar';

interface CarEngineButtonsProps {
    car: ICar;
}

const CarEngineButtons: React.FC<CarEngineButtonsProps> = ({car}) => {
    return (
        <div>
            <div className="start-stop-btns">
                <button className='green-btn sm-padding sm-btn engine-active-btn' 
                        id={`btn-start-engine-${car.id}`} 
                        onClick={() => {StartSingleCar(car.id, car.name)}}>
                        A
                </button>
                <button className='gray-btn sm-padding sm-btn engine-inactive-btn' 
                        id={`btn-stop-engine-${car.id}`} 
                        onClick={() => {StopSingleCar(car.id)}}>
                        B
                </button>
            </div>
        </div>
    );
};

export default CarEngineButtons;