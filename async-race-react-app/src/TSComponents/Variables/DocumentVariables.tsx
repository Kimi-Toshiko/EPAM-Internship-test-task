export const createCarName = document.getElementById('create-car-name');

export const getAnimatedCar = (id: number) => {
    return document.getElementById(`animated-car-${id}`);
}

export const getBtnStartEngine = (id: number) => {
    return document.getElementById(`btn-start-engine-${id}`);
}

export const getBtnStopEngine = (id: number) => {
    return document.getElementById(`btn-stop-engine-${id}`);
}

export const getSelectBtn = (id: number) => {
    return document.getElementById(`select-btn-${id}`);
}