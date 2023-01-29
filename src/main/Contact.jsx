import './Contact.css'
// import { motion } from 'framer-motion';
// import { Gradient } from '@mui/icons-material';
const Contact = () => {
    return ( 
        <section className='contact_us_container'>
            <div className='left_box'>
                <p className='left_header' >Get In Touch</p>
                <a className='contact_link' href="mailto:email@email.com">email@email.com</a>
                <a className='contact_link' href="tel:111 222 333">111-222-333</a>
                <p>107 a street,a state,a country 1001</p>
            </div>
            <form className='contact_form'>
                <input className='input_field' type='text' placeholder='Your Name'/>
                <input className='input_field' type='email' placeholder='email@email.com'/>
                <textarea className='input_field textarea_field' placeholder='tell us about it'/>
                <button 
                
                className='input_field submit_button' type='submit'>Send</button>
            </form>
        </section>
     );
}
 
export default Contact;