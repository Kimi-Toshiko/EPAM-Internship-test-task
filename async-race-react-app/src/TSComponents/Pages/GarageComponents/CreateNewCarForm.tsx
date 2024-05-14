import { ICar } from "../../Interfaces/ICar";
import { useState } from "react";
import { createCarName } from "../../Variables/DocumentVariables";
import CreateCar from "../../API/GarageView/CreateCar";

type Props = {
    dataArr: ICar[];
    IsDataChanged: Function;
    fetchLink: string;
};

const CreateNewCarForm = (props: Props) => {
    const [createInputName, setCreateInputName] = useState<string>('');
    const [createInputColor, setCreateInputColor] = useState<string>('#000000');

    const handleCreateNameInputChange: React.ChangeEventHandler<HTMLInputElement> = (el) => {
        setCreateInputName(el.target.value);
        if (createCarName?.classList.contains('invalid-form-input')) {
            createCarName?.classList.remove('invalid-form-input');
        }
    }

    const handleCreateColorInputChange: React.ChangeEventHandler<HTMLInputElement> = (el) => {
        setCreateInputColor(el.target.value);
    }

    const handleCreateCar: React.MouseEventHandler<HTMLButtonElement> = (el) => {
        el.preventDefault();
        CreateCar(createInputName, createInputColor, props.fetchLink);
        props.IsDataChanged();
    }

    return (
        <div className="create">
            <form action="http://localhost:3000/garage" method='POST'>
                <input type="text" id='create-car-name' onChange={handleCreateNameInputChange} />
                <input type="color" id='create-car-color' onChange={handleCreateColorInputChange} />
                <button className='orange-btn' type='submit' onClick={handleCreateCar}>Create</button>
            </form>
        </div>
    )
}

export default CreateNewCarForm;