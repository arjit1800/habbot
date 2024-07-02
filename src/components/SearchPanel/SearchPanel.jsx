import { GiSuitcase } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const SearchPanel = () => {
  return (
    <div className="search-panel d-md-flex justify-content-center">
        <form action="" className="d-md-flex align-items-center gap-2">
            <div className="form-group position-relative">
                <GiSuitcase className="input-icon"/>
                <input type="text" className="form-control" placeholder="Search your required service here"/>
            </div>
            <div className="form-group position-relative mt-md-0 mt-2">
                <FaLocationDot className="input-icon"/>
                <input type="text" className="form-control" placeholder="Search your desired location here"/>
            </div>
            <button className="btn btn-success mt-md-0 mt-2">Search</button>
        </form>
    </div>
  )
}

export default SearchPanel