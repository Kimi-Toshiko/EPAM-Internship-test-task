import React from 'react';
import { useState } from 'react';
import { createCarName } from '../../Variables/DocumentVariables';
import { ICarsListActions } from '../../Interfaces/ICarsListActions';
import UpdateCar from '../../API/GarageView/UpdateCar';

const UpdateCarForm: React.FC<ICarsListActions> = ({dataArr, IsDataChanged, fetchLink}) => {
    const [updateInputName, setUpdateInputName] = useState<string>('');
    const [updateInputColor, setUpdateInputColor] = useState<string>('');

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
        UpdateCar(dataArr, updateInputName, updateInputColor, fetchLink);
        IsDataChanged();
    }

    return (
        <div className="update">
            <form action="http://localhost:3000/garage" method='POST'>
                <input type="text" onChange={handleUpdateNameInputChange} />
                <input type="color" onChange={handleUpdateColorInputChange} />
                <button className='orange-btn' type='submit' onClick={handleUpdate}>Update</button>
            </form>
        </div>
    )
}

export default UpdateCarForm;