import React from 'react';
import { useState } from 'react';
import { createCarName } from '../../Variables/DocumentVariables';
import { ICar } from '../../Interfaces/ICar';
import Swal from 'sweetalert2';
import axios from 'axios';

interface IUpdateCarForm {
    dataArr: ICar[];
    IsDataChanged: Function;
    fetchLink: string;
};

const UpdateCarForm: React.FC<IUpdateCarForm> = ({dataArr, IsDataChanged, fetchLink}) => {
    const [updateInputName, setUpdateInputName] = useState<string>('');
    const [updateInputColor, setUpdateInputColor] = useState<string>('');

    const selectedCar = document.querySelector('div[data-selected]');

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
        if (dataArr[selectedCarId] === undefined && selectedCarId !== dataArr.length) {
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
                axios.patch(`${fetchLink}/${selectedCarId}`, {"color": updateInputColor})
                IsDataChanged();
            }
            else if ((updateInputName !== '' || null || undefined) && (updateInputColor === '' || null || undefined)) {
                axios.patch(`${fetchLink}/${selectedCarId}`, {"name": updateInputName})
                IsDataChanged();
            }
            else if ((updateInputName !== '' || null || undefined) && (updateInputColor !== '' || null || undefined)) {
                axios.patch(`${fetchLink}/${selectedCarId}`, {"name":updateInputName, "color": updateInputColor, "id": selectedCarId})
                IsDataChanged();
            }
            else {
                console.log('nothing is changed');
            }
        }
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