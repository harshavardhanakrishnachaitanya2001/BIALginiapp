import styles from '../styles/payment.module.css'
export default function Payment(){
    return <>
        <h1 className={styles.mainHeading}>Payment</h1>
        <form className={styles.paymentMode}>
            <div>
                <label>Card number: </label>
                <input type="text"/>
            </div>
            <div>
                <label>Name on card: </label>
                <input type="text"/>
            </div>
            <div>
                <label>Expairy date: </label>
                <input type="text"/>
            </div>
            <div>
                <label>CVV: </label>
                <input type="password"/>
            </div>
            <div>
                <label>Save card details</label>
                <input type="checkbox" checked="true"/>
            </div>
            <button type="submit">Pay</button>
        </form>
        <button type="button">Mail the ticket</button>
    </>
}