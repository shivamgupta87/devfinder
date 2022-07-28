import { useCallback, useEffect, useState } from "react";
import React from "react";

import {
  BrowserRouter as Router, useSearchParams,


} from "react-router-dom";
import "./index.css";
import SearchBar from "./components/header";
import { Main } from "./components/userDetail";
import InputBar from "./components/inputBar";
import SearchList from "./components/searchList";
function App() {
  // const navigater = useNavigate();
  const [serdata, setserdata] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);



  const getdata = useCallback((e, val) => {
    e.preventDefault();
    setOpen(false);
    setInputValue(val.login);
  }, [inputValue, open]);



  return (
    <Router>
      <div className="search">
        <div className="buttonIn">


          <SearchBar />
          <InputBar setserdata={setserdata} setInputValue={setInputValue} setOpen={setOpen} serdata={serdata} inputValue={inputValue} open={open} />
          <SearchList serdata={serdata} inputvalue={inputValue} open={open} getdata={getdata} />
          <div>

            {inputValue.length > 0 && !open ? (<Main input={inputValue} />) : null}
          </div>
        </div>

      </div >
    </Router>
  );
}

export default App;
