import axios from "axios";
import { useEffect, useState, useRef, useSearchParam } from "react";
import React, { BrowserRouter } from "react";
import "./index.css";
import SearchBar from "./components/searchBar";

import { Main } from "./main";

function App() {

  const [serdata, setserdata] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [subval, setsubval] = useState("");
  const [open, setOpen] = useState(false);

  
 const changeHandler = async (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
  setOpen(true);
    try{
      let a = await axios.get(`https://api.github.com/search/users?q=${e.target.value}`);
        setserdata(a.data.items)
             serdata.map((val) => {
          // console.log(val.login);
          return <div>{val.login}</div>;
        });
        }
        catch(err)
        {
          console.log(err)
        }
  };

  const getdata = (e, val) => {
    e.preventDefault();
    setOpen(false);
   
    console.log(val)

    setsubval(inputValue);

    setInputValue(val.login);
  };
  const getdata2 = (e) => {
    e.preventDefault();
  

    setOpen(false);
    setsubval(inputValue);
   
  };


  return (
    <>
      <div className="search">
        <div className="buttonIn">
          
          <SearchBar/>
          <form className="forma" action="">
            <input
              id="one"
              type="text"
              placeholder="Serach GitHub UserName..."
              name="inputValue"
              onChange={changeHandler}
              value={inputValue}
            />
            <button className="sub-btn" onClick={getdata2}>
              submit
            </button>
          </form>

          {inputValue.length > 0 && open ? (
            <div className="box">
              {open && (
                <div className="btn">
                  {serdata.map((val, index) => {
                    return (
                      <button
                        key={index}
                        type="submit"
                        className="serdata"
                        onClick={(e)=>getdata(e, val)}
                        value={val?.login}
                      >
                        {val.login}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ) : (
            console.log("error occuring here")
          )}

          <div>
            {subval.length > 0 && !open ? (
              <Main input={`${inputValue}`} />
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
