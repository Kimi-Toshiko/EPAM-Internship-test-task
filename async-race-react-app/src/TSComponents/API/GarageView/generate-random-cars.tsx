import HexAlphabetList from "../../Data/HexAlphabetList";
import CarModelList from "../../Data/CarModelList";
import CarBrandList from "../../Data/CarBrandList";
import { ICar } from "../../Interfaces/ICar";
import axios from "axios";
import { garageViewLink } from "../../Variables/DataLinksVariables";

export function GenerateRandomCars (dataArr: ICar[]) {
    for (let i: number = dataArr.length; i < dataArr.length + 100; i++) {
        let newCar = {
            "name": `${CarBrandList[Math.round(Math.random()*(CarBrandList.length -1))]} ${CarModelList[Math.round(Math.random()*(CarModelList.length -1))]}`,
            "color": `#${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}${HexAlphabetList[Math.round(Math.random()*(HexAlphabetList.length-1))]}`
        };
        axios.post(garageViewLink, newCar);
    }
}