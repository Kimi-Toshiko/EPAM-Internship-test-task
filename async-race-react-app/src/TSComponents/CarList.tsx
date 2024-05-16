import React from "react";
import { ICarListProps } from "./Interfaces/ICar";
import usePagination from "./Hooks/usePagination";
import axios from "axios";
import { useState } from "react";
import useFetch from "./Hooks/useFetch";
import Swal from "sweetalert2";
import 'animate.css';
import { winnersViewLink } from "./Variables/DataLinksVariables";
import StartRace from "./API/GarageView/StartRace";

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
    const [singleCarTime , setSingleCarTime] = useState<number>(0);
    const [isCarMoving, setIsCarMoving] = useState<boolean>(false);
    const [isRaceClickedCount, setIsRaceClickedCount] = useState<number>(0);
    const [isResetClickedCount, setIsResetClickedCount] = useState<number>(0);

    if(isRaceClicked > isRaceClickedCount) {
      setIsRaceClickedCount(isRaceClicked + 1);
      StartRace(cars, winnersData, firstContentIndex, lastContentIndex, contentPerPage);
    }

    if (isResetClicked > isResetClickedCount) {
      setIsResetClickedCount(isResetClicked + 1);
      cars.slice(firstContentIndex, lastContentIndex).map(car => {
        fetch(`http://localhost:3000/engine?id=${car.id}&status=stopped`, {
          method: 'PATCH'
        })
          .then(response => response.json()
          .then(data => ({data: data}))
          .then((res) => {
            const animatedCar = document.getElementById(`animated-car-${car.id}`);
            const thisBtnStartEngine = document.getElementById(`btn-start-engine-${car.id}`);
            const thisBtnStopEngine = document.getElementById(`btn-stop-engine-${car.id}`);                          
            thisBtnStartEngine?.classList.remove('engine-inactive-btn');
            thisBtnStartEngine?.classList.add('engine-active-btn');
            thisBtnStopEngine?.classList.remove('engine-active-btn');
            thisBtnStopEngine?.classList.add('engine-inactive-btn');
            animatedCar?.setAttribute('is-participating', 'false');
            animatedCar?.classList.remove('animation-move-car');
          }))
      });
    }

    const handleStopSingleCar = (carId: number) => {
      setIsCarMoving(false);
      fetch(`http://localhost:3000/engine?id=${carId}&status=stopped`, {
        method: 'PATCH'
      })
        .then(response => response.json()
        .then(data => ({data: data}))
        .then((res) => {
          const animatedCar = document.getElementById(`animated-car-${carId}`);
          const thisBtnStartEngine = document.getElementById(`btn-start-engine-${carId}`);
          const thisBtnStopEngine = document.getElementById(`btn-stop-engine-${carId}`);                          
          thisBtnStartEngine?.classList.remove('engine-inactive-btn');
          thisBtnStartEngine?.classList.add('engine-active-btn');
          thisBtnStopEngine?.classList.remove('engine-active-btn');
          thisBtnStopEngine?.classList.add('engine-inactive-btn');
          animatedCar?.setAttribute('is-participating', 'false');
          animatedCar?.classList.remove('animation-move-car');
      }))
    }

    const handleStartSingleCar = (carId: number, carName: string) => {
      setIsCarMoving(true);
      fetch(`http://localhost:3000/engine?id=${carId}&status=started`, {
        method: 'PATCH'
      })
        .then(response => response.json()
        .then(data => ({data: data}))
        .then((res) => {
        const animatedCar = document.getElementById(`animated-car-${carId}`);
        const carTime = Math.round(((res.data.distance / res.data.velocity)/10)) / 100;
        const thisBtnStartEngine = document.getElementById(`btn-start-engine-${carId}`);
        const thisBtnStopEngine = document.getElementById(`btn-stop-engine-${carId}`);                          
        thisBtnStartEngine?.classList.remove('engine-active-btn');
        thisBtnStartEngine?.classList.add('engine-inactive-btn');
        thisBtnStopEngine?.classList.remove('engine-inactive-btn');
        thisBtnStopEngine?.classList.add('engine-active-btn');
        setSingleCarTime(carTime);
        animatedCar?.classList.add('animation-move-car');
        animatedCar?.setAttribute('animation-duration', `${carTime}`);
        animatedCar?.setAttribute('animation-fill', 'backwards');
        animatedCar?.setAttribute('is-participating', 'true');
        // animatedCar?.animate([{left: '0px'}, {left: '80vw'}], {duration: carTime*1000, iterations: 1, fill: "backwards"});
        animatedCar?.addEventListener('animationend', () => {
          if (animatedCar?.classList.contains('animation-move-car')) {
            const thisBtnStartEngine = document.getElementById(`btn-start-engine-${carId}`);
            const thisBtnStopEngine = document.getElementById(`btn-stop-engine-${carId}`);                          
            thisBtnStartEngine?.classList.remove('engine-inactive-btn');
            thisBtnStartEngine?.classList.add('engine-active-btn');
            thisBtnStopEngine?.classList.remove('engine-active-btn');
            thisBtnStopEngine?.classList.add('engine-inactive-btn');
            animatedCar?.classList.remove('animation-move-car');
            animatedCar?.setAttribute('is-participating', 'false');
            Swal.fire({
              title: `${carName} had finished race in ${carTime}s!`,
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
        });
      }))
    }

    const handleRemoveCar = (carId: number) => {
      if (document.getElementById(`select-btn-${carId}`)?.classList.contains('btn-selected-active')) {
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
                            onClick={() => {handleStartSingleCar(car.id, car.name)}}>A</button>
                            <button className='gray-btn sm-padding sm-btn engine-inactive-btn'
                                    id={`btn-stop-engine-${car.id}`}
                                    onClick={() => {handleStopSingleCar(car.id)}}>B</button>
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