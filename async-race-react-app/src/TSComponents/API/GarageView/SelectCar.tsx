import { getSelectBtn } from "../../Variables/DocumentVariables";
import ShowAlert from "../DOM/ShowAlert";

const SelectCar = (id: number, btnSelectedAmount: number, btnSelected: VoidFunction, btnDeselected: VoidFunction) => {
    const selectBtn = getSelectBtn(id);
    if (btnSelectedAmount >= 1) {
        if (selectBtn?.classList.contains('btn-selected-active')) {
            selectBtn?.classList.toggle('btn-selected-active');
            btnSelected();
        }
        else {
            ShowAlert("Please, deselect the previous car!");
        }
    }
    else {
        btnDeselected();
        selectBtn?.classList.toggle('btn-selected-active');
    }
}

export default SelectCar;
