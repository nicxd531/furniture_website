import {useState} from "react";
import{motion,AnimatePresence} from "framer-motion"
const MainImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const image =[
        '../img/mimg1.jpg',
        '../img/mimg2.jpeg',
        '../img/mimg3.jpg',
        '../img/mimg4.jpg',
        '../img/mimg5.jpg',
        '../img/mimg6.jpg'
    ]
    setTimeout(()=>{
         setCurrentSlide(currentSlide=== 5? 0 : currentSlide +1)
    },6000)
    return ( 
        <div className="mainSlider" key="Mslider">
         {  image.map((each ,index)=>{
            return(
                <div key={index}>   
                
                    {index === currentSlide && ( <motion.img src={each} key={index} alt="main slider"
                    initial={{scale:0.9, opacity:0.5}}      
                    animate={{scale:1, opacity:1}} 
                    transition={{duration:0.5}}
                    exit={{opacity:0.5 ,scale:0.9}}
                    />)}                  
               </div>
                )
            }
            )}
            
        </div>
     );
}
 
export default MainImageSlider;