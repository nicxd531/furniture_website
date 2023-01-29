import{motion} from "framer-motion"
const SignUpForm1 = () => {
    const all ={
        exit:{
            x:"-140px",
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
               <input 
               className="input"
               type="email"
               required
               placeholder="email"
               /> 
               <input 
               className="input"
               type="text"
               required
               placeholder="username"
               /> 
        </motion.section>
     );
}
 
export default SignUpForm1;