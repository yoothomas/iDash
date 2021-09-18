import React, { useState } from "react";
import "./Search.css";
import SearchButton from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
// import {useHistory} from "react-router-dom";
import { IconButton } from "@material-ui/core";

function Search() {
  const [input, setInput] = useState("");
  // const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    const q = input; 
    const google = 'https://www.google.com/search?q=';
    const url = google + q;
    const win = window.open(url, '_blank');
    win.focus();
    // history.push("/search")
  };

  return (
    <form className="search" onSubmit={search}>
      <div className="search__input">
        <IconButton type="submit" variant="contained" className="search__inputIcon" 
            onClick={search}>
            <SearchButton></SearchButton>
        </IconButton>
        <input type="search" id="query" placeholder="Search Google" 
            value={input} onChange={(e) => {setInput(e.target.value);}} />
        {/*<IconButton><MicIcon /></IconButton>*/}
        {/* need to make the search icon button smaller*/}
        {/* need to add Google's autocomplete*/}
        {/* need to add voice search feature*/}
      </div>
    </form>
  );
}

export default Search;