import React from 'react'
import { FiSearch } from "react-icons/fi";
import Rightcomponent from './rightsidebar/right.components';

export default function Sidebarright() {
    return (
        <div>
        <div className="searchbar">
               <h2><FiSearch/></h2> <input className="sbar" type="text" placeholder="    Search Twitter"/>
            </div>
            <div className="discoverpost">
                <Rightcomponent/>
            </div>
        </div>
    )
}
