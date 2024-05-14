import { createCarName } from "../../Variables/DocumentVariables";
import axios from "axios";

const CreateCar = (inputName: string, inputColor: string, fetchLink: string) => {
    let newCar = {
        'name': inputName,
        'color': inputColor
    }

    if (inputName === '') {
        createCarName?.setAttribute('placeholder', 'Enter car name...');
        createCarName?.classList.add('invalid-form-input');
    }
    else {
        axios.post(fetchLink, newCar);
    }
}

export default CreateCar;