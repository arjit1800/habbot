import { FaCheckCircle } from "react-icons/fa";

const BannerTabs = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="home-tab"
            data-bs-toggle="tab"
            data-bs-target="#home-tab-pane"
            type="button"
            role="tab"
            aria-controls="home-tab-pane"
            aria-selected="true"
          >
            Buyer
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#profile-tab-pane"
            type="button"
            role="tab"
            aria-controls="profile-tab-pane"
            aria-selected="false"
          >
            Supplier
          </button>
        </li>
      </ul>
      <div className="tab-content mt-4" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home-tab-pane"
          role="tabpanel"
          aria-labelledby="home-tab"
          tabindex="0"
        >
          <div className="point d-flex align-items-center">
          <FaCheckCircle className="text-success check-icon"/> 
          <p className="text-white">Post you requirements</p>
          </div>
          <div className="point d-flex align-items-center">
          <FaCheckCircle className="text-success check-icon"/> 
          <p className="text-white">Sit back for multiple suppliers to contact you</p>
          </div>
          <div className="point d-flex align-items-center">
          <FaCheckCircle className="text-success check-icon"/> 
          <p className="text-white">Choose among the suppliers based among the ratings and reviews</p>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="profile-tab-pane"
          role="tabpanel"
          aria-labelledby="profile-tab"
          tabindex="0"
        >
          <div className="point d-flex align-items-center">
          <FaCheckCircle className="text-success check-icon"/> 
          <p className="text-white">Sit back for multiple suppliers to contact you</p>
          </div>
          <div className="point d-flex align-items-center">
          <FaCheckCircle className="text-success check-icon"/> 
          <p className="text-white">Choose among the suppliers based among the ratings and reviews</p>
          </div>
          <div className="point d-flex align-items-center">
          <FaCheckCircle className="text-success check-icon"/> 
          <p className="text-white">Post you requirements</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerTabs;
