import RemoveCar from "../../API/GarageView/RemoveCar";
import SelectCar from "../../API/GarageView/SelectCar";
import { ICarInteractionButtonsProps } from '../../Interfaces/ICar';

const handleRemoveCar = (carId: number, isDataChanged: VoidFunction) => {
    RemoveCar(carId, () => {
        isDataChanged !== undefined ? isDataChanged() : console.log('isDataChanged not defined');
    });
}

const handleSelectCar = (carId: number, btnSelectedAmount: number, decreaseSelectedAmount: VoidFunction, changeContainerToInvalid: VoidFunction, setContainerToValid: (id: number) => void, increaseSelectedAmount: VoidFunction) => {
    SelectCar(carId, btnSelectedAmount, () => {
        decreaseSelectedAmount();
        changeContainerToInvalid();
    }, 
    () => {
        setContainerToValid(carId);
        increaseSelectedAmount();
    });
}

const CarInteractionButtons: React.FC<ICarInteractionButtonsProps> = ({carId, isDataChanged, btnSelectedAmount, decreaseSelectedAmount, changeContainerToInvalid, changeContainerToValid, increaseSelectedAmount}) => {
    return (
        <div className="car-race-btns">
            <button 
                className='orange-btn md-padding sm-btn' 
                id={`select-btn-${carId}`} 
                onClick={() => {handleSelectCar(carId, btnSelectedAmount, decreaseSelectedAmount, changeContainerToInvalid, changeContainerToValid, increaseSelectedAmount)}}>
                    Select
            </button>
            <button 
                className='light-blue-btn md-padding sm-btn' 
                onClick={() => {handleRemoveCar(carId, isDataChanged)}}>
                    Remove
            </button>
        </div>
    );
};

export default CarInteractionButtons;