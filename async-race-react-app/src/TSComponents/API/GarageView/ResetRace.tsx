import { ICar } from '../../Interfaces/ICar';
import { EngineButtonsStopped, RemoveCarAnimation } from '../DOM/DOMInteraction';

const ResetRace = (cars: ICar[], firstContentIndex: number, lastContentIndex: number) => {
    cars.slice(firstContentIndex, lastContentIndex).map(car => {
        fetch(`http://localhost:3000/engine?id=${car.id}&status=stopped`, {
            method: 'PATCH'
        })
            .then(response => response.json()
            .then(data => ({data: data}))
            .then((res) => {
                EngineButtonsStopped(car.id);
                RemoveCarAnimation(car.id);
            }))
    });
}

export default ResetRace;