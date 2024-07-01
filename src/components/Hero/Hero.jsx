import SearchPanel from "../SearchPanel/SearchPanel"

const Hero = () => {
  return (
    <section className="hero-section">
        <div className="container-xxl h-100 d-flex flex-column align-items-center justify-content-center">
            <h2 className="text-white text-capitalize fw-bold">Are you a supplier?</h2>
            <h2 className="text-white text-capitalize fw-normal">Explore matching opportunities.</h2>
            <SearchPanel />
            <div className="d-flex align-items-center mt-5">
            <h6 className="text-white text-capitalize fw-bold mt-2">Are you a buyer?</h6>
            <a href="" className="text-white fw-light ms-2">Click here if you are looking to post a requirements</a>
            </div>
        </div>
    </section>
  )
}

export default Hero