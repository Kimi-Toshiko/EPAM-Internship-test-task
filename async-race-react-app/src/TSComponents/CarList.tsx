import React from "react";
import ICar from "./Interfaces/ICar";
import usePagination from "./usePagination";

interface ICarListProps {
    cars: ICar[];
}

const CarList: React.FC<ICarListProps> = ({cars}) => {
    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        totalPages
    } = usePagination({
        contentPerPage: 7,
        count: cars.length
    });

    return (
        <div className="cars-list">
            {cars.slice(firstContentIndex, lastContentIndex).map(car => (
                <div className="car" key={car.id}>
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
    );
}

export default CarList;