import { getAnimatedCar, getBtnStartEngine, getBtnStopEngine } from "../../Variables/DocumentVariables";

export const EngineButtonsStarted = (id: number) => {
    const thisBtnStartEngine = getBtnStartEngine(id);
    const thisBtnStopEngine = getBtnStopEngine(id);                         
    thisBtnStartEngine?.classList.remove('engine-active-btn');
    thisBtnStartEngine?.classList.add('engine-inactive-btn');
    thisBtnStopEngine?.classList.remove('engine-inactive-btn');
    thisBtnStopEngine?.classList.add('engine-active-btn');
}

export const EngineButtonsStopped = (id: number) => {
    const thisBtnStartEngine = getBtnStartEngine(id);
    const thisBtnStopEngine = getBtnStopEngine(id);                          
    thisBtnStartEngine?.classList.add('engine-active-btn');
    thisBtnStartEngine?.classList.remove('engine-inactive-btn');
    thisBtnStopEngine?.classList.add('engine-inactive-btn');
    thisBtnStopEngine?.classList.remove('engine-active-btn');
}

export const AddCarAnimation = (id: number, animationDuration: number, fillMode: string) => {
    const animatedCar = getAnimatedCar(id);
    animatedCar?.setAttribute('is-participating', 'true');
    animatedCar?.setAttribute('style', `animation-fill-mode: ${fillMode}; animation-duration: ${animationDuration}s; `);
    animatedCar?.classList.add('animation-move-car');    
}

export const RemoveCarAnimation = (id: number) => {
    const animatedCar = getAnimatedCar(id);
    animatedCar?.classList.remove('animation-move-car');
    animatedCar?.removeAttribute('style');
}