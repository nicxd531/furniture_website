import "./Log.css"
import SignUpForm1 from "./SignUpForm1";
import {useState} from "react";
import SignUpForm2 from "./SignUpForm2";
import SignUpForm4 from "./SignUpForm4";
import {BiRightArrowAlt,BiLeftArrowAlt} from "react-icons/bi";
import SignUpForm3 from "./SignUpForm3"
import{AnimatePresence} from "framer-motion"
const SignUp = () => {
    const [nextForm, setNextForm] = useState(0)
    const changePositive=()=>{
        setNextForm( nextForm +1)
    }
    const changeNegative=()=>{
        setNextForm(nextForm -1)
    }
    return ( 
        <main className="signIn">
             <section>
                <span>naxtinc</span>
                <span>furnitures</span> 
            </section>
            <section>
                <h1>create an account</h1>
                
                    <div className="progressBar" >
                        <div
                           className="signUpForm1"                         
                        >
                            <div className={`childDiv 
                            ${nextForm ===0 ? "w1" :" "} 
                            ${nextForm ===1 ? "w2" :" "} 
                            ${nextForm ===2 ? "w3" :" "} 
                            ${nextForm ===3 ? "w4" :" "}`}
                            >
                                <em className="dotNumber dotColorg">1</em>
                                <em className={`dotNumber ${nextForm >=1 ? " dotColorg" :"dotColorw "} `}>2</em>
                                <em className={`dotNumber ${nextForm >=2 ? " dotColorg" :" dotColorw"} `}>3</em>
                                <em className={`dotNumber ${nextForm >=3 ? " dotColorg" :"dotColorw "} `}>4</em>
                            </div>
                        </div>
                    </div>
               <AnimatePresence mode="wait">
                    {nextForm===0 ?<SignUpForm1 />: null}            
                    {nextForm===1 ? <SignUpForm2/>:null}               
                    {nextForm===2 ? <SignUpForm3/>:null}
                    {nextForm===3 ? <SignUpForm4/>:null}
                </AnimatePresence>              
                <div className="changeForm">
                    {nextForm==0 ? null : <button  onClick={changeNegative} className=" button2  btn btn-secondary mt-5 mr-2"><BiLeftArrowAlt/>prev</button>}
                    {nextForm===3?null: <button onClick={changePositive} className="button1 btn btn-secondary mt-5">next<BiRightArrowAlt/></button>}
                    {nextForm===3? <button  className="button1 btn btn-secondary mt-5">submit<BiRightArrowAlt/></button>:null}
                </div>
                <h3 className="qt">already have an account?<a href="/logIn"> log in</a></h3>
            </section>
           
        </main>
     );
}
 
export default SignUp;