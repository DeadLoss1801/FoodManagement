import { NavLink } from "react-router-dom";

import '../styles/Appbar.css'

import axios from 'axios'
import { useState } from "react";
const url = `http://localhost:8000/user/logout`
const cart_img = "https://static-00.iconduck.com/assets.00/shopping-cart-icon-512x462-yrde1eu0.png"
function Navbar() {
    const [name, setName] = useState(localStorage.getItem('name'));


    const handleLogOut = async () => {
        try {
            console.log('fklf')

            await localStorage.setItem('name', '')
            localStorage.setItem('id', -1);
            await setName(localStorage.getItem('name'));


        } catch (e) {
            console.log(e.response)
        }
    }




    return (
        <>
            <nav className='nav-bar'>
                <ul className={'nav-bar-list1'}>
                    <li><NavLink to='/' className={'nav-bar-link'}>Home</NavLink></li>
                    <li><NavLink to='/about' className={'nav-bar-link'}>About</NavLink></li>
                    <li><NavLink to='/contact' className={'nav-bar-link'}>Contact</NavLink></li>
                </ul>



                {
                    name === '' || !name ?
                        (
                            <ul className={'nav-bar-list2'}>
                                <li><NavLink to={'/login'} className={'nav-bar-link mx-3'} >Login</NavLink></li>
                                <li><NavLink to={'/signup'} className={'nav-bar-link'} >Sign up</NavLink></li>
                            </ul>
                        )
                        :
                        (
                            <ul className={'nav-bar-list2'}>
                                <li><button className="logout" onClick={handleLogOut}>Logout</button></li>
                                <li >Hello, {name}</li>
                                <li><NavLink to='/cart' className={'nav-img-link'}><img src={cart_img} alt="Cart" /></NavLink></li>
                            </ul>
                        )
                }


            </nav>
        </>
    );

}

export default Navbar;