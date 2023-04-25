import Navbar from "./Appbar";
import HomeDown from "./Home-down";
import { useEffect, useState } from "react";
import axios from "axios";

import '../styles/Items.css'
import '../styles/styles.scss'

import { useNavigate } from "react-router-dom";

//This is comment
const url = 'http://localhost:8000/items';
function Items() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    const [name, setName] = useState('');
    const [priceMax, setPriceMax] = useState(1000);
    const [priceMin, setPriceMin] = useState(0);

    // let arr = [];

    async function fetchData() {
        let temp = await axios(url);
        console.log('Data', temp);
        await setItems(temp.data.data.result);

        const userId = localStorage.getItem('id');
        console.log(typeof (userId), userId);
        if (userId && userId !== '-1') {

            const url2 = `http://localhost:8000/user/${userId}`;

            const response = await axios.get(url2);
            const user = response.data.data.user;
            console.log(user);
            await setCart(user.cart);
            console.log(cart);
        }





    }



    useEffect(() => {
        fetchData()
    }, [name]);


    const navigate = useNavigate();
    const handleCart = async (id) => {
        console.log('Handling cart');
        const userId = localStorage.getItem('id');
        if (userId && userId != -1) {

            const url2 = `http://localhost:8000/user/${userId}`;
            let value;
            cart.includes(id) ? value = -1 : value = 1;
            console.log(value);
            await axios.patch(url2, {
                cart: id,
                value: value
            });
            let temp;

            if (value === 1) {
                temp = [...cart];
                temp.push(id);
            } else if (value === -1) {
                temp = cart.filter((c) => { return c !== id });
            }

            setCart([...temp]);


        } else {
            console.log('hi');
            navigate('/login')
        }
    }

    const handleFilter = async () => {
        console.log(items);
        let temp = items.filter((item) => {
            let t1 = item.item_name.includes(name);
            let t2 = item.price >= priceMin && item.price <= priceMax;

            return t1 && t2;
        })

        await setItems([...temp])
    }


    return (
        <>
            <Navbar />

            <div className="page">
                <div className="item-filters">
                    <input type="text" placeholder="Search" className="searchbox"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value)
                        }}
                    />
                    <label>Price Range</label>

                    <div className="price-range">
                        <label>Min : </label>
                        <input type="number"
                            value={priceMin}
                            onChange={(e) => setPriceMin(e.target.value)}
                        />
                        <label>Max : </label>
                        <input type="number"
                            value={priceMax}
                            onChange={(e) => setPriceMax(e.target.value)}
                        />
                    </div>
                    <div><button
                        className="btn btn-warning"

                        onClick={handleFilter}
                    >Apply changes</button></div>

                </div>
                <div className="item-list">
                    {
                        !items ?
                            (
                                <div className="spinner-border" role="status" style={{ alignSelf: 'center' }}>
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )
                            :

                            items.map((item) => (
                                <div className="card item-card" style={{ width: "14rem" }}>
                                    <img src={item.item_img} className="card-img-top" alt="..." style={{ height: '8rem' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.item_name}</h5>
                                        <p>Price : {item.price}/-</p>
                                        <p>Restaurant : {item.rest_name}</p>
                                        <div>
                                            {
                                                cart.includes(item.item_name) ?
                                                    (
                                                        <button onClick={() => handleCart(item.item_name)} className="btn btn-warning">Remove to Cart</button>
                                                    )
                                                    :
                                                    (
                                                        <button onClick={() => handleCart(item.item_name)} className="btn btn-warning">Add to Cart</button>
                                                    )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>

            <HomeDown />
        </>
    );
}

export default Items;