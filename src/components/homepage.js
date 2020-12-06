import React from 'react';
import { CgProfile } from "react-icons/cg";
import { BsCardImage } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";
import { VscSmiley } from "react-icons/vsc";
import { GrDocumentText } from "react-icons/gr";

export default function Homepage() {
    return (
        <div>
           <div className="tweethome">
               <div className="home"><h4>Home</h4></div>
               <div className="tweetinput">
                <h1><CgProfile/> </h1>  <input type="text" placeholder="What's happening?"/>
                <div className="tweetbuin">
                    <button className="tweetbutton1">Tweet</button>
                </div>
               </div>
           </div>
           <h1>TWEETS</h1>
           <h1>.</h1>
           <h1>.</h1>
           <h1>.</h1>
           <h1>.</h1>
           <h1>.</h1>
        </div>
    )
}
