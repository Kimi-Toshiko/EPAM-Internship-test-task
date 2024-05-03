import React from "react";
import ICar from "./Interfaces/ICar";
import { useState } from "react";
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

    const [carContainerId, setCarContainerId] = useState<number>(cars.length + 1);
    const [btnSelectedAmount, setBtnSelectedAmount] = useState<number>(0);

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
                            onClick={() => {
                                            if (btnSelectedAmount >= 1) {
                                                if (document.getElementById(`select-btn-${car.id}`)?.classList.contains('btn-selected-active')) {
                                                    document.getElementById(`select-btn-${car.id}`)?.classList.toggle('btn-selected-active');
                                                    setBtnSelectedAmount(btnSelectedAmount - 1);
                                                    setCarContainerId(cars.length + 1);
                                                }
                                                else {
                                                    Swal.fire({
                                                        title: "Please, deselect the previous car!",
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
                                            }
                                            else {
                                                setCarContainerId(car.id);
                                                setBtnSelectedAmount(btnSelectedAmount + 1);
                                                document.getElementById(`select-btn-${car.id}`)?.classList.toggle('btn-selected-active');
                                            }
                                            }}>
                                Select
                            </button>
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
                    <button onClick={prevPage} className="orange-btn sm-padding prev-page"><i className="fa-solid fa-caret-left"></i></button>
                    <p className="text">Page №{page}/{totalPages}</p>
                    <button onClick={nextPage} className="orange-btn sm-padding next-page"><i className="fa-solid fa-caret-right"></i></button>
                    <div className="items">
                </div>
            </div>
        </div>
        </div>
        </div>
    );
}

export default CarList;