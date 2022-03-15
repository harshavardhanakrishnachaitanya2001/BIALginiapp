import {useState} from 'react'
export default function SignUpSignIn(){
  return <>
    <h1>BIAL</h1>
    <form>
      <div>
        <label htmlFor='username'>Username: </label>
        <input type="text" name="username"/>
      </div>
      <div>
        <label htmlFor='phone'>Phone number: </label>
        <input type="text" name="phone"/>
      </div>
      <div>
        <label htmlFor='email'>Email: </label>
        <input type="text" name="email"/>
      </div>
      <div>
        <label htmlFor='address'>Address: </label>
        <input type="text" name="address"/>
      </div>
      <div>
        <label htmlFor='password'>Password: </label>
        <input type="text" name="password"/>
      </div>
    </form>
    
  </>
}