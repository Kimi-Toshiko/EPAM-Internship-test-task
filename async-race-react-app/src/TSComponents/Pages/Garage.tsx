import '../../garage.css';
import CarList from '../CarList';
import useFetch from '../Hooks/useFetch';
import { useState } from 'react';
import 'animate.css';
import GenerateCarsButton from './GarageComponents/GenerateCarsButton';
import { garageViewLink } from '../Variables/DataLinksVariables';
import CreateNewCarForm from './GarageComponents/CreateNewCarForm';
import UpdateCarForm from './GarageComponents/UpdateCarForm';

const Garage = () => {
    const [isDataChanged, setIsDataChanged] = useState<number>(0);
    const [isRaceClicked, setIsRaceClicked] = useState<number>(0);
    const [isResetClicked, setIsResetClicked] = useState<number>(0);

    const { data: cars, isPending, error } = useFetch(garageViewLink, isDataChanged);

    const handleDataChange: VoidFunction = () => {
        setIsDataChanged(isDataChanged + 1);
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
                        <UpdateCarForm dataArr={cars} IsDataChanged={handleDataChange} fetchLink={garageViewLink} />
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