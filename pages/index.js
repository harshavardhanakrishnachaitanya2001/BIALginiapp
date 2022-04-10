import {useState} from 'react'
import styles from '../styles/Signup.module.css'
export default function SignUpSignIn(){
  const [username,setUsername] = useState("");
  const [phone,setPhone] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
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
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   const signupDetails = {
  //     "username":username,
  //     "phone":phone,
  //     "email":email,
  //     "address":address,
  //     "password":password
  //   }
  // }
  const handleClick = async (event) => {
    event.preventDefault();
    const signupDetails = {
            method:"POST",
            body:JSON.stringify({
                username: username,
                phone: phone,
                email: email,
                password: password
            }),
            headers:{
                "Content-Type":"application/json"
            },
        }
    fetch('http://0.0.0.0:3000/api/user',signupDetails)
        .then(res => {
            console.log(res)
            return res.json()
        })
        .then(response => console.log(`response`,response))
        .catch(error => console.log(`error`,error))
}
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