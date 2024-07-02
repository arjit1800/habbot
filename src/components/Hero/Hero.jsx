import SearchPanel from "../SearchPanel/SearchPanel"

const Hero = () => {
  return (
    <section className="hero-section">
        <div className="container-xxl h-100 d-flex flex-column align-items-center justify-content-center">
            <h1 className="text-white text-capitalize text-center fw-bold">Are you a supplier?</h1>
            <h1 className="text-white text-capitalize text-center fw-normal">Explore matching opportunities.</h1>
            <SearchPanel />
            <div className="d-flex flex-column flex-md-row align-items-center mt-md-5 mt-3">
            <h6 className="text-white text-capitalize fw-bold mt-2">Are you a buyer?</h6>
            <a href="" className="text-white fw-light ms-2 text-center">Click here if you are looking to post a requirements</a>
            </div>
        </div>
    </section>
  )
}

export default Hero