import React, { useState} from 'react';
import './../styles/Hamburger.css'

export default ()=>{
  const [isOpen, setIsOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("Home")

  return (
    <div className={isOpen? "hamburger-cont menu-open" : "hamburger-cont"}>
        <div className="hamburger"onClick={()=>setIsOpen(!isOpen)}><div></div></div>
        <div className="menu">
          <ul>
            <li className={currentTab==="Home"? "current" : "other"} onClick={()=>setCurrentTab("Home")}>Home</li>
            <li className={currentTab==="Tech"? "current" : "other"} onClick={()=>setCurrentTab("Tech")}>Tech</li>
          </ul>
        </div>
    </div>
  );
}






