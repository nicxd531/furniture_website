// import { Link } from "react-router-dom"
import { SelectedCategory } from "./SelectedCategory"
import { useContext,useState } from "react"
import { DataContext } from "..//../App"
import { useEffect} from "react"
import ProductCategories from "../home/ProductCategories"
import {HiMenu} from "react-icons/hi";
import {GiSplitCross} from "react-icons/gi";

export const AllProduct =({handleAddToCart})=>{
  const [toggleCategories, setToggleCategories] = useState(false)
  const handleToggleCategories=()=>{
    setToggleCategories(!toggleCategories)
  }
    const data = useContext(DataContext);
    // console.log(data)
    let dataArray;

    data ? dataArray = Object.keys(data) : dataArray = null;
  const [SelectedCategoryData,setSelectedCategoryData] = useState([]);  
  useEffect(
    ()=>{
        if (data != null){setSelectedCategoryData(data.Couch) }
    },[data]
  )
 
 const handleProductCategory = (key)=>{
        setSelectedCategoryData(data[key])
 }

    return(
        <>
        <div className="main-Product-Categories">
          {toggleCategories ? <GiSplitCross onClick={handleToggleCategories} size={40}/> :<HiMenu onClick={handleToggleCategories} size={40}/>}
          <span  className={toggleCategories?"categories-on":"categories-off" }>
          <ProductCategories/>
          </span>
        </div>
        {<SelectedCategory categoryData={SelectedCategoryData} handleAddToCart={handleAddToCart}/>}
        </>
    )
}