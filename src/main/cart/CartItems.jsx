
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faMinus} from  '@fortawesome/free-solid-svg-icons'
import { motion } from 'framer-motion';
import './CartItems.css'
import { useRef, useState } from 'react';
import { useEffect } from 'react';

export const CartItems = ({cartArray,onIncrease,onDecrease,total})=>{
    const [buttonPlusColor,setButtonPlusColor] = useState('black')
    const [buttonMinusColor,setButtonMinusColor] = useState('black')
    useEffect(
        ()=>{
            console.log('happening')
            window.setTimeout(()=>{ setButtonPlusColor('black');setButtonMinusColor('black')},200);
            console.log('happened')
            
        },[buttonPlusColor,buttonMinusColor]
    )
    const decreaseRef = useRef()
    const changeMinusColor = ()=>{
        // console.log(decreaseRef.current.style.borderColor)
       console.log('called')
        setButtonMinusColor('purple')
    }
    const changePlusColor = ()=>{
        // console.log(decreaseRef.current.style.borderColor)
       console.log('called')
        setButtonPlusColor('purple')
    }
    // console.log(decreaseRef.current.style)
    return(
        
        <div className='cart_div'> 
            <h1>Your Cart</h1>
        {/* <div className='cart_container'> */}
            <div className='checkout_and_table'>
                <table className='table'>
                <tr className="table_row_header"><th>Product</th><th>Price</th><th>Quantity</th><th>Total</th></tr>
        
        {
            cartArray.map((item)=>(
                <tr className="table_row" key={item.name}>
                    
                        <td >
                            <div className='image_div'>
                                <img src={item.image}/>
                            </div>
                        <div>
                        {item.name}
                        <div className='color_div'>
                         color : <div  style={{width : '15px',height:'15px',backgroundColor: item.color}}></div>
                         </div>
                        </div>
                        
                        </td>
                        <td>${item.cost}</td>
                        <td className='number_div'>
                            <p 
                            className='decrease_button'
                            style={{'borderColor' : `${buttonMinusColor}`}}
                            onClick={()=>{onDecrease(item);changeMinusColor()}}>
                            <FontAwesomeIcon icon={faMinus}/>
                            </p>
                            <p>{item.number}</p> 
                            <p style={{'borderColor' : `${buttonPlusColor}`}} 
                            className='increase_button' onClick={()=>{onIncrease(item);changePlusColor()}}>
                                <FontAwesomeIcon icon={faPlus}/>
                            </p>
                        </td>
                        <td>${item.total}</td>
                </tr>
                ))
    }
            </table>
            <div className='checkout_container'>
                <p className='checkout_container_header'>Order Summary</p>
                <div className='information'>
                    <div className='information_styling'><p>Subtotal</p><p>{total}</p></div>
                    <div className='information_styling'><p>Shipping</p><p>free</p></div>
                    <div className='information_styling for_total'><p>Total</p><p>${total}</p></div>
                </div>
                <button className='checkout_button'>Checkout</button>
            </div>
        </div>
    {/* </div> */}
    </div>)
}