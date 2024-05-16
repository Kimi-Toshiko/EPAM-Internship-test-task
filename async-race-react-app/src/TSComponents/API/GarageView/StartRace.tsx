import { ICar } from "../../Interfaces/ICar";
import { IWinner } from "../../Interfaces/IWinner";
import { getAnimatedCar } from "../../Variables/DocumentVariables";
import { EngineButtonsStarted, AddCarAnimation } from "../DOM/DOMInteraction";
import { engineLink } from "../../Variables/DataLinksVariables";
import PostWinners from "../WinnersView/PostWinners";
import ShowAlert from "../DOM/ShowAlert";

const StartRace = (cars: ICar[], winners: IWinner[], firstContentIndex: number, lastContentIndex: number, contentPerPage: number) => {
    let timesArray: [number] = [99999];
    let winnersArr: {'name': string, 'winTime': number, id: number} = {
        'name': 'null',
        'winTime': 99999,
        'id': 0
    };

    cars.slice(firstContentIndex, lastContentIndex).map(car => {
        fetch(`${engineLink}?id=${car.id}&status=started`, {
            method: 'PATCH'
        })
            .then(response => response.json()
            .then(data => ({data: data}))
            .then((res) => {
                const animatedCar = getAnimatedCar(car.id);
                const carTime = Math.round(((res.data.distance / res.data.velocity)/10)) / 100;
                AddCarAnimation(car.id, carTime, 'forwards');
                EngineButtonsStarted(car.id);
                if (carTime < winnersArr.winTime && animatedCar?.getAttribute('is-participating')?.valueOf() === 'true') {
                    winnersArr.name = `${car.name}`;
                    winnersArr.winTime = carTime;
                    winnersArr.id = car.id;
                }
                timesArray.push(carTime);
            })
            .then(() => {
                if ((cars.length <= contentPerPage && timesArray.length > cars.length) || (cars.length > contentPerPage && timesArray.length > contentPerPage)) {
                setTimeout(() => {
                    ShowAlert(`${winnersArr.name} won with the time ${winnersArr.winTime}s!`);
                    PostWinners(winners, winnersArr);
                }, winnersArr.winTime*1000);
            }
        }))
    });
}

export default StartRace;