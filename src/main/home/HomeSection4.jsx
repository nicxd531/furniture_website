import {HiOutlineChevronDoubleLeft , HiOutlineChevronDoubleRight} from "react-icons/hi";
import{motion} from "framer-motion"
const HomeSection4 = () => {
    const slideLeft =()=>{
        var slider= document.getElementById('slider2')
        slider.scrollLeft=slider.scrollLeft -500
    }
    const slideRight =()=>{
        var slider= document.getElementById('slider2')
        slider.scrollLeft=slider.scrollLeft +500
    }
    const images=['../img/brandsImg1.png',
                    '../img/brandsImg2.jpeg',
                    '../img/brandsImg3.jpeg',
                    '../img/brandsImg4.jpeg',
                    '../img/brandsImg5.jpeg',
                    '../img/brandsImg6.jpeg',
                    '../img/brandsImg7.jpeg',
                    '../img/brandsImg8.jpeg',
                    '../img/brandsImg9.jpeg',
                    '../img/brandsImg10.jpeg',
                    '../img/brandsImg11.png',


     ]


    return ( 
        <section className=" horSlider homeSection4 fixedWidth-Homesection ">
            <h1>BRANDS</h1>
            <div className="cover">
                <div  className="rBtn homeSection4-btn-left" onClick={slideLeft}>
                    <HiOutlineChevronDoubleLeft size={25}/>
                </div>
                <div id= "slider2" className="scroll-images">
                    {images.map((each,index)=>{
                            return(
                                <motion.div key={index} whileHover={{scale:1.1}} className="child"><img src={each}alt="categories"/></motion.div>
                            )
                        })}                                                                      
                </div>
                <div   className="rBtn homeSection4-btn-right" onClick={slideRight}>
                    <HiOutlineChevronDoubleRight size={25}/>
                </div>
            </div>
            <div >
                
            </div>
        </section>
     );
}
 
export default HomeSection4;