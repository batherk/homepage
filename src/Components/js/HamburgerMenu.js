import React, { useState} from 'react';
import './../styles/HamburgerMenu.css'

export default ()=>{
  const [currentTab, setCurrentTab] = useState("Home")

  return (
    <div className="menu">
        <div className="category">
            <div className="header-container">
                <h3>Generelt</h3>
            </div>
        <ul id="General">
            <li className={currentTab==="Home"? "current" : "other"} onClick={()=>setCurrentTab("Home")}>Hjem</li>
        </ul>
        </div>
        <div className="category">
            <div className="header-container">
                <h3>Teknologi</h3>
            </div>
        <ul className="Tech">
            <li className={currentTab==="AI"? "current" : "other"} onClick={()=>setCurrentTab("AI")}>Kunstig intelligens</li>
            <li className={currentTab==="Sprint"? "current" : "other"} onClick={()=>setCurrentTab("Sprint")}>NTNUI Sprint</li>
            <li className={currentTab==="BAT Streaming"? "current" : "other"} onClick={()=>setCurrentTab("BAT Streaming")}>BAT Streaming</li>
        </ul>
        </div>
        <div className="category">
            <div className="header-container">
                <h3>Dans</h3>
            </div>
        <ul className="Dance">
            <li className={currentTab==="ShowTeam"? "current" : "other"} onClick={()=>setCurrentTab("ShowTeam")}>SalsaNor Mens Show Team</li>
            <li className={currentTab==="NTNUI Salsa"? "current" : "other"} onClick={()=>setCurrentTab("NTNUI Salsa")}>NTNUI Salsa</li>
            <li className={currentTab==="Sosialt og reising"? "current" : "other"} onClick={()=>setCurrentTab("Sosialt og reising")}>Sosialt og reising</li>
        </ul>
        </div>
        <div className="category">
            <div className="header-container">
                <h3>Hobbyer</h3>
            </div>
        <ul className="Hobbies">
            <li className={currentTab==="Volleyball"? "current" : "other"} onClick={()=>setCurrentTab("Volleyball")}>Volleyball</li>
        </ul>
        </div>
    </div>
  );
}



