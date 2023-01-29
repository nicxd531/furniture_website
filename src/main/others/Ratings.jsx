import {BsStar, BsStarFill,BsStarHalf} from "react-icons/bs";
import "./Others.css"
import { useState } from "react"
const Ratings = () => {
    const [rating, setRatings] = useState(true)
    const [ratingReal, setRatingsReal] = useState(true)
  const half =" true"
  const full ="true"
  let starRatings= ratingReal ? <BsStarFill/> :<BsStarHalf/>

    
    return ( 
        <div className="ratings">
           {rating ==0 ? <BsStar className="ml-2"/>: starRatings }
           {rating ==0 ? <BsStar className="ml-2"/>: starRatings }
           {rating ==0 ? <BsStar className="ml-2"/>: starRatings }
           {rating ==0 ? <BsStar className="ml-2"/>: starRatings }
           {rating ==0 ? <BsStar className="ml-2"/>: starRatings }
           
        </div>
     );
}
 
export default Ratings;