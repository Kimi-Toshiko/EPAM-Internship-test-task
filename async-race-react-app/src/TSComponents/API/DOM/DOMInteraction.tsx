import { getAnimatedCar } from "../../Variables/DocumentVariables";

export const MakeButtonsInactive = (id: number) => {
    const thisBtnStartEngine = document.getElementById(`btn-start-engine-${id}`);
    const thisBtnStopEngine = document.getElementById(`btn-stop-engine-${id}`);                          
    thisBtnStartEngine?.classList.remove('engine-active-btn');
    thisBtnStartEngine?.classList.add('engine-inactive-btn');
    thisBtnStopEngine?.classList.remove('engine-inactive-btn');
    thisBtnStopEngine?.classList.add('engine-active-btn');
}

export const AddCarAnimation = (id: number, animationDuration: number) => {
    const animatedCar = getAnimatedCar(id);
    animatedCar?.setAttribute('is-participating', 'true');
    animatedCar?.setAttribute('style', `animation-fill-mode: forwards; animation-duration: ${animationDuration}s; `);
    animatedCar?.classList.add('animation-move-car');    
}