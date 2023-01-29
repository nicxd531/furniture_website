import {MdArrowBackIosNew} from "react-icons/md";
import{motion} from "framer-motion"
const LogInForm = (props) => {
    
    return ( 
    <motion.section
        initial={{x:300}}
        animate={{x:0}}
        transition={{duration:0.9,type:"spring", stiffness:70}}
        >
        {/* <form action=""> */}
            <MdArrowBackIosNew  onClick={props.clickFuction} className="arr1 mt-4" size={30}/>
            <h1>login</h1>
            <input 
            className="mb-3"
            type="email"
            placeholder="Email or Username"
            required
            />
            <input 
            className="mb-2"
            type="password"
            placeholder="Password"
            />
            <h3><a>forgot password?</a></h3>
            <button  className="btn btn-secondary mt-4">login</button>
            <h2>new here? <a href="/SignUp">create an account</a></h2>
         {/* </form> */}
    </motion.section>
     );
}
 
export default LogInForm;