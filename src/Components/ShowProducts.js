import React, { useContext } from 'react';
import "../Components/Css/ShowProducts.css";
import CartContext from './Context/CartContext';

function ShowProducts() {
    //variable
    const Basket = useContext(CartContext);
    // console.log(Basket.retailerCart)

    //functions
    function addSHandler(e,data){
        e.preventDefault();
        Basket.customerCntCartAddS(data)
    }
    function addMHandler(e,data){
        e.preventDefault();
        console.log(data)
    }
    function addLHandler(e,data){
        e.preventDefault();
        console.log(data)
    }

    return (
        <center>
            <div className='ShowProducts_div'>
                {Basket.retailerCart.length > 0 ?
                    //if true
                    <center>
                        {Basket.retailerCart.map((data,index) => {
                            return (
                                <div className='ShowProducts_div_products' key={index}>
                                    <div className='ShowProducts_div_products_div' style={{ fontSize: "25px", fontWeight: "bolder" }}>{data.shoe_name}</div>
                                    <div className='ShowProducts_div_products_div'>{data.shoe_desc}</div>
                                    <div className='ShowProducts_div_products_div' style={{ width: "30%", fontSize: "25px", fontWeight: "bolder" }}>{data.shoe_price}</div>
                                    <div className='ShowProducts_div_products_div' style={{ display: 'flex', flexDirection: "column", width:"44%"}}>
                                        <div className='ShowProducts_box'>
                                            <div className='ShowProducts_box_divs'>S</div>
                                            <div className='ShowProducts_box_divs'>M</div>
                                            <div className='ShowProducts_box_divs'>L</div>
                                        </div>
                                        <div className='ShowProducts_box'>
                                            <div className='ShowProducts_box_divs'>
                                                <h3>{data.shoe_size_s}</h3>
                                            </div>
                                            <div className='ShowProducts_box_divs'>
                                                <h3>{data.shoe_size_m}</h3>
                                            </div>
                                            <div className='ShowProducts_box_divs'>
                                                <h3>{data.shoe_size_l}</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ShowProducts_div_products_div' style={{ width: "40%" }}>
                                        <button onClick={(e)=>{addSHandler(e,data)}}>Add S</button>
                                        <button onClick={(e)=>{addMHandler(e,data)}}>Add M</button>
                                        <button onClick={(e)=>{addLHandler(e,data)}}>Add L</button>
                                    </div>
                                </div>
                            )
                        })}
                    </center>

                    :
                    //if false
                    <h1>There is no Products to buy</h1>

                }



            </div>
        </center>
    )
}

export default ShowProducts