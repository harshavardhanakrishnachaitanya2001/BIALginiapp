import {useState} from 'react'
import styles from '../styles/Signup.module.css'
export default function SignUpSignIn(){
  const [signupDetails,setSignupDetails] = useState([{}]);
  const [username,setUsername] = useState('');
  const [phone,setPhone] = useState();
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('');
  const [password,setPassword] = useState('');
  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handlePhone = (e) => {
    setPhone(e.target.value);
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleAddress = (e) => {
    setAddress(e.target.value)
  }
  async function handleSubmit(e){
    e.preventDefault();
    setSignupDetails([{'username':username,'phone':phone, 'email':email, 'address':address, 'password':password}]);
    const response = await fetch("/api/user",{
      method:'POST',
      body:JSON.stringify(signupDetails),
      headers:{
        "Content-Type":"application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  }
  return <>
    <h1 className={styles.mainHeading}>Bangulure International Airport Limited</h1>
    <form className={styles.signupform}>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type="text" autoComplete='off' name="username" onChange = {handleUsername} value = {username}/>
      </div>
      <div>
        <label htmlFor='phone'>Phone number: </label>
        <input type="text" autoComplete='off' name="phone" onChange = {handlePhone} value = {phone}/>
      </div>
      <div>
        <label htmlFor='email'>Email: </label>
        <input type="text" autoComplete='off' name="email" value={email} onChange={handleEmail}/>
      </div>
      <div>
        <label htmlFor='address'>Address: </label>
        <textarea autoComplete="off" name="address" onChange={handleAddress} value={address}/>
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input type="password" autoComplete='off' name="password" value = {password} onChange = {handlePassword}/>
      </div>
      <button type="submit" onClick = {handleSubmit}>Register</button>
    </form>
    {/* <p>{signupDetails.username} {signupDetails.phone} {signupDetails.email} {signupDetails.address} {signupDetails.password}</p> */}
    
  </>
}