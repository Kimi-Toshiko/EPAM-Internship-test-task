import '../../garage.css';
import CarList from '../CarList';
import useFetch from '../Hooks/useFetch';
import axios from 'axios';
import { useState } from 'react';
import 'animate.css';
import Swal from 'sweetalert2';
import GenerateCarsButton from './GarageComponents/GenerateCarsButton';
import { garageViewLink } from '../Variables/DataLinksVariables';
import CreateNewCarForm from './GarageComponents/CreateNewCarForm';

const Garage = () => {
    const [isDataChanged, setIsDataChanged] = useState<number>(0);
    const [updateInputName, setUpdateInputName] = useState<string>('');
    const [updateInputColor, setUpdateInputColor] = useState<string>('');
    const [isRaceClicked, setIsRaceClicked] = useState<number>(0);
    const [isResetClicked, setIsResetClicked] = useState<number>(0);

    const { data: cars, isPending, error } = useFetch(garageViewLink, isDataChanged);

    const createCarName = document.getElementById('create-car-name');
    const selectedCar = document.querySelector('div[data-selected]');

    const handleDataChange: VoidFunction = () => {
        setIsDataChanged(isDataChanged + 1);
    }

    const handleUpdateNameInputChange: React.ChangeEventHandler<HTMLInputElement> = (el) => {
        setUpdateInputName(el.target.value);

        if (createCarName?.classList.contains('invalid-form-input')) {
            createCarName?.classList.remove('invalid-form-input');
        }
    }

    const handleUpdateColorInputChange: React.ChangeEventHandler<HTMLInputElement> = (el) => {
        setUpdateInputColor(el.target.value);
    }

    const handleUpdate: React.MouseEventHandler<HTMLButtonElement> = (el) => {
        el.preventDefault();
        const selectedCarId = Number(selectedCar?.getAttribute('data-selected'));
        if (cars[selectedCarId] === undefined && selectedCarId !== cars.length) {
            console.log(selectedCarId, cars.length)
            Swal.fire({
                title: "Please, select a car you want to update!",
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
            if ((updateInputName === '' || null || undefined) && (updateInputColor !== '' || null || undefined)) {
                axios.patch(`${garageViewLink}/${selectedCarId}`, {"color": updateInputColor})
                setIsDataChanged(isDataChanged + 1);
            }
            else if ((updateInputName !== '' || null || undefined) && (updateInputColor === '' || null || undefined)) {
                axios.patch(`${garageViewLink}/${selectedCarId}`, {"name": updateInputName})
                setIsDataChanged(isDataChanged + 1);
            }
            else if ((updateInputName !== '' || null || undefined) && (updateInputColor !== '' || null || undefined)) {
                axios.patch(`${garageViewLink}/${selectedCarId}`, {"name":updateInputName, "color": updateInputColor, "id": selectedCarId})
                setIsDataChanged(isDataChanged + 1);
            }
            else {
                console.log('nothing is changed');
            }
        }
    }

    const handleRace: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsRaceClicked(isRaceClicked + 1);
    }

    const handleReset: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsResetClicked(isResetClicked + 1);
    }

    return (
        <div className="garage">
            <div id="garage-content">
                <h1>Garage</h1>
                <div className="btns-block">
                    <div className="race-btns">
                        <button className='orange-btn' onClick={handleRace}>Race <i className="fa-solid fa-play"></i></button>
                        <button className='light-blue-btn' onClick={handleReset} >Reset <i className="fa-solid fa-rotate-left"></i></button>
                    </div>
                    <div className="cu-btns">
                        <CreateNewCarForm IsDataChanged={handleDataChange} fetchLink={garageViewLink}/>
                        <div className="update">
                            <form action="http://localhost:3000/garage" method='POST'>
                                <input type="text" onChange={handleUpdateNameInputChange} />
                               <input type="color" onChange={handleUpdateColorInputChange} />
                                <button className='orange-btn' type='submit' onClick={handleUpdate}>Update</button>
                            </form>
                        </div>
                    </div>
                    <GenerateCarsButton setIsDataChanged={handleDataChange} dataArr={cars} />
                </div>
                <div className="divider"></div>
                <section>
                    {error && <p className='fetch-error'>{error}</p>}
                    {isPending && <p className='fetch-loading'>Loading cars...</p>}
                    {cars && <CarList cars={cars} isDataChanged={handleDataChange} isRaceClicked={isRaceClicked} isResetClicked={isResetClicked} />}
                </section>
            </div>
        </div>
    )
}

export default Garage;