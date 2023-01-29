import { Link } from "react-router-dom";
import {BsCart, BsCartFill} from "react-icons/bs";
import {HiUser, HiOutlineUser, HiOutlineChevronDoubleDown , HiOutlineChevronDoubleUp,HiOutlineSearch} from "react-icons/hi";
import {useState,useRef,useEffect } from "react";
import NavM from "./NavM";
import{motion,AnimatePresence} from "framer-motion"
import LiveChat from "./LiveChat/LiveChat";
import {HiMenu} from "react-icons/hi";
const  NavBar = () => {
    const [cart, setCart] = useState(false)
    const [user, setUser] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const [search, setSearch] = useState(false)
    const [liveChat, setLiveChat] = useState(false)
    const visible =liveChat
    const [toggleCategories, setToggleCategories] = useState(false)
    const ref =useRef(null)
  const handleToggleCategories=()=>{
    setToggleCategories(!toggleCategories)
  }
    const handleVisibilityOn =()=>{
        setLiveChat(true)
    }
    const handleVisibilityOff =()=>{
        setLiveChat(false)
    }
    const handleOutsideClick = ()=>setDropDown(false)
    useEffect(() => {
        function handleClickOutside(event) {
         if(ref.current && !ref.current.contains(event.target)){setToggleCategories(false),setSearch(false)}
         
        }
        document.addEventListener("mousedown",handleClickOutside);
        return()=>{
         document.removeEventListener("mousedown",handleClickOutside);
        };
      
     }, [ref])

    return ( 
        <nav >
            <div ref={ref} className="navBack">
                <div className="mainImg">
                 <img src="img/main_logo.png" alt="company logo"/>  
                </div>
                <div   className={`navBar ${toggleCategories?"menu-visible":"menu-hidden"}`}>
                    <div className="navLink">       
                        <Link to="/">home</Link>
                        <Link to="/products">product</Link>
                        <Link to="/aboutus">aboutUs</Link>
                        <Link to="/contact">contact</Link>
                    </div>
                    <div className="userItm" >
                        <div className="itm"
                        onMouseEnter={()=>setUser(true)} 
                        onMouseLeave={()=>setUser(false)} 
                        onClick={()=>{setDropDown(!dropDown)}}                       
                        >{user === false ? <HiOutlineUser className="itm" /> : <HiUser className="itm" />} 
                        <span className="itm ">account</span>{dropDown ?<HiOutlineChevronDoubleUp className="itm"/>:<HiOutlineChevronDoubleDown className="itm"/>}
                        </div>
                        <AnimatePresence>
                        {dropDown && <NavM OutsideClick={handleOutsideClick} clickFunction={handleVisibilityOn}/>}
                        </AnimatePresence>
                        <Link className="itm"
                        onMouseEnter={()=>setCart(true)} 
                        onMouseLeave={()=>setCart(false)}                        
                        to="/cart"
                        >{cart === false ? <BsCart className="itm" /> : <BsCartFill className="itm" />}
                        <motion.span className="itm" whileHover={{ scale:1.1}}>Cart</motion.span > </Link>
                    </div>
                    <span className="search-icon" onClick={()=>{setSearch(!search)}}><HiOutlineSearch className="m-2" size={20}/></span> 
                </div>
              <div ref={ref} className={`search ${search? "search-visible":"search-hidden"}` }>
                    <input
                        placeholder="search products ,categories and brand"
                        type="search"
                    /> 
                    <label><HiOutlineSearch/></label>
                </div>
                <HiMenu className="menu" onClick={handleToggleCategories} size={40}/>
                <LiveChat visibility={visible} toggleFuction={handleVisibilityOff}/>
            </div>
        </nav>
     );
}

export default NavBar ;