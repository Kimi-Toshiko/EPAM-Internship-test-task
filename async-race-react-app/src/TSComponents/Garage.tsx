import '../garage.css';
import CarList from './CarList';
import useFetch from './useFetch';

type Props = {};

const Garage = (props: Props) => {
    const { data: cars, isPending, error } = useFetch('http://localhost:3000/garage');

    return (
        <div className="garage">
            <div id="garage-content">
                <div className="btns-block">
                    <div className="race-btns">
                        <button className='orange-btn'>Race <i className="fa-solid fa-play"></i></button>
                        <button className='light-blue-btn'>Reset <i className="fa-solid fa-rotate-left"></i></button>
                    </div>
                    <div className="cu-btns">
                        <div className="create">
                            <input type="text" />
                            <input type="color" />
                            <button className='orange-btn'>Create</button>
                        </div>
                        <div className="update">
                            <input type="text" />
                            <input type="color" />
                            <button className='orange-btn'>Update</button>
                        </div>
                    </div>
                    <div className="generate-cars-btn">
                        <button className='light-blue-btn'>Generate cars</button>
                    </div>
                </div>
                <div className="divider"></div>
                <section>
                    {error && <p className='fetch-error'>{error}</p>}
                    {isPending && <p className='fetch-loading'>Loading cars...</p>}
                    {cars && <CarList cars={cars} />}
                </section>
            </div>
        </div>
    )
}

export default Garage;