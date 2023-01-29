import {IoMdArrowDropright} from "react-icons/io";
import{motion} from "framer-motion"
const ProductCategories = () => {
    const scale ={
        hover:{
            scale:1.1
        }
    }
    return ( 
        <div className="homeCat itm">
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Couch</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Chairs</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Bed</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Table</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Night Stand</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Chest Of Draweres</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Coffee Table</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Book Case</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Dinning Table</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Bench</span>
            </motion.a> 
            <motion.a href="/" className="itm"
                variants={scale}
                whileHover="hover"
               >
                <IoMdArrowDropright className="itm"/><span className="itm">Arm Chair</span>
            </motion.a> 
        </div>
     );
}
 
export default ProductCategories;