import axios from "axios";
import { ICar } from "../../Interfaces/ICar";
import Swal from "sweetalert2";

const UpdateCar = (dataArr: ICar[], updateInputName: string, updateInputColor: string, fetchLink: string) => {
    const selectedCar = document.querySelector('div[data-selected]');
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