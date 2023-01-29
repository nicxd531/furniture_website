import {HiOutlineChevronDoubleLeft , HiOutlineChevronDoubleRight} from "react-icons/hi";
import{motion} from "framer-motion"
const HomeSection2 = () => {
    const slideLeft =()=>{
        var slider= document.getElementById('slider')
        slider.scrollLeft=slider.scrollLeft -500
    }
    const slideRight =()=>{
        var slider= document.getElementById('slider')
        slider.scrollLeft=slider.scrollLeft +500
    }
    const images=[ '../img/catImg1.jpeg',
                    '../img/catImg2.jpeg',
                    '../img/catImg3.jpeg',
                    '../img/catImg4.jpeg',
                    '../img/catImg5.jpeg',
                    '../img/catImg6.jpeg',
                    '../img/catImg7.jpeg',
                    '../img/catImg8.jpeg',
                    '../img/catImg9.jpeg',
                    '../img/catImg10.jpeg',
                    '../img/catImg11.jpg',
                    '../img/catImg12.jpg'
]

    return ( 
        <section className="horSlider fixedWidth-Homesection homeSection2">
            <div></div>
            <div className="cover">
                <div  className="rBtn homeSection2-btn-left" onClick={slideLeft}>
                    <HiOutlineChevronDoubleLeft size={25}/>
                </div>
                <div id= "slider" className="scroll-images">
                    {images.map((each,index)=>{
                        return(
                            <motion.div key={index} whileHover={{scale:1.1}} className="child"><img src={each}alt="categories"/></motion.div>

                        )
                    })}   
                </div>
                <div   className="rBtn homeSection2-btn-right" onClick={slideRight}>
                    <HiOutlineChevronDoubleRight size={25}/>
                </div>
            </div>
            <div>
            
            </div>
        </section>
     );
}
 
export default HomeSection2;