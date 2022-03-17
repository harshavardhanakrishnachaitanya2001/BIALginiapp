export default function Book(){
    return <>
        <h1>Book your flight</h1>
        <h2>Flight name</h2>
        <form>
            <div>
                <label>No. of passengers: </label>
                <input type="text"/>
            </div>
            <div>
                <select>
                    <option>Class_of_ticket</option>
                    <option>Business class</option>
                    <option>Economy</option>
                </select>
            </div>
            <button>Confirm ticket</button>
        </form>
        <table>
            <tr>
                <th>Flight</th>
                <th>Travel date</th>
                <th>Boarding pt.</th>
                <th>Time</th>
                <th>No. of passengers</th>
                <th>Destination</th>
                <th>Returing date</th>
                <th>Price for n people</th>
            </tr>
        </table>
    </>
}