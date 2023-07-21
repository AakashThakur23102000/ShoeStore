import React from 'react'
import "../Components/Css/Cart.css"
import CloseIcon from '@mui/icons-material/Close';

function Cart() {
    return (
        <div className='Cart_div'>
            <div className='Cart_div_Banner'>
                <h4 style={{marginLeft:"150px"}}>Customer Cart</h4>
                <CloseIcon/>
            </div>
            <div className='Cart_div_items'>
                
            </div>
            <div className='Cart_div_items'>
                
            </div>
            <div className='Cart_div_items'>
                
            </div>
        </div>
    )
}

export default Cart