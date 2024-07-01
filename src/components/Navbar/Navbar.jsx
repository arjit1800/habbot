import './Navbar.css';
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className="container-xxl">
          <a className="navbar-brand" href="#">
            <img src="images/logo.png" alt="habbot logo" className="img-fluid" width={"180px"}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" aria-current="page" href="#">
                Find Suppliers
              </a>
              <a className="nav-link" href="#">
                Find Service Tags <FaChevronDown className='arrow-down-icon'/>
              </a>
              <a href="" className="btn btn-outline-success fw-medium ms-lg-2">Login/SignUp</a>
            </div>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  