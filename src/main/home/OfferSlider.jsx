import {useState} from "react";
const OfferSllider = () => {
    const [offerSlider, setOfferSlider] = useState(false)
    setTimeout(()=>{setOfferSlider(!offerSlider)},5000)
    return ( 
        <div className="offerSlider">
           
           { offerSlider && <img src="../img/images (4).jpeg" alt="offer slide" key="imgOS1" />}
           {!offerSlider && <img src="../img/images (5).jpeg" alt="offer slide"  key="imgOS2"/>}
        </div>
     );
}
 
export default OfferSllider;