import React, {useState} from 'react';
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUp = (e) => {
        console.log(email);
        console.log(password);
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);

        }).catch((error) => {
            console.log(error);
        })
    }
  return (
    <div>
        <div className='sign-up-container'>
            <form onSubmit={signUp}>
                <h1>Create an account</h1>
                <input type="email" placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp