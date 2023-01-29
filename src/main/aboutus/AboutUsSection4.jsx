import {useRef, useEffect,useState} from "react";
import {BsInstagram ,BsGithub ,BsTwitter } from "react-icons/bs";
import { BiSupport} from "react-icons/bi";
import{motion} from "framer-motion"
const AboutUsSection4 = () => {
    const myRef= useRef();
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setIsActive(entry.isIntersecting)
        });
        observer.observe(myRef.current)
        console.log('myRef', myRef.current);
    },[]);
    const [isActive, setIsActive] = useState();
    const team =[
        {
            name:"Anthony Akpovire Ogenetega",
            image:"./img/CoDeveloper1.JPG",
            position:"Designer & Web Developer",
            twitter:"http://twitter.com/tonytega_ak",
            github:"",
            portfolio:"http://anthonyakpovire.netlify.app",
            instagram:"",
            about:"Co-founder who always enjoys taking complicated websites & making the users experience simpler .been developing websites since day one (it seem's) "
        },
        {
            name:"Ola Olasunkanmi Abayomi",
            image:"./img/CoDeveloper2.jpg",
            position:"Designer & Web Developer",
            twitter:"https://mobile.twitter.com/ultra_nicx",
            github:"github.com/nicxd531",
            portfolio:"https://olaolasunkanmiportfolio.netlify.app/",
            instagram:"https://www.instagram.com/nicx_ola",
            about:"Co-founder who always enjoys taking complicated websites & making the users experience simpler .been developing websites since day one (it seem's) "
        }
    ]

    return ( 
        <section className="AboutUs-Section4">
            <h1 >meet the team</h1>
            <div >
                {team.map((main,index)=>{
                    return(
                        
                        <motion.div
                        initial={index ===0  ?{x:-300,type:''}:{x:300,type:''} }
                        animate={isActive ?{x:0}:{type:''} }
                        transition={{duration:0.7}}
                        key={index}
                        >
                            <div><img src={main.image} alt="team image"/></div>
                            <h2 ref={myRef}>{main.name}</h2>
                            <h4>{main.position}</h4>
                            <div>
                                <a href={main.instagram}><BsInstagram size={25} className="m-1"/></a>
                                <a href={main.github}><BsGithub size={25} className="m-1"/></a>
                                <a href={main.twitter}><BsTwitter size={25} className="m-1"/></a>
                                <a href={main.portfolio}><BiSupport size={25} className="m-1"/></a>
                            </div>
                            <p >{main.about}</p>
                            <h3>co. designer</h3>
                         </ motion.div >
                    )
                })}

            </div>

        </section>
     );
}
 
export default AboutUsSection4;