import React from 'react';
import "./front.css";
import photo from "./images/photo1.jpg";
import { TwitterTimelineEmbed } from 'react-twitter-embed';

class front extends React.Component{

  render(){
    return(
      <div className = "front_main">
        <div className= "slider">
          <img src= {photo}/>
        </div>
        <div className = "information">information
        </div>
        <div className = "news-box">
          <iframe src = "https://morozemi.ws.hosei.ac.jp/whatsnew.html" className = "info" ></iframe>
          <TwitterTimelineEmbed
              sourceType="https://twitter.com/morozemi_hosei?ref_src=twsrc%5Etfw"
              screenName="morozemi_hosei"
              theme="light"
              options={{ width: 300, height: 800 }}
            />

         
          
          {/* <a class="twitter-timeline" href="https://twitter.com/morozemi_hosei?ref_src=twsrc%5Etfw">Tweets by morozemi_hosei</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> */}

        </div>
      </div>
    )
  }

}

export default front; 
