import React, { useState, useContext} from 'react';
import './../styles/HamburgerMenu.css'
import { PageContext } from './App'

export default ()=>{
    const {page, setPage} = useContext(PageContext);
    return (
        <div className="menu">
            <div className="category">
                <div className="header-container">
                    <h3>Generelt</h3>
                </div>
            <ul id="General">
                <li className={page==="Home"? "current" : "other"} onClick={()=>setPage("Home")}>Hjem</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Teknologi</h3>
                </div>
            <ul className="Tech">
                <li className={page==="AI"? "current" : "other"} onClick={()=>setPage("AI")}>Kunstig intelligens</li>
                <li className={page==="Sprint"? "current" : "other"} onClick={()=>setPage("Sprint")}>NTNUI Sprint</li>
                <li className={page==="BAT Streaming"? "current" : "other"} onClick={()=>setPage("BAT Streaming")}>BAT Streaming</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Dans</h3>
                </div>
            <ul className="Dance">
                <li className={page==="ShowTeam"? "current" : "other"} onClick={()=>setPage("ShowTeam")}>SalsaNor Men Show Team</li>
                <li className={page==="NTNUI Salsa"? "current" : "other"} onClick={()=>setPage("NTNUI Salsa")}>NTNUI Salsa</li>
                <li className={page==="Reising"? "current" : "other"} onClick={()=>setPage("Reising")}>Reising</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Hobbyer</h3>
                </div>
            <ul className="Hobbies">
                <li className={page==="Volleyball"? "current" : "other"} onClick={()=>setPage("Volleyball")}>Volleyball</li>
            </ul>
            </div>
        </div>
    );
}



