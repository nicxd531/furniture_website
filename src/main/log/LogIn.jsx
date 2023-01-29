import "./Log.css"
import{motion} from "framer-motion"
import LogInForm from "./LogInForm";
import {useState} from "react";
import {FaArrowRight} from "react-icons/fa";
const LogIn = () => {
    const [nextForm, setNextForm] = useState(false)
    const handleForm=()=>{
        setNextForm(!nextForm)
    };
    return ( 
        <main className="logIn">
            <section>
                <span>naxtinc  </span>
                <span>furnitures</span> 
            </section>
            {nextForm ? <LogInForm clickFuction={handleForm}/>:               
            <motion.section
                initial={{x:300}}
                animate={{x:0}}
                transition={{duration:0.9 ,type:"spring", stiffness:70}}
                exit={{x:1000}}
            >
                <main className="loginPage">
                    <h1>gain access to some of the </h1>
                    <h1>premium furnitures available.</h1>
                    <h3>for free</h3>
                    <img src="../img/—Pngtree—c4d sofa furniture fabric_4426194.png" alt=""/>
                    <button onClick={handleForm} className="btn btn-secondary mt-4">login <FaArrowRight/></button>
                </main>
            </motion.section>
             
               }
            
            
        </main>
     );
}
 
export default LogIn;
