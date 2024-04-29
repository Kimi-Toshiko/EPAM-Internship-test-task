import React from "react";
import ICar from "./ICar";

interface ICarListProps {
    cars: ICar[];
}

const CarList: React.FC<ICarListProps> = ({cars}) => {
    return (
        <div className="cars-list">
            {cars.map(car => (
                <div className="car">
                    <div className="car-sets">
                        <div className="car-race-btns">
                            <button className='orange-btn md-padding sm-btn'>Select</button>
                            <button className='light-blue-btn md-padding sm-btn'>Remove</button>
                        </div>
                        <div className="start-stop-btns">
                            <button className='green-btn sm-padding sm-btn'>A</button>
                            <button className='gray-btn sm-padding sm-btn'>B</button>
                        </div>
                        <div className="car-ico">
                            <i className="fa-solid fa-car-side" style={{'color': car.color}}></i>
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
                        <button className='orange-btn sm-padding'><i className="fa-solid fa-caret-left"></i></button>
                        <p>PAGE #1</p>
                        <button className='orange-btn sm-padding'><i className="fa-solid fa-caret-right"></i></button>
                    </div>
                </div>
        </div>
    );
}

export default CarList;