'use strict';

const Table = () => {

    const URL = 'https://founders-takehome-api.herokuapp.com/api/fetch'

    /*
        TODO:

        Make a GET request to `https://founders-takehome-api.herokuapp.com/api/fetch` (initialized as `URL`)
        Process response data into an HTML table

        Feel free to delegate to as many components as you like or make Table a class-based components.
    */
   const [state, setState] = useState([])
    useEffect(() => {
        fetch(URL).then(
            res => {return res.json()}
        ).then(data => {
            setState(data.foods)
        })
    })

    return (
        <section>
            <table>
                <tr>
                    <th>Calories</th>
                    <th>Carbs</th>
                    <th>Name</th>
                    <th>Quantity</th>
                </tr>
                {state.map(food => <tr>
                    <td>food.calores</td>
                    <td>food.carbohydrates</td>
                    <td>food.name</td>
                    <td>food.quantity</td>
                </tr>)}
            </table>
        </section>
    )
}

const domContainer = document.querySelector('#table');
ReactDOM.render(<Table />, domContainer);