import { getAnimatedCar } from "../../Variables/DocumentVariables";
import { AddCarAnimation, EngineButtonsStarted, EngineButtonsStopped } from "../DOM/DOMInteraction";
import ShowAlert from "../DOM/ShowAlert";

const StartSingleCar = (carId: number, carName: string) => {
    fetch(`http://localhost:3000/engine?id=${carId}&status=started`, {
        method: 'PATCH'
    })
        .then(response => response.json()
        .then(data => ({data: data}))
        .then((res) => {
            const animatedCar = getAnimatedCar(carId);
            const carTime = Math.round(((res.data.distance / res.data.velocity)/10)) / 100;
            EngineButtonsStarted(carId);
            AddCarAnimation(carId, carTime, 'backwards');

            animatedCar?.addEventListener('animationend', () => {
                if (animatedCar?.classList.contains('animation-move-car')) {
                    EngineButtonsStopped(carId);
                    ShowAlert(`${carName} had finished race in ${carTime}s!`);
                }
            });
        }))
}

export default StartSingleCar;