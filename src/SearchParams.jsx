import { useState } from "react";
import { Link } from "react-router-dom";

function SearchParams() {
  const [location, setLocation] = useState("");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            type="text"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      <Link to={`/details/1`}>
        <h4>Go to main</h4>
      </Link>
    </div>
  );
}

export default SearchParams;
