import React from "react";
import ICar from "./Interfaces/ICar";
import usePagination from "./usePagination";
import axios from "axios";
import 'animate.css';
import Swal from "sweetalert2";

interface ICarListProps {
    cars: ICar[];
    isDataChanged: () => void;
}

const CarList: React.FC<ICarListProps> = ({cars, isDataChanged}) => {
    const dataUrl = 'http://localhost:3000/garage';

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
                            <button 
                            className='light-blue-btn md-padding sm-btn'
                            onClick={() => {isDataChanged !== undefined ? isDataChanged() : console.log('isDataChanged not defined');
                            if (document.getElementById(`select-btn-${car.id}`)?.classList.contains('btn-selected-active')) {
                                Swal.fire({
                                    title: "Please, deselect this car before deleting it!",
                                    showClass: {
                                      popup: `
                                        animate__animated
                                        animate__fadeInUp
                                        animate__faster
                                      `
                                    },
                                    hideClass: {
                                      popup: `
                                        animate__animated
                                        animate__fadeOutDown
                                        animate__faster
                                      `
                                    }
                                  });
                            }
                            else {
                                axios.delete(`http://localhost:3000/garage/${car.id}`)}}
                            }>
                                Remove
                            </button>
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