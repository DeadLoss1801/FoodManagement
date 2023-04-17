import Navbar from "./Appbar";
import '../styles/Cart.css'

import axios from "axios";
import { useEffect, useState } from "react";



function Cart() {

    const [items, setItem] = useState([]);
    let arr = [];
    const [total, setTotal] = useState(0);

    const fetchData = async () => {
        const userId = localStorage.getItem('id');
        if (userId && userId !== -1) {

            const url2 = `http://localhost:8000/user/${userId}`;


            const response = await axios.get(url2);
            let id = response.data.data.user.cart;
            let x = 0;

            for (let i = 0; i < id.length; i++) {
                let url = `http://localhost:8000/items/${id[i]}`;
                let temp = await axios.get(url)
                temp = temp.data.data.item;
                x = x + temp.price
                arr.push(temp)

            }


            await setTotal(x);
            await setItem([...arr]);
        }
    }

    const handleClick = async (id) => {
        const userId = localStorage.getItem('id');
        let url = `http://localhost:8000/user/${userId}`;

        let response = await axios.patch(url, {
            cart: id,
            value: -1
        })
        console.log(response);
        let x = 0;
        let temp = items.filter((item) => {
            if (item._id === id) {
                x = item.price;
            }
            return item._id !== id;
        })

        await setItem([...temp]);
        setTotal(total - x);



    }




    useEffect(() => fetchData, [])

    return (
        <>
            <Navbar />
            <div className="cart-container">

                <div className="right cart-child">
                    {
                        items.map((item) => (
                            <div className="cart-list">
                                <div className="cart-list-img">
                                    <img src={item.item_img} alt={item.name} />
                                </div>
                                <div className="cart-list-content">
                                    <h5>{item.name}</h5>
                                    <p>Price : Rs {item.price}/-</p>

                                </div>

                                <div>
                                    <h5>Restaurant : {item.rest_name}</h5>
                                    <p>{item.description}</p>
                                    <p>Rating : {item.rating}</p>
                                </div>
                                <div className="cart-list-button ">
                                    <button className=" btn-warning btn"
                                        onClick={() => handleClick(item._id)}
                                    >Remove</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="left cart-child">
                    <h4>Your order</h4>

                    {
                        items.map((item) => (
                            <div >
                                <p>{item.name} {item.price}</p>
                            </div>
                        ))
                    }
                    <hr />
                    <h5>Total : {total}</h5>
                </div>

            </div>
        </>
    );

}

export default Cart;