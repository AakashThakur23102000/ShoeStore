import React, { useContext, useState } from 'react'
import "../Components/Css/AddProducts.css"
import CartContext from './Context/CartContext';
function AddProducts() {

    //states
    var [addName,setAddName] = useState("");
    var [addDesc,setAddDesc] = useState("");
    var [addPrice,setPrice] = useState("");
    var [addS,setAddS] = useState("");
    var [addM,setAddM] = useState("");
    var [addL,setAddL] = useState("");

    //variables
    var Basket = useContext(CartContext);
    

    //functions
    function addProductsHandler(e){
        e.preventDefault();
        if(addName==="" || addDesc==="" || addPrice==="" || addS==="" || addM==="" || addL===""){
            alert("Fill all the feilds");
        }else{
            var shoe_obj = {
                shoe_name : addName,
                shoe_desc : addDesc,
                shoe_price : addPrice,
                shoe_size_s : addS,
                shoe_size_m : addM,
                shoe_size_l : addL,
                cusS:0,
                cusM:0,
                cusL:0
            }
            Basket.retailerCartInc(shoe_obj);        
          }
    }

    return (
        <center>
            <div className='AddProducts_div'>
                <div className='AddProducts_box1'><input type={"text"} placeholder="Enter your Shoe Name" value={addName} onChange={(e)=>{setAddName(e.target.value)}}></input></div>
                <div className='AddProducts_box2'><input type={"text"} placeholder="Enter your Desc" value={addDesc} onChange={(e)=>{setAddDesc(e.target.value)}}></input></div>
                <div className='AddProducts_box3'><input type={"number"} placeholder="Enter your Price" value={addPrice} onChange={(e)=>{setPrice(e.target.value)}}></input></div>
                <div className='AddProducts_box4'>
                    <div className='AddProducts_box4_div'>Quantity Availlable</div>
                    <div className='AddProducts_box4_div'>
                        <div className='box_size'>S</div>
                        <div className='box_size'>M</div>
                        <div className='box_size'>L</div>
                    </div>
                    <div className='AddProducts_box4_div'>
                        <div className='box_size'><input type={"number"} placeholder="S" value={addS} onChange={(e)=>{setAddS(e.target.value)}}></input></div>
                        <div className='box_size'><input type={"number"} placeholder="M" value={addM} onChange={(e)=>{setAddM(e.target.value)}}></input></div>
                        <div className='box_size'><input type={"number"} placeholder="L" value={addL} onChange={(e)=>{setAddL(e.target.value)}}></input></div>
                    </div>
                </div>
                <div className='AddProducts_box5'><button onClick={(e)=>{addProductsHandler(e)}}>Add Products</button></div>
            </div>
        </center>
    )
}

export default AddProducts