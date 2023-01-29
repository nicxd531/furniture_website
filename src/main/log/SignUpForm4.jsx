import{motion} from "framer-motion"
import {useState} from "react";
import {RiEyeLine, RiEyeCloseLine} from "react-icons/ri";
const SignUpForm4 = () => {
const [changeVisibility, setChangeVisibility] = useState(0)
    const all ={
        exit:{
            x:"-1400",
            transition:{
                ease:"easeOut",

            }
        }
    }
    return ( 
        
        <motion.section 
        className="signUpForm1"
        variants={all}
        initial={{x:140}}
        animate={{x:0}}
        transition={{duration: 0.5, type:'spring', stiffness: 90}}
        exit="exit"
        >
            <form action="">
                <div className="eye1">
                <input 
                className="input"
                type={changeVisibility===1? "text":"password"}
                name="password"
                required
                placeholder="password"
                autoComplete="new-password"
                /> 
                {changeVisibility===1 ?<RiEyeCloseLine className="eyeI" onClick={()=>{setChangeVisibility(0)}}/>:<RiEyeLine className="eyeI" onClick={()=>{setChangeVisibility(1)}}/>}
                </div>
                <div className="eye2">
                <input 
                className="input"
                type={changeVisibility===2? "text":"password"}
                name="password"
                required
                placeholder="confirm password"
                autoComplete="new-password"
               /> 
               {changeVisibility===2 ?<RiEyeCloseLine className="eyeI" onClick={()=>{setChangeVisibility(0)}}/>:<RiEyeLine className="eyeI" onClick={()=>{setChangeVisibility(2)}}/>}
               </div>
               </form>
        </motion.section>
     );
}
 
export default SignUpForm4;