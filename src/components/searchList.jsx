// import "../index.css"
// import React, { BrowserRouter } from "react";
import styles from '../styles/searchList.module.css'

const SearchList = (props)=>
{
    return (
        <>
        <div>
            {props.inputvalue.length > 0 && props.open ? (
              <div div className={styles.box}>
                {props.open && (
                  <div className={styles.btn}>
                    {props.serdata.map((val, index) => {
                      return (
                        <button
                          key={index}
                          type="submit"
                          className={styles.serdata}
                          onClick={(e) => props.getdata(e, val)}
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
          </div>
        </>
    )
}


export default SearchList;