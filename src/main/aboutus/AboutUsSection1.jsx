import{motion} from "framer-motion"
const  AboutUsSection1 = () => {
    return ( 
        <section className="AboutUs-Section1">
            <motion.div
            initial={{x:100}}
            animate={{x:0}}
            transition={{duration:0.7, ease:"easeInOut"}}
            >
                <div>
                    <h1>amazing designs to suite your desires</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolores possimus minima cum vitae beatae amet exercitationem, perspiciatis error officia!</p>
                    <a href="/"><button className="btn btn-outline-primary mt-2" style={{color:'#fff'}}>  homepage</button></a>
                    <a href="/contact"><button className="btn btn-outline-primary ms-3 mt-2" style={{color:'#fff'}}> contact us</button></a>
                </div>
                
            </motion.div>
            <div><img src="../img/living-room-with-yellow-armchair-empty-dark-blue-wall-background-3d-rendering.jpg" alt=""/></div>
        </section>
     );
}
 
export default AboutUsSection1 ;