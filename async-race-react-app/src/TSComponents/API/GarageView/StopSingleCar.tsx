import { EngineButtonsStopped, RemoveCarAnimation } from '../DOM/DOMInteraction'

const StopSingleCar = (id: number) => {
    fetch(`http://localhost:3000/engine?id=${id}&status=stopped`, {
        method: 'PATCH'
    })
        .then(response => response.json()
        .then(data => ({data: data}))
        .then((res) => {
            EngineButtonsStopped(id);
            RemoveCarAnimation(id);
      }))
}

export default StopSingleCar;