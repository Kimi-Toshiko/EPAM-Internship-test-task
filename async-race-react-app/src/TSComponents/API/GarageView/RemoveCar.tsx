import ShowAlert from "../DOM/ShowAlert";
import axios from "axios";

const RemoveCar = (carId: number, dataChange: VoidFunction) => {
    if (document.getElementById(`select-btn-${carId}`)?.classList.contains('btn-selected-active')) {
        ShowAlert("Please, deselect this car before deleting it!");
    }
    else {
        axios.delete(`http://localhost:3000/garage/${carId}`)
            .catch(err => {console.log(err)});
            dataChange();
    }
}

export default RemoveCar
