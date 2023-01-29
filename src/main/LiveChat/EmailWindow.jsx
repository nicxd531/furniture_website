import {useState} from "react";
import Loading1 from "../loading files/Loading1";
const EmailWindow = (props) => {
    const [email, setEmail] = useState("")
    

    const handleSubmit= (event)=>{
        event.preventDefault();
        props.setLoading(false)
        console.log("sending email",email)

    }
    setTimeout( ()=>{
        props.setLoading(true)
       
    },5000)
   
    return ( 
        <section className="email-window">
            
            <div>
                <img src="../img/coDeveloper2.jpg" alt="image"/>
            </div>
            <div>
                <span>welcome to <br/> support</span>
            </div>
            <form 
            onSubmit={e=>handleSubmit(e)}
            >
                <input 
                type="email" 
                name="email" 
                id="email_window_email"
                required
                placeholder=" your email"
                onChange={e=>setEmail(e.target.value)}
                />
            </form >
            <div className="mt-4">
                <span>
                    enter your email to <br/>get started
                </span>
            </div>
            {props.loading ? null : <Loading1/>}

        </section>
     );
}
 
export default EmailWindow;