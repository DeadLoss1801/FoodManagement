import Navbar from "./Appbar";
import '../styles/Cart.css'
import '../styles/styles.scss'
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



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
    const path = `https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png`
    return (
        <>


            <div className="cart">
                <Navbar />
                <div className="cart-Page">
                    <div className="Cart">
                        <h1>Shopping Cart</h1>
                        <hr />
                        {
                            total !== 0 ?
                                (
                                    <>
                                        <table>
                                            <thead>
                                                <th></th>
                                                <th>Product</th>
                                                <th>Description</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th>Remove</th>
                                            </thead>
                                            <tbody>
                                                {
                                                    items.map((item) => (
                                                        <tr>
                                                            <td><img src={item.item_img} alt="product" /> </td>
                                                            <td>{item.name}</td>
                                                            <td>{item.description}</td>
                                                            <td>Rs.{item.price}/-</td>
                                                            <td>1</td>
                                                            <td><button className=" btn-warning btn"
                                                                onClick={() => handleClick(item._id)}
                                                            >Remove</button></td>
                                                        </tr>
                                                    ))
                                                }

                                            </tbody>
                                        </table>

                                        <div className="bill">
                                            <table>
                                                <tr>
                                                    <td className="subtotal">Subtotal </td>
                                                    <td className="subtotal">Rs.{total}/-</td>
                                                </tr>
                                                <tr>

                                                    <td>Total</td>
                                                    <td>Rs.{total}/-</td>

                                                </tr>
                                            </table>
                                            <div className="buy-button">
                                                <button className="btn btn-warning">Buy</button>
                                            </div>
                                        </div>


                                    </>


                                )
                                :
                                (
                                    <>
                                        <div className="Empty">
                                            <img src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png" alt="empty" />
                                            <NavLink to={'/items'} className={'itemsLink'}> Back to Shopping</NavLink>
                                        </div>
                                    </>
                                )
                        }
                    </div>
                </div>

            </div>

        </>

    );

}

export default Cart;