import '../../garage.css';
import CarList from '../CarList';
import useFetch from '../useFetch';
import axios from 'axios';
import ICar from '../Interfaces/ICar';
import CarBrandList from '../Data/CarBrandList';
import CarModelList from '../Data/CarModelList';
import HexAlphabetList from '../Data/HexAlphabetList';
import { useState } from 'react';

type Props = {};

const Garage = (props: Props) => {
    const [isDataChanged, setIsDataChanged] = useState<number>(0);
    const carsUrl: string = 'http://localhost:3000/garage'; 
    const { data: cars, isPending, error } = useFetch(carsUrl, isDataChanged);

    const handleGenerateRandomCars: VoidFunction = () => {        
        for (let i: number = cars.length; i < cars.length + 100; i++) {
            let newCar = {
                "name": `${CarBrandList[Math.round(Math.random()*(CarBrandList.length -1))]} ${CarModelList[Math.round(Math.random()*(CarModelList.length -1))]}`,
                "color": `#${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}`
            };
            axios.post(carsUrl, newCar);
        }
        setIsDataChanged(isDataChanged + 1);
    }

    return (
        <div className="garage">
            <div id="garage-content">
                <div className="btns-block">
                    <div className="race-btns">
                        <button className='orange-btn'>Race <i className="fa-solid fa-play"></i></button>
                        <button className='light-blue-btn'>Reset <i className="fa-solid fa-rotate-left"></i></button>
                    </div>
                    <div className="cu-btns">
                        <div className="create">
                            <input type="text" />
                            <input type="color" />
                            <button className='orange-btn'>Create</button>
                        </div>
                        <div className="update">
                            <input type="text" />
                            <input type="color" />
                            <button className='orange-btn'>Update</button>
                        </div>
                    </div>
                    <div className="generate-cars-btn">
                        <button className='light-blue-btn' onClick={handleGenerateRandomCars}>Generate cars</button>
                    </div>
                </div>
                <div className="divider"></div>
                <section>
                    {error && <p className='fetch-error'>{error}</p>}
                    {isPending && <p className='fetch-loading'>Loading cars...</p>}
                    {cars && <CarList cars={cars} isDataChanged={() => {setIsDataChanged(isDataChanged + 1)}} />}
                </section>
            </div>
        </div>
    )
}

export default Garage;