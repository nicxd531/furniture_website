import "./LiveChat.css"
import {useRef, useEffect} from "react";
import EmailWindow from "./EmailWindow";
import {GiSplitCross} from "react-icons/gi";
import {useState} from "react";
const LiveChat = (props) => {
   const [loading, setLoading] = useState(true)
    const ref =useRef(null)

    useEffect(() => {
       function handleClickOutside(event) {
        if(ref.current && !ref.current.contains(event.target)){props.toggleFuction()}
        
       }
       document.addEventListener("mousedown",handleClickOutside);
       return()=>{
        document.removeEventListener("mousedown",handleClickOutside);
       };
     
    }, [ref])
    
    return ( 
        <main 
        ref={ref}
        className={`liveChatWindow 
        ${props.visibility ? "lifeChatVisibilityOn" :"lifeChatVisibilityOff "} `}
        >
            <GiSplitCross onClick={()=>props.toggleFuction()} size={25} className="life-chat-window-exit"/>
            <EmailWindow setLoading={setLoading} loading={loading}/>
        </main>
     );
}
 
export default LiveChat;