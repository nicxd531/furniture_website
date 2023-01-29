import './productDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar,faHeart,faCartPlus,faCancel} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { motion } from 'framer-motion'
// import { useEffect } from 'react'





export const ProductDetail=({productDetail,handleAddToCart,handleRemoveFromCart})=>{
    const [rotate, setRotate] = useState(false);
    const [flip,setFlip] = useState(false);


    // const onRotateClick =()=>{
    //     rotate ? setRotate(false) : setRotate(true);
        
    // }
    const addToCart=(item)=>{
        if(rotate === false){
            handleAddToCart(item)
            setRotate(true)
        }else{
            handleRemoveFromCart(item);
            setRotate(false)
        }
        // console.log('clicked')
    }
    // rotate ? handleAddToCart(productDetail) : handleRemoveFromCart(productDetail);
    const ratingArray = [1,2,3,4,5]
    let fiveStarRating
    const calculateRating = (rawRating)=>{
         fiveStarRating = Math.floor((rawRating * 5) / 100)
    }
    calculateRating(productDetail.ratings)
    return(
        <section className="product_detail">
            <img className='product_image1' src={productDetail.image1}/>
            <div className='column_2'>
            <div className='preview_and_rating'>
                <p>Reviews : </p>
                <div className='rating_div'>
                        {
                            ratingArray.map((item)=>(
                                <FontAwesomeIcon key={item} className='review_icon' icon={faStar} style={item <= fiveStarRating ? {color : 'gold'} :{color : 'grey'}}/>
                            ))
                        }
                        </div>
            </div>
            <h1 className='product_name'>{productDetail.name}</h1>
            <p className='column_2_detail'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cupiditate, 
                illum optio velit blanditiis cum, 
            </p>
            <p className='product_cost'>${productDetail.cost}</p>
            <div className='heart_and_button' > 
                <motion.span
                     initial = {{rotateY : 0, color:'black'}} transition={{duration : .5}}
                     animate={flip ? {rotateY : 360,color:'gold'} :{rotateY : 0,color:'black'} } onClick={()=>{setFlip(!flip)}}
                >
                    <FontAwesomeIcon icon={faHeart} />
                </motion.span>
                <div className='add_to_cart_button_container'  onClick={()=>{addToCart(productDetail)}}> 
                    <motion.button 
                    initial ={{rotateY : 0}}   
                    animate={rotate ? {rotateY: 180} : {rotateY:0}}   transition={{duration: .5}} 
                    className='add_to_cart_button'>
                        add to cart <FontAwesomeIcon icon={faCartPlus} />
                    </motion.button>
                    <motion.button 
                    initial ={{rotateY : 180}}   
                    animate={rotate ? {rotateY: 360} : {rotateY:180}}   transition={{duration: .5}}  
                    className='remove_from_cart_button'>
                        remove <FontAwesomeIcon icon={faCancel} />
                    </motion.button>
                </div>
            </div>
            </div>
            <div className='column_3'>
                <img className='additional_image' src={productDetail.image2}></img>
                <img className='additional_image' src={productDetail.image2}></img>
            </div>
            
        </section>
    )
}