import '../garage.css';

type Props = {};

const Garage = (props: Props) => {
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
                <div className="cars-list">
                    <div className="car">
                        <div className="car-sets">
                            <div className="car-race-btns">
                                <button className='orange-btn md-padding sm-btn'>Select</button>
                                <button className='light-blue-btn md-padding sm-btn'>Remove</button>
                            </div>
                            <div className="start-stop-btns">
                                <button className='green-btn sm-padding sm-btn'>A</button>
                                <button className='gray-btn sm-padding sm-btn'>B</button>
                            </div>
                            <div className="car-ico">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                        </div>
                        <div className="finish-block"></div>
                        <hr />
                    </div>
                    <div className="car">
                        <div className="car-sets">
                            <div className="car-race-btns">
                                <button className='orange-btn md-padding sm-btn'>Select</button>
                                <button className='light-blue-btn md-padding sm-btn'>Remove</button>
                            </div>
                            <div className="start-stop-btns">
                                <button className='green-btn sm-padding sm-btn'>A</button>
                                <button className='gray-btn sm-padding sm-btn'>B</button>
                            </div>
                            <div className="car-ico">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                        </div>
                        <div className="finish-block"></div>
                        <hr />
                    </div>
                    <div className="car">
                        <div className="car-sets">
                            <div className="car-race-btns">
                                <button className='orange-btn md-padding sm-btn'>Select</button>
                                <button className='light-blue-btn md-padding sm-btn'>Remove</button>
                            </div>
                            <div className="start-stop-btns">
                                <button className='green-btn sm-padding sm-btn'>A</button>
                                <button className='gray-btn sm-padding sm-btn'>B</button>
                            </div>
                            <div className="car-ico">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                        </div>
                        <div className="finish-block"></div>
                        <hr />
                    </div>
                    <div className="car">
                        <div className="car-sets">
                            <div className="car-race-btns">
                                <button className='orange-btn md-padding sm-btn'>Select</button>
                                <button className='light-blue-btn md-padding sm-btn'>Remove</button>
                            </div>
                            <div className="start-stop-btns">
                                <button className='green-btn sm-padding sm-btn'>A</button>
                                <button className='gray-btn sm-padding sm-btn'>B</button>
                            </div>
                            <div className="car-ico">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                        </div>
                        <div className="finish-block"></div>
                        <hr />
                    </div>
                    <div className="car">
                        <div className="car-sets">
                            <div className="car-race-btns">
                                <button className='orange-btn md-padding sm-btn'>Select</button>
                                <button className='light-blue-btn md-padding sm-btn'>Remove</button>
                            </div>
                            <div className="start-stop-btns">
                                <button className='green-btn sm-padding sm-btn'>A</button>
                                <button className='gray-btn sm-padding sm-btn'>B</button>
                            </div>
                            <div className="car-ico">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                        </div>
                        <div className="finish-block"></div>
                        <hr />
                    </div>
                    <div className="car">
                        <div className="car-sets">
                            <div className="car-race-btns">
                                <button className='orange-btn md-padding sm-btn'>Select</button>
                                <button className='light-blue-btn md-padding sm-btn'>Remove</button>
                            </div>
                            <div className="start-stop-btns">
                                <button className='green-btn sm-padding sm-btn'>A</button>
                                <button className='gray-btn sm-padding sm-btn'>B</button>
                            </div>
                            <div className="car-ico">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                        </div>
                        <div className="finish-block"></div>
                        <hr />
                    </div>
                    <div className="car">
                        <div className="car-sets">
                            <div className="car-race-btns">
                                <button className='orange-btn md-padding sm-btn'>Select</button>
                                <button className='light-blue-btn md-padding sm-btn'>Remove</button>
                            </div>
                            <div className="start-stop-btns">
                                <button className='green-btn sm-padding sm-btn'>A</button>
                                <button className='gray-btn sm-padding sm-btn'>B</button>
                            </div>
                            <div className="car-ico">
                                <i className="fa-solid fa-car-side"></i>
                            </div>
                        </div>
                        <div className="finish-block"></div>
                        <hr />
                    </div>
                </div>
                <div className="garage-info">
                    <div className="garage-count">
                        <p>GARAGE (105)</p>
                    </div>
                    <div className="pagination">
                        <button className='orange-btn sm-padding'><i className="fa-solid fa-caret-left"></i></button>
                        <p>PAGE #1</p>
                        <button className='orange-btn sm-padding'><i className="fa-solid fa-caret-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Garage;