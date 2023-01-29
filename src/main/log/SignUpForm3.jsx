import{motion} from "framer-motion"
const SignUpForm3 = () => {
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
            <select>
               <option value="country">nigeria</option>
               <option value="country">south-africa</option>
               <option value="country">unganda</option>
               <option value="country">zambia</option>
            </select>            
            <select>
               <option value="state">lagos</option>
               <option value="state">abuja</option>
               <option value="state">kano</option>
               <option value="state">ilorin</option>
               <option value="state">katsina</option>
               <option value="state">gombe</option>
            </select>
            <textarea 
            placeholder="input address"
            name="address" 
            id="address" 
            cols="30" 
            rows="10"/>
            </form>
        </motion.section>
     );
}
 
export default SignUpForm3;