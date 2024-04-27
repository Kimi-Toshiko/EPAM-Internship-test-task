import '../winners.css';

type Props = {};

const Winners = (props: Props) => {
    return (
        <div className="winners">
            <div id="winners-content">
                <h2>WINNERS</h2>
                <table className="winners-tb">
                    <tr>
                        <th>№</th>
                        <th>CAR</th>
                        <th>NAME</th>
                        <th>WINS</th>
                        <th>BEST TIME (SECONDS)</th>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td><i className="fa-solid fa-car-side"></i></td>
                        <td>AUDI S3</td>
                        <td>1</td>
                        <td>2.73</td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td><i className="fa-solid fa-car-side"></i></td>
                        <td>AUDI S3</td>
                        <td>1</td>
                        <td>2.73</td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td><i className="fa-solid fa-car-side"></i></td>
                        <td>AUDI S3</td>
                        <td>1</td>
                        <td>2.73</td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td><i className="fa-solid fa-car-side"></i></td>
                        <td>AUDI S3</td>
                        <td>1</td>
                        <td>2.73</td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td><i className="fa-solid fa-car-side"></i></td>
                        <td>AUDI S3</td>
                        <td>1</td>
                        <td>2.73</td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td><i className="fa-solid fa-car-side"></i></td>
                        <td>AUDI S3</td>
                        <td>1</td>
                        <td>2.73</td>
                    </tr>
                    <tr>
                        <td>103</td>
                        <td><i className="fa-solid fa-car-side"></i></td>
                        <td>AUDI S3</td>
                        <td>1</td>
                        <td>2.73</td>
                    </tr>
                </table>
                <div className="pagination">
                    <button className='orange-btn sm-padding'><i className="fa-solid fa-caret-left"></i></button>
                    <p>PAGE #1</p>
                    <button className='orange-btn sm-padding'><i className="fa-solid fa-caret-right"></i></button>
                </div>
            </div>
        </div>
    )
}

export default Winners;