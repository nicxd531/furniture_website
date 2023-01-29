import{motion} from "framer-motion"
const SignUpForm2 = () => {
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
               <input 
               className="input"
               type="number"
               required
               placeholder="phone number"
               /> 
               <input 
               className="input"
               type="date"
               required
               placeholder="Date Of Birth"
               /> 
            </form>
        </motion.section>
     );
}
 
export default SignUpForm2;