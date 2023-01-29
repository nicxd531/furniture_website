import {HiOutlineChevronDoubleLeft , HiOutlineChevronDoubleRight} from "react-icons/hi";
import{motion} from "framer-motion"
import Ratings from "../others/Ratings";
const HomeSection3 = () => {
    
    const slideLeft =()=>{
        var slider= document.getElementById('slider3')
        slider.scrollLeft=slider.scrollLeft -500
    }
    const slideRight =()=>{
        var slider= document.getElementById('slider3')
        slider.scrollLeft=slider.scrollLeft +500
    }
    const images=[ '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg',
                    '../img/mimg6.jpg'
                 
                   
]

    return ( 
        <section className="horSlider fixedWidth-Homesection homeSection3">
            <h1>LATEST PRODUCTS</h1>
            <div className="cover">
                <div  className="rBtn homeSection3-btn-left" onClick={slideLeft}>
                    <HiOutlineChevronDoubleLeft size={25}/>
                </div>
                <div id= "slider3" className="scroll-images">
                
                    {images.map((each,index)=>{
                        return(<motion.section className="homeSection3-child" whileHover={{scale:1.1}} key={index}> 
                                    <div ><img src={each}alt="categories"/><div><h3>300$</h3></div></div>
                                    <div>
                                        <h3>executive room</h3>
                                        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.<br/> Nobis, enim!</p>
                                    </div>
                                    <Ratings key="rate"/>
                                </motion.section>
                        )  
                    })}
                </div>
                <div className="rBtn homeSection3-btn-right" onClick={slideRight}>
                 <HiOutlineChevronDoubleRight  size={25} />
                </div>
            </div>
            <div >
            
            </div>
            
        </section>
     );
}
 
export default HomeSection3;