import {BsInstagram ,BsGithub ,BsTwitter } from "react-icons/bs";
import { BiSupport} from "react-icons/bi";
const Footer = () => {
    return (
        <footer className="footer">        
          <section className="footer-info">
            <div>
              <img src="img/main_logo.png" alt="company logo"/>  
              <h3 className="mb-2">our aim is to deliver quality products</h3>
              <div className="mb-2 iconsF">
                <a><BsInstagram size={25} className="m-2"/></a>
                <a><BsGithub size={25} className="m-2"/></a>
                <a ><BsTwitter size={25} className="m-2"/></a>
                <a ><BiSupport size={25} className="m-2"/></a>
              </div>
            </div>
            <div>
              <h2 className="mb-2">quick links</h2>
              <a href="/"><h3 className="mb-4">Home</h3></a>
              <a href="/products"> <h3 className="mb-4">product</h3></a>
              <a href="/contact"><h3 className="mb-4">contact</h3></a>
            </div>
            <div>
              <h2 className="mb-2">visit us</h2>
              <p className="mb-2"> <span className="addresses">head office:</span><span >Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum veritatis architecto quia itaque officia iste omnis delectus id facilis dolores?</span></p>
              <p className="mb-2"><span className="addresses">branch office:</span><span > Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium rem nihil hic quisquam natus est error earum modi commodi explicabo?</span></p>
            </div>
          </section>
          <section className="copyright">
            <div>naxtinc all rights reserve 2022</div>
            <div>best furniture available for delivery at affordable prices  </div>
          </section>

        </footer>
      );
}
 
export default Footer;
