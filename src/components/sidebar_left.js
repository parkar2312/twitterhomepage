import React from 'react';
import { AiOutlineTwitter } from "react-icons/ai";
import { BsHouseDoorFill } from "react-icons/bs";
import { BsBell } from "react-icons/bs";
import { BsEnvelope } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { BsCardList } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { CgMoreO } from "react-icons/cg";
import { AiOutlineBorderlessTable } from "react-icons/ai";

export default function Sidebarleft() {
    return (
        <div>
            <div className="header-l">
                <h1><AiOutlineTwitter/></h1>
            </div>
           <div className="body-l">
              <a href="url"><BsHouseDoorFill/> Home</a>
              <a href="url"><AiOutlineBorderlessTable/> Explore</a>
              <a href="url"><BsBell/> Notification</a>
              <a href="url"><BsEnvelope/> Messages</a>
              <a href="url"><BsBookmark/> Bookmark</a>
              <a href="url"><BsCardList/> List</a>
              <a href="url"><CgProfile/> Profile</a>
              <a href="url"><CgMoreO/> More</a>
           </div>
           <div className="button-tweet">
               <button className="tweetbutton">Tweet</button>
           </div>
        </div>
    )
}
 