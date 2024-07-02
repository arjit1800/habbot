import { MdOutlineArrowRightAlt } from "react-icons/md";

const About = () => {
  return (
    <section className="about-section section-padding">
      <div className="container-xxl">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="pe-lg-5">
              <h2 className="fw-bold">
                Ready to dive into <span>Habot?</span>
              </h2>
              <p className="text-black my-4">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </p>
              <a href="" className="btn btn-success about-btn">
                Signup Today!{" "}
                <MdOutlineArrowRightAlt className="ms-2 arrow-icon" />
              </a>
            </div>
          </div>
          <div className="col-md-6">
            <div className="blocks">
              <div className="block">
                <span>Abu Dhabi</span>
              </div>
              <div className="block">
                <span>Dubai</span>
              </div>
              <div className="block">
                <span>Sharjah & Ajman</span>
              </div>
              <div className="block">
                <span>Fujairah</span>
              </div>
              <div className="block">
                <span>Ras Al Khaimah</span>
              </div>
              <div className="block">
                <span>Umm Al Quwain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
