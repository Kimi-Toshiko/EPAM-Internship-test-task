import { ICar } from "./ICar";

export interface ICarsListActions {
    dataArr: ICar[];
    IsDataChanged: Function;
    fetchLink: string;
}