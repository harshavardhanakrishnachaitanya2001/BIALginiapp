import {useState, useEffect} from 'react'
import styles from '../styles/Signup.module.css'
export default function SignUpSignIn(){
  const [username,setUsername] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  let signupDetails = {};
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
  const handleClick = (e) => {
    e.preventDefault();
    signupDetails.username = username;
    signupDetails.phone = phone;
    signupDetails.email = email;
    signupDetails.password = password;
  }
  useEffect(()=>{
    fetch('/api/user',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(signupDetails)
    }).then(res=>{
      return res.json();
    })
},[])
  return <>
    <h1 className={styles.mainHeading}>Bangulure International Airport Limited</h1>
    <form className={styles.signupform}>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type="text" autoComplete='off' name="username" onChange = {handleUsername} value = {username || ""}/>
      </div>
      <div>
        <label htmlFor='phone'>Phone number: </label>
        <input type="text" autoComplete='off' name="phone" onChange = {handlePhone} value = {phone || ""}/>
      </div>
      <div>
        <label htmlFor='email'>Email: </label>
        <input type="text" autoComplete='off' name="email" value={email || ""} onChange={handleEmail}/>
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input type="password" autoComplete='off' name="password" value = {password || ""} onChange = {handlePassword}/>
      </div>
      <button type="submit" onClick={handleClick}>Register</button>
    </form>
    
  </>
}