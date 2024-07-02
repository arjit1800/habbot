import { FaYoutube } from "react-icons/fa";
import BannerTabs from "../BannerTabs/BannerTabs";

const VideoBanner = () => {
  return (
    <section className="banner section-padding">
      <div className="container-xxl">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="video-wrapper d-flex w-100 h-100 position-relative">
              <img
                src="images/video-bg.jpeg"
                alt=""
                className="img-fluid object-fit-cover"
              />
              <FaYoutube className="yt-icon" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="banner-content ms-md-5">
              <BannerTabs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
