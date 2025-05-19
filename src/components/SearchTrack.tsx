import { useGetSearchTrackResultQuery } from "../api/apiSlice";
import { useState, useEffect, useRef } from "react";

const SearchTrack = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { data } = useGetSearchTrackResultQuery(query, {
    skip: query === ""
  });

  const filteredResults = (query && data?.slice(0, 5)) || [];

  const handleSearch = () => {
    setQuery("");
    setTimeout(() => {
      setQuery(searchTerm);
    }, 0);
    setSearchTerm("");
  };

  useEffect(() => {
    if (data) {
      setDropdownVisible(true);
    }
  }, [data]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="search-tracks">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          style={{ border: "none", backgroundColor: "var(--bs-gray-400)" }}
          placeholder="Search for a track"
          aria-label="Search tracks"
          aria-describedby="button-addon2"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button
          className="btn btn-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>

      {dropdownVisible && filteredResults.length > 0 && (
        <div className="dropdown" ref={dropdownRef}>
          <ul className="dropdown-menu dropdown-menu-dark show ">
            {filteredResults.map((track: any) => (
              <li key={track.id} className="dropdown-item search-results">
                <a href={track.external_urls.spotify} rel="noreferrer" target="_blank">
                  <img
                    src={track.album.images[0].url}
                    alt={track.album.name}
                    className="track-image"
                  />
                  {track.name}{" "}
                  <small>{track.artists.map((artist: any) => artist.name).join(", ")}</small>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchTrack;
