// import "../index.css"
import styles from '../styles/inputBar.module.css'
import axios from "axios";
import debounce from "lodash.debounce";
import React, { useCallback } from 'react';
import { createSearchParams, useSearchParams } from "react-router-dom";
// import { useSearchParams } from "react-router-dom";

 import { useEffect, useState, useRef, useSearchParam } from "react";

const InputBar=(props)=>{

  const url = document.location.search;
  // console.log(url)
  //  let urlchecking = new URLSearchParams(url);
  //   let check = urlchecking.get("q");
  //   console.log(check);

  const [SerachList , setSearchList] = useSearchParams();
 
  const [searchParams, setSearchParams] = useSearchParams();
    const getdata2 = (e) => {
    e.preventDefault();
     props.setOpen(false);
     searchParams.set("li",false)
     
    

  };

  useEffect(async()=>{
    console.log("rendering")
    const value = searchParams.get("link");
    const li = searchParams.get("li");
    console.log(typeof(li))
    if(li==="true")
    {
    props.setOpen(true)
    }
    props.setInputValue(value??"")

    if(value.length>0 && li==="true"){
   
      try {
      let a =  await axios.get(`https://api.github.com/search/users?q=${value}`);
       props.setserdata(a.data.items)
       props.serdata.map((val) => {
        console.log("hitted")
        // console.log(val.login);
        return <div>{val.login}</div>;
      });
    }
    catch (err) {
      console.log(err)
    }
  }

  },[])
  useEffect(()=>{
      setSearchParams(
                  createSearchParams({ "link": props.inputValue,"li": props.open })
                  
                );
     
  },[props.inputValue])
 

  
const changeHandler =useCallback ( async (e) => {

    e.preventDefault();
        console.log(e.target.value)
     props.setInputValue(e.target.value);
      props.setOpen(true);

      try {
      let a = await axios.get(`https://api.github.com/search/users?q=${e.target.value}`);
       props.setserdata(a.data.items)
       props.serdata.map((val) => {
        console.log("hitted")
        // console.log(val.login);
        return <div>{val.login}</div>;
      });
    }
    catch (err) {
      console.log("403")
    }
  },[props]);

 

    return(
        <>
       <form className={styles.forma} action="">
            <input
              id={styles.one}
              type="text"
              placeholder="Serach GitHub UserName..."
              name="inputValue"
              onChange={changeHandler}
              value={ props.inputValue}
            />
            <button className={styles.subbtn} onClick={getdata2}>
              submit
            </button>
    </form>
    </>
    )
}
export default InputBar;