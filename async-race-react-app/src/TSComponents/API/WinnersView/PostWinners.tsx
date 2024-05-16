import axios from "axios";
import { IWinner } from "../../Interfaces/IWinner";
import { winnersViewLink } from "../../Variables/DataLinksVariables";

const PostWinners = (winnersData: IWinner[], winnersArr: {'name': string, 'winTime': number, id: number}) => {
    winnersData.map((winner: IWinner) => {
        if (winnersArr.id === winner.id) {
            axios.patch(`${winnersViewLink}/${winner.id}`, {"wins": winner.wins + 1})
                .catch(err => {console.log(err)});
            if (winner.time > winnersArr.winTime) {
            axios.patch(`${winnersViewLink}/${winner.id}`, {"time": winnersArr.winTime})
                .catch(err => {console.log(err)});
            }
        }
        else {
            let newWinner = {
                'id': winnersArr.id,
                'wins': 1,
                'time': winnersArr.winTime
            }
            axios.post(winnersViewLink, newWinner)
            .catch(err => {console.log(err)});;
        }
    });
}

export default PostWinners;