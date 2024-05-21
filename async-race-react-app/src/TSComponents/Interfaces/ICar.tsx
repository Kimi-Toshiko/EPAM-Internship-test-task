type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;
type Color = RGB | RGBA | HEX;

export interface ICar {
    id: number;
    name: string;
    color: Color;
}
export interface ICarListProps {
    cars: ICar[];
    isDataChanged: () => void;
    isRaceClicked: number;
    isResetClicked: number;
}

export interface ICarInteractionButtonsProps {
    carId: number;
    isDataChanged: VoidFunction;
    btnSelectedAmount: number;
    decreaseSelectedAmount: VoidFunction;
    changeContainerToInvalid: VoidFunction;
    changeContainerToValid: (id: number) => void;
    increaseSelectedAmount: VoidFunction;
}