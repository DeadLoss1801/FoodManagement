import { NavLink } from "react-router-dom";
import '../styles/Home.css'
import HomeDown from "./Home-down";

import * as React from "react";
import Navbar from "./Appbar";

const path = ' https://png.pngtree.com/background/20210711/original/pngtree-bread-minimalist-literary-white-food-poster-background-picture-image_1121500.jpg'
function Home() {


    return (
        <>
            <Navbar />

            <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
                <div className="carousel-inner" >
                    <div className="carousel-item active">
                        <img src={path} className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-caption d-none d-md-block" style={{ color: '#340359', top: '100px', fontSize: '30px', fontWeight: '20px' }}>
                        <h1>FoodMan</h1>
                        <h3>Something hot. Something tasty.</h3>
                        <NavLink to={'/items'} className={'Home-link'}>Order</NavLink>
                    </div>

                </div>
            </div>

            <HomeDown />

        </>
    );
}

export default Home;