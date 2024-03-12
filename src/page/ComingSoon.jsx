import '../App'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

const ComingSoon = () => {
    return (
        <div className='coming'>
            <div className='coming__container'>
              <h4>The Count Down is Finished</h4>    
              <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br/> Laudantium ipsa eveniet nostrum architecto amet excepturi.</h3> 
              <div className='coming__icons'>
                 <span><FaFacebookF/></span>
                 <span><FaInstagramSquare/></span>
                 <span><FaTwitter/></span>
                 <span><FaTelegram/></span>
              </div>
              <p>Copyright @2020.Designed & Developed by <span>Themefisher</span></p>
            </div>
        </div>
    );
};

export default ComingSoon;