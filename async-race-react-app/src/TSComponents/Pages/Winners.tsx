import '../../winners.css';
import useFetch from '../Hooks/useFetch';
import WinnerList from '../WinnerList';

const Winners = () => {
    const winnersUrl: string = 'http://localhost:3000/winners';
    const {data: winnersData, isPending: winnersIsPending, error: winnersError} = useFetch(winnersUrl);

    return (
        <div className="winners">
            <div id="winners-content">
                <h2>WINNERS</h2>
                <section>
                    {winnersError && <p className='fetch-error'>{winnersError}</p>}
                    {winnersIsPending && <p className='fetch-loading'>Loading winners...</p>}
                    {winnersData && <WinnerList winners={winnersData} />}
                </section>
            </div>
        </div>
    )
}

export default Winners;