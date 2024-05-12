export interface IWinner {
    id: number;
    wins: number;
    time: number;
}

export interface IWinnerListProps {
    winners: IWinner[];
}