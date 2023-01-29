import {CartItems} from './cart/CartItems'
import {EmptyCart} from './cart/EmptyCart'
import "./cart/EmptyCart.css"

export const Cart = ({cartArray,onIncrease,onDecrease,total})=>(
    <>
    { cartArray.length === 0 ? <EmptyCart/> : <CartItems cartArray={cartArray} onIncrease={onIncrease} 
                                                        onDecrease={onDecrease} total={total}/>}
    </>
    )