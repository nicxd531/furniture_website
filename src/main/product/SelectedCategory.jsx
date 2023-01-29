import './SelectedCategory.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink, useNavigate } from 'react-router-dom';

// const cartArray = []
export const SelectedCategory =({categoryData,handleAddToCart})=>{
    const ratingArray = [1,2,3,4,5]
    let fiveStarRating
    const calculateRating = (rawRating)=>{
         fiveStarRating = Math.floor((rawRating * 5) / 100)
    }
   
    return(
        <div className='categoryData'>
            {
                categoryData.map((item)=>{
                    {calculateRating(item.ratings)}
                    return(<div key={item.name} className='item'>
                       <h2> {item.name} </h2>
                       <div className='image1_container'><img src={item.image1} alt={item.name} className='image1'/></div>
                       <div className='smaller_image_container'>
                            <div className='image2_container'><img className='image2' src={item.image2} alt={item.name}/></div>
                            <div className='image3_container'><img className='image3' src={item.image3} alt={item.name}/></div>
                       </div>
                       <div className='color_and_rating'>
                        <div className='rating_div'>
                        {
                            ratingArray.map((item)=>(
                                <FontAwesomeIcon key={item}  icon={faStar} style={item <= fiveStarRating ? {color : 'gold'} :{color : 'grey'}}/>
                            ))
                        }
                        </div>
                        <div className='color_div'><p>color: </p><p className='color_box'style={{backgroundColor : `${item.colour}`}} ></p> </div>
                       </div>
                       <div className='brand_material_cart'>
                        <div className='brand_material'>
                        <p>Brand : {item.brand}</p>
                        <p>material : {item.material}</p>
                       </div>
                       <div className='cart_cost'>
                        <FontAwesomeIcon icon={faCartShopping} shake size='lg' className='cart' onClick={()=>{handleAddToCart(item)}}/>
                        <h3>${item.cost}</h3>
                        </div>
                        </div>
                        <p><Link className='product_details' state={{productDetail : item}} to='/product_details'>Product Details</Link></p>
                    </div>)})
            }
        </div>
    )
}