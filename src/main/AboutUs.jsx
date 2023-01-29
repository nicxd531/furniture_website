import "./aboutus/AboutUs.css"
import AboutUsSection1 from "./aboutus/AboutUsSection1"
import AboutUsSection2 from "./aboutus/AboutUsSection2";
import AboutUsSection3 from "./aboutus/AboutUsSection3";
import AboutUsSection4 from "./aboutus/AboutUsSection4";
import AboutUsSection5 from "./aboutus/AboutUsSection5";
import AboutUsSection6 from "./aboutus/AboutUsSection6";
const AboutUS = () => {
    return ( 
        <main className="aboutUs">
           <AboutUsSection1/>
           <div className="aboutUsFixedWidth">
               <AboutUsSection3/>
               <AboutUsSection2/>
               <AboutUsSection5/>
               <AboutUsSection6/>
           </div>
           <AboutUsSection4/>
        </main>
     );
}
 
export default AboutUS;