import MainImageSlider from "./MainImageSlider";
import OfferSllider from "./OfferSlider";
import ProductCategories from "./ProductCategories";

const HomeSection1 = () => {
    
    return ( 
      <>
        <section className="homeSection1">
          <div><ProductCategories/></div>
          <div><MainImageSlider/></div>
          <div><OfferSllider/></div>           
        </section>
      </>
   );
}
 
export default HomeSection1;