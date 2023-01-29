import { Link } from 'react-router-dom'
import EmptyCartPic from '../images/—Pngtree—empty shopping cart icon_4436013.png'
import './EmptyCart.css'
 export const EmptyCart = ()=>{
        return(
            <div className='empty_cart_div'>
            <img className='empty_cart_image' src={EmptyCartPic} />
            <p className='empty_cart_p'>Your Cart is empty</p>
            <Link className='empty_cart_button' to='/'>continue shopping</Link>
            </div>
        )
    
}