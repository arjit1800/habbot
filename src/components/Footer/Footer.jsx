import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
        <div className="container-xxl footer-border py-3">
            <div className="row gy-4">
                <div className="col-md-2">
                    <img src="images/footer-logo.png" alt="" className="img-fluid mt-3" width={"200px"}/>
                    <p className="text-white fw-light ms-3 mt-2">&copy; R Singhania</p>
                </div>
                <div className="col-md-2">
                    <h6 className="text-white fw-medium">Company</h6>
                    <ul className="footer-links p-0">
                        <li><a href="#" className="footer-link">About</a></li>
                        <li><a href="#" className="footer-link">FAQ</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h6 className="text-white fw-medium">Terms</h6>
                    <ul className="footer-links p-0">
                        <li><a href="#" className="footer-link">Data Privacy</a></li>
                        <li><a href="#" className="footer-link">Terms</a></li>
                        <li><a href="#" className="footer-link">Accessibilty</a></li>
                    </ul>
                </div>
                <div className="col-md-2">
                    <h6 className="text-white fw-medium">Related</h6>
                    <ul className="footer-links p-0">
                        <li><a href="#" className="footer-link">Find Buyer</a></li>
                        <li><a href="#" className="footer-link">Feedback</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <div className="w-100 h-100 d-flex justify-content-end align-items-center">
                    <div className="social-links d-flex align-items-center">
                        <a href=""><FaLinkedinIn /></a>
                        <a href=""><FaTwitter /></a>
                        <a href=""><FaFacebookF /></a>
                        <a href=""><FaInstagram /></a>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer