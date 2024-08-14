
import { useState } from 'react'
import './style.css'
import { Input, Button } from '@nextui-org/react'
import { useAuth } from '../../context/AuthContext';
import {loginUser} from '../services/userService'



function Login() {


    const { login } = useAuth();


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handdleSubmit = (e) => {
        e.preventDefault()

        const email = e.target.email.value
        const password = e.target.password.value
        
        //llamar la api - desde poraca
        const data = {
            email,
            password
        }

        loginUser({data}).then((resp)=>{
            if(resp){
                login(resp).then(() => {
                    window.location.href = '/'; 
                }).catch((error) => {
                    console.error('Error during login:', error);
                });
            }else{
                alert('datos incorrectos')
            }
        })
      

    }


    return <>
        <div className="login-container">
            <form className='form-login' onSubmit={handdleSubmit}>
                <h1>Hola!</h1>
                <h3>Inicia sesión con tu cuenta</h3>
                <div className="inputs-form">
                    <Input
                        type="email"
                        label="Email:"
                        name="email"
                        placeholder="Ingrese su email"
                        className="custom-input"
                        style={{ width: "80%", height: "30px" }}
                        labelClassName="custom-label"
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                    />
                    <br />
                    <Input
                        type="password"
                        label="Password:"
                        name="password"
                        placeholder="Enter your password"
                        style={{ width: "80%", height: "30px" }}
                        className="custom-input"
                        labelClassName="custom-label"
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                    />
                </div>
                <br />
                <Button color="primary" className={!password || !email ? 'btn-singIn-disable' : 'btn-singIn'} type="submit" >
                    Iniciar sesión
                </Button>
            </form>
        </div>
    </>

}

export default Login