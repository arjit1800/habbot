import { GiSuitcase } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";

const SearchPanel = () => {
  return (
    <div className="search-panel">
        <form action="" className="d-flex align-items-center gap-2">
            <div className="form-group position-relative">
                <GiSuitcase className="input-icon"/>
                <input type="text" className="form-control" placeholder="Search your required service here"/>
            </div>
            <div className="form-group position-relative">
                <FaLocationDot className="input-icon"/>
                <input type="text" className="form-control" placeholder="Search your desired location here"/>
            </div>
            <button className="btn btn-success">Search</button>
        </form>
    </div>
  )
}

export default SearchPanel