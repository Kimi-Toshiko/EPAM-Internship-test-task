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
    isDataChanged?: () => void;
    isRaceClicked: number;
    isResetClicked: number;
}