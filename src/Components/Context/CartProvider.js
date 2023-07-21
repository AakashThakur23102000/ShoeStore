import React, { useEffect, useState } from 'react'
import CartContext from './CartContext'

function CartProvider(props) {

    //states   
    var [ProviderCart, setProviderCart] = useState([]);
    var [customerCart, setCustomerCart] = useState([]);
    //useEffect
    useEffect(() => {
        console.log("is is working")
        fetchRetailerCart();
        fetchCustomerCart();
        // eslint-disable-next-line
    }, [])

    //functions to fetch Provider api
    function fetchRetailerCart() {
        fetch("https://sharpenerauth-default-rtdb.firebaseio.com/ShoeStore/Retailer.json")
            .then((data) => {
                data.json().then((datas) => {
                    var full_retailer_cart = [];
                    for (var key in datas) {
                        full_retailer_cart.push({ ...datas[key], id_Retailer: key });
                    }
                    setProviderCart(full_retailer_cart)
                })
            }).catch((err) => { console.log(err) })
    }

    //function to fetch Customer APi
    function fetchCustomerCart() {
        fetch("https://sharpenerauth-default-rtdb.firebaseio.com/ShoeStore/Customer.json")
            .then((data) => {
                data.json().then((datas) => {
                    var full_customer_cart = [];
                    for (var key in datas) {
                        full_customer_cart.push({ ...datas[key], id_customer: key });
                    }
                    setCustomerCart(full_customer_cart)
                })
            }).catch((err) => { console.log(err) })
    }

    //context VAlue
    var Basket = {
        retailerCart: ProviderCart,
        retailerCartInc: (data) => {
            fetch("https://sharpenerauth-default-rtdb.firebaseio.com/ShoeStore/Retailer.json", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(() => {
                fetchRetailerCart();
            }).catch((err) => { console.log(err) })
        },

        // customer cart
        customerCntCart: customerCart,
        customerCntCartAddS: (data) => {
            if (data.shoe_size_s < 1) {
                //pass
            } else {
                // adding new quantity to Customer Cart
                fetch("https://sharpenerauth-default-rtdb.firebaseio.com/ShoeStore/Customer.json", {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify({ ...data, cusS: data.cusS + 1 })
                }).then(() => {
                    fetchRetailerCart();
                }).catch((err) => { console.log(err) })
            }
        },

    };

    return (
        <CartContext.Provider value={Basket}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider