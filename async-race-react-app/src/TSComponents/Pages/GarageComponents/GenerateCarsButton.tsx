import { ICarsListActions } from "../../Interfaces/ICarsListActions";
import { GenerateRandomCars } from "../../API/GarageView/GenerateRandomCars";

const GenerateCarsButton: React.FC<ICarsListActions> = ({dataArr, IsDataChanged}) => {
    const handleGenerateRandomCars: React.MouseEventHandler<HTMLButtonElement> = () => {   
        GenerateRandomCars(dataArr);
        IsDataChanged();
    }

    return (
        <div className="generate-cars-btn">
            <button className='light-blue-btn' onClick={handleGenerateRandomCars}>Generate cars</button>
        </div>
    )
}

export default GenerateCarsButton;