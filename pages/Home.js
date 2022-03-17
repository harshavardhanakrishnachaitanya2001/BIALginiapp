import styles from '../styles/Home.module.css'
export default function Home(){
    return <>
        <h1 className={styles.mainHeading}>Available flights</h1>
        <div className={styles.inputs}>
        <label>Destination: </label>
        <input type="text"/>
        <label>Date of departuer: </label>
        <input type="date"/>
        <label>Return date: </label>
        <input type="date"/>
        </div>
        <div className={styles.tableContainer}>
            <table className={styles.availableFlights}>
                <tr>
                    <th>Available flights</th>
                    <th>Timings</th>
                    <th>Bording pt.</th>
                    <th>Available seats</th>
                    <th>Book?</th>
                </tr>
            </table>
        </div>
    </>
}