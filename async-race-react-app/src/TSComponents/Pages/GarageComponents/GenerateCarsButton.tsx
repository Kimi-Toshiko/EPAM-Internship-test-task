import { ICar } from "../../Interfaces/ICar";
import { GenerateRandomCars } from "../../API/GarageView/generate-random-cars";

type Props = {
    dataArr: ICar[];
    setIsDataChanged: Function;
};

const GenerateCarsButton = (props: Props) => {
    const handleGenerateRandomCars: React.MouseEventHandler<HTMLButtonElement> = () => {   
        GenerateRandomCars(props.dataArr);
        props.setIsDataChanged();
    }

    return (
        <div className="generate-cars-btn">
            <button className='light-blue-btn' onClick={handleGenerateRandomCars}>Generate cars</button>
        </div>
    )
}

export default GenerateCarsButton;