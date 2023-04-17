import Navbar from "./Appbar";
import { useEffect, useState } from "react";
import axios from "axios";

import '../styles/Items.css'
import { useNavigate } from "react-router-dom";

//This is comment
const url = 'http://localhost:8000/items';
function Items() {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);

    async function fetchData() {
        let temp = await axios(url);
        console.log(temp);
        await setItems(temp.data.data.items);


        const userId = localStorage.getItem('id');
        if (userId && userId != -1) {

            const url2 = `http://localhost:8000/user/${userId}`;

            const response = await axios.get(url2);
            const user = response.data.data.user;

            await setCart(user.cart);
            console.log(cart[0], items[5]._id);

        }
        await []



    }



    useEffect(() => {
        fetchData()
    }, []);


    const navigate = useNavigate();
    const handleCart = async (id) => {
        const userId = localStorage.getItem('id');
        if (userId && userId != -1) {

            const url2 = `http://localhost:8000/user/${userId}`;
            let value;
            cart.includes(id) ? value = -1 : value = 1;
            console.log(value);
            const response = await axios.patch(url2, {
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
            navigate('/login')
        }
    }

    return (
        <>
            <Navbar />

            <div className="page">
                <div className="item-filters">

                </div>
                <div className="item-list">
                    {
                        !items ?
                            (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            )
                            :

                            items.map((item) => (
                                <div className="card item-card" style={{ width: "14rem" }}>
                                    <img src={item.item_img} className="card-img-top" alt="..." style={{ height: '8rem' }} />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <p>Price : {item.price}/-</p>
                                        <p>Restaurant : {item.rest_name}</p>
                                        <div>
                                            {
                                                cart.includes(item._id) ?
                                                    (
                                                        <button onClick={() => handleCart(item._id)} className="btn btn-warning">Remove to Cart</button>
                                                    )
                                                    :
                                                    (
                                                        <button onClick={() => handleCart(item._id)} className="btn btn-warning">Add to Cart</button>
                                                    )
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>


        </>
    );
}

export default Items;