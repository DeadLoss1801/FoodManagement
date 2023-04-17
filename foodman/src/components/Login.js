import '../styles/Login.css'
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

import Navbar from './Appbar'



const path = 'https://img.freepik.com/free-vector/flying-doughnut-melted-cartoon-icon-illustration_138676-2452.jpg?w=2000'
const url = `http://localhost:8000/user/login`
function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();




    const handleClick = async (event) => {
        event.preventDefault();
        try {

            const resp = await axios.post(url, {
                email, password
            })

            const data = resp.data.data.user;


            if (data.name) {
                localStorage.setItem('id', data._id);
                localStorage.setItem('name', data.name);
                navigate('/');
            } else {
                console.log('User not Found')
            }
        } catch (e) {
            console.log(e.response);
        }
    }

    return (
        <>
            <Navbar />
            <div className={'login-Page'}>

                <div className={'login-card'}>
                    <img src={path} alt='login' />
                    <div className={'login-form'}>
                        <form>
                            <h3 className={'login-heading'}>Log In to Your Account</h3>

                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <input className={'login-input'} type={'email'} placeholder={'Enter Your Email'}
                                    value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-2vh' }}>
                                <input className={'login-input'} type={'password'} placeholder={'Password'}
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1vh' }}>
                                <div>
                                    <input type="checkbox" className="login-check" />
                                    <label >&nbsp;Keep me logged in for 30 days&nbsp;&nbsp;&nbsp;</label>
                                </div>
                                <div style={{ color: 'blue' }}>
                                    <NavLink style={{ textDecoration: 'none' }} to={'/forgotPassWord'}>Forgot Password?</NavLink>
                                </div>
                            </div>

                            <button className={'login-button'} onClick={handleClick}>Login</button>
                        </form>
                    </div>
                </div>


            </div>
        </>
    );
}

export default Login;
