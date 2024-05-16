import axios from "axios";
import { ICar } from "../../Interfaces/ICar";
import ShowAlert from "../DOM/ShowAlert";

const UpdateCar = (dataArr: ICar[], updateInputName: string, updateInputColor: string, fetchLink: string) => {
    const selectedCar = document.querySelector('div[data-selected]');
    const selectedCarId = Number(selectedCar?.getAttribute('data-selected'));

    if (dataArr[selectedCarId] === undefined && selectedCarId !== dataArr.length) {
        ShowAlert('Please, select a car you want to update!');
    }
    else {
        if ((updateInputName === '' || null || undefined) && (updateInputColor !== '' || null || undefined)) {
            axios.patch(`${fetchLink}/${selectedCarId}`, {"color": updateInputColor});
        }
        else if ((updateInputName !== '' || null || undefined) && (updateInputColor === '' || null || undefined)) {
            axios.patch(`${fetchLink}/${selectedCarId}`, {"name": updateInputName});
        }
        else if ((updateInputName !== '' || null || undefined) && (updateInputColor !== '' || null || undefined)) {
            axios.patch(`${fetchLink}/${selectedCarId}`, {
                                                            "name":updateInputName, 
                                                            "color": updateInputColor, 
                                                            "id": selectedCarId
                                                        });
        }
        else {
            console.log('nothing is changed');
        }
    }
}

export default UpdateCar;