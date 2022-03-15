import {useState} from 'react'
export default function SignUpSignIn(){
  return <>
    <h1 className='text-center'>BIAL</h1>
    <form>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type="text" autoComplete='off' name="username"/>
      </div>
      <div>
        <label htmlFor='phone'>Phone number: </label>
        <input type="text" autoComplete='off' name="phone"/>
      </div>
      <div>
        <label htmlFor='email'>Email: </label>
        <input type="text" autoComplete='off' name="email"/>
      </div>
      <div>
        <label htmlFor='address'>Address: </label>
        <input type="text" autoComplete='off' name="address"/>
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input type="text" autoComplete='off' name="password"/>
      </div>
      <button type="submit">Register</button>
    </form>
    
  </>
}