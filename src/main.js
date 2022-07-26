// import './index.css'
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
  // useEffect(() => { 
  //   axios
  //     .get(`https://api.github.com/users/${input.input}`)
  //     .then((response) => {
  //       setData(response.data);
  //       setIsData(true);
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       setIsData(true);
  //       console.log(error);
  //     });
  // }, []);

 
  console.log(data.created_at);
  let newDate = new Date(`${data.created_at}`);
  let joindate = newDate.toUTCString().toString();
 
  return  (  data.created_at!=null && isData? <div className="container">
      <div className="div">
        <img
          src={`https://avatars.githubusercontent.com/u/${data.id}?v=4`}
          alt=""
        />
        <div className="area">
          <h1>{data.name}</h1>
          <div className="inline">
            <a href={`https://github.com/${data.login}`}>
              {data.company ? data.company : `@${data.login}`}
            </a>
            <div>Joined : {joindate.substring(5,16)}</div>
          </div>
          <div style={{ marginTop: "15px" }}>{data.bio}</div>
          <div className="showoff">
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
          <div className="foot">
            <div className="footer1">
              <div className="footer10" style={{ display: "flex" }}>
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  alt=""
                  style={{ height: "25px", width: "15px", marginTop: "5px" }}
                />
                <div style={{ marginTop: "7px" }}>
                  {data.location ? data.location : "Not Available"}
                </div>
              </div>
              <div className="footer10" style={{ display: "flex" }}>
                <img
                  src={
                    "data:image/png;base64,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"
                  }
                  alt=""
                  style={{ height: "25px", width: "15px", marginTop: "5px" }}
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
            <div className="footer2">
              <div className="footer20" style={{ display: "flex" }}>
                <img
                  src={
                    "https://toppng.com/uploads/preview/link-icon-gray-grey-link-icon-11562963096unfmtzimkj.png"
                  }
                  alt=""
                  style={{ height: "25px", width: "15px", marginTop: "5px" }}
                />

                <a href={data.url} style={{ marginTop: "7px" }}>
                  {data.url}
                </a>
              </div>
              <div className="footer20" style={{ display: "flex" }}>
                <img
                  src={
                    "https://devfinder-react-app.herokuapp.com/static/media/building-svgrepo-com.1b440b223a6b44ca5dae3defbfb78450.svg"
                  }
                  alt=""
                  style={{ height: "25px", width: "15px", marginTop: "5px" }}
                />
                <div style={{ marginTop: "7px" }}>Not Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  : <dir></dir>
  )
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
