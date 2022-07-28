import styles from '../styles/userDetail.module.css'
// import "../index.css"
import  linkimg from "../images/link.svg"
import  locationimg from "../images/location.svg"
import  twitterimg from "../images/twitter.svg"
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
export const Main = (input) => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [isData, setIsData] = useState(false);

  console.log(typeof input.input);

  useEffect(() => {
     const name = async ()=>{

      try{
        const response = await axios.get(`https://api.github.com/users/${input.input}`)
        //  console.log(response.data)
         setData(response.data);
         setIsData(true);
      }
      catch(err)
      {
        console.log(err)
      }
     }
     name()},[])
 

 
  console.log(data.created_at);
  let newDate = new Date(`${data.created_at}`);
  let joindate = newDate.toUTCString().toString();
 
  return  ( 
    <div className={styles.responsive}>
   { data.created_at!=null && isData? <div className={styles.container}>
      <div className={styles.div}>
        <img className={styles.img}
          src={`https://avatars.githubusercontent.com/u/${data.id}?v=4`}
          alt=""
        />
        <div className={styles.area}>
          <h1>{data.name}</h1>
          <div className={styles.inline}>
            <a href={`https://github.com/${data.login}`}>
              {data.company ? data.company : `@${data.login}`}
            </a>
            <div>Joined : {joindate.substring(5,16)}</div>
          </div>
          <div></div>
          <div style={{ marginTop: "15px" }}>{data.bio?data.bio:"this is user has no bio"}</div>
          <div className={styles.showoff}>
            <div>
              repo
              <div>{data.public_repos}</div>
            </div>
            <div>
              follower
              <div>{data.followers}</div>
            </div>
            <div>
              following
              <div>{data.following}</div>
            </div>
          </div>
          <div className={styles.foot}>
            <div className={styles.footer1}>
              <div className={styles.footer10} style={{ display: "flex" }}>
                <img
                  src={
                    locationimg
                  }
                  alt=""
                  style={{ height: "25px", width: "20px", marginTop: "18px" }}
                />
                <div style={{ marginTop: "7px" }}>
                  {data.location ? data.location : "Not Available"}
                </div>
              </div>
              <div className= {styles.footer10} style={{ display: "flex" }}>
                <img
                  src={
                    twitterimg
                  }
                  alt=""
                  style={{ height: "25px", width: "25px", marginTop: "18px" }}
                />
                <a
                  href={`https://twitter.com/${data.twitter_username}`}
                  style={{ marginTop: "7px" }}
                >
                  {`${
                    data.twitter_username
                      ? data.twitter_username
                      : "Not Avilable"
                  }`}{" "}
                </a>
              </div>
            </div>
            <div className={styles.footer2}>
              <div className={styles.footer20} style={{ display: "flex" }}>
                <img
                  src={linkimg}
                  alt=""
                  style={{ height: "25px", width: "25px", marginTop: "18px" }}
                />

                <a href={data.url} style={{ marginTop: "7px" }}>
                  github blogs
                </a>
              </div>
              <div className={styles.footer20} style={{ display: "flex" }}>
                <img
                  src={
                    "https://devfinder-react-app.herokuapp.com/static/media/building-svgrepo-com.1b440b223a6b44ca5dae3defbfb78450.svg"
                  }
                  alt=""
                  style={{ height: "25px", width: "20px", marginTop: "10px" }}
                />
                <div style={{ marginTop: "7px" }}>Not Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  : <dir></dir>}
  </div>)
};
export default Main;

// avatar_url: "https://avatars.githubusercontent.com/u/4912?v=4"
// bio: "I contribute to open source projects, mostly in Ruby.\r\nPGP: 889C 472F 2DA2 8377"
// blog: "https://sikac.hu"
// company: "@cookpad"
// created_at: "2008-04-04T03:54:15Z"
// email: null
// events_url: "https://api.github.com/users/sikachu/events{/privacy}"
// followers: 383
// followers_url: "https://api.github.com/users/sikachu/followers"
// following: 19
// following_url: "https://api.github.com/users/sikachu/following{/other_user}"
// gists_url: "https://api.github.com/users/sikachu/gists{/gist_id}"
// gravatar_id: ""
// hireable: null
// html_url: "https://github.com/sikachu"
// id: 4912
// location: "Tokyo, Japan"
// login: "sikachu"
// name: "Prem Sichanugrist"
// node_id: "MDQ6VXNlcjQ5MTI="
// organizations_url: "https://api.github.com/users/sikachu/orgs"
// public_gists: 28
// public_repos: 159
// received_events_url: "https://api.github.com/users/sikachu/received_events"
// repos_url: "https://api.github.com/users/sikachu/repos"
// site_admin: false
// starred_url: "https://api.github.com/users/sikachu/starred{/owner}{/repo}"
// subscriptions_url: "https://api.github.com/users/sikachu/subscriptions"
// twitter_username: "sikachu"
// type: "User"
// updated_at: "2022-07-05T15:43:17Z"
// url: "https://api.github.com/users/sikachu"
