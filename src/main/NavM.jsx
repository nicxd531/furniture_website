import {IoLogInOutline, IoLogIn} from "react-icons/io5";
import {IoMdHelpCircle, IoMdHelpCircleOutline} from "react-icons/io";
import {HiOutlineUserAdd, HiUserAdd} from "react-icons/hi";
import {BsChatLeftDots ,BsChatLeftDotsFill} from "react-icons/bs";
import {useState, useRef, useEffect} from "react";
import{motion} from "framer-motion"
const NavM = (props) => {
    const [login, setLogin] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const [help, setHelp] = useState(false)
    const [chat, setchat] = useState(false)

    const ref =useRef(null)

    useEffect(() => {
       function handleClickOutside(event) {
        if(ref.current && !ref.current.contains(event.target)){props.OutsideClick()}
        
       }
       document.addEventListener("mousedown",handleClickOutside);
       return()=>{
        document.removeEventListener("mousedown",handleClickOutside);
       };
     
    }, [ref])
   
    return ( 
       
            <motion.div className="miniNav"
            ref={ref}
            initial={{y:-180}}
            animate={{y:0}}
            transition={{duration: 0.5, type:'spring', stiffness: 100}}
            exit={{y:-400}}      
            >
                <motion.a href="/logIn" className="itm"
                onMouseEnter={()=> {setLogin(!login)}}
                onMouseLeave={()=> {setLogin(!login)}}
                whileHover={{
                    scale:1.1
                }}
                >{login? <IoLogIn className="itm"/> :<IoLogInOutline className="itm"/>}<span className="itm">log in</span>
                </motion.a>
                <motion.a href="/SignUp" className="itm"
                onMouseEnter={()=> {setSignUp(!signUp)}}
                onMouseLeave={()=> {setSignUp(!signUp)}}
                whileHover={{
                    scale:1.1
                }}
                >{signUp ? <HiUserAdd className="itm"/> :<HiOutlineUserAdd className="itm"/>}<span className="itm">sign up</span>
                </motion.a>
                <motion.a href="/contact" className="itm"
                onMouseEnter={()=> {setHelp(!help)}}
                onMouseLeave={()=> {setHelp(!help)}}
                whileHover={{
                    scale:1.1
                }}
                >{help? <IoMdHelpCircle className="itm"/> :<IoMdHelpCircleOutline className="itm"/>}<span className="itm">help</span>
                </motion.a>
                <motion.a 
                    onMouseEnter={()=> {setchat(!chat)}}
                    onMouseLeave={()=> {setchat(!chat)}}
                    whileHover={{
                        scale:1.1,
                        boxShadow:"0px 0px 8px rgb(255,255,255)"
                    }}
                    onClick={props.clickFunction}
                    >{chat? <BsChatLeftDotsFill className="itm"/> :<BsChatLeftDots className="itm"/>}<span className="itm">live chat</span>
                </motion.a>
            </motion.div>
        
     );
}
 
export default NavM;