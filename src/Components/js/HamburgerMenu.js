import React, { useContext} from 'react';
import './../styles/HamburgerMenu.css'
import { PageContext } from './App'

export default ()=>{
    const { history, location } = useContext(PageContext);

    return (
        <div className="menu">
            <div className="category">
                <div className="header-container">
                    <h3>Generelt</h3>
                </div>
            <ul id="General">
                <li className={location.pathname==="/"? "current" : "other"} onClick={()=>history.push("/")}>Hjem</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Teknologi</h3>
                </div>
            <ul className="Tech">
                <li className={location.pathname==="/ai"? "current" : "other"} onClick={()=>history.push("/ai")}>Kunstig intelligens</li>
                <li className={location.pathname==="/sprint"? "current" : "other"} onClick={()=>history.push("/sprint")}>NTNUI Sprint</li>
                <li className={location.pathname==="/streaming"? "current" : "other"} onClick={()=>history.push("/streaming")}>BAT Streaming</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Dans</h3>
                </div>
            <ul className="Dance">
                <li className={location.pathname==="/showteam"? "current" : "other"} onClick={()=>history.push("/showteam")}>SalsaNor Men Show Team</li>
                <li className={location.pathname==="/salsa"? "current" : "other"} onClick={()=>history.push("/salsa")}>NTNUI Salsa</li>
                <li className={location.pathname==="/travelling"? "current" : "other"} onClick={()=>history.push("/travelling")}>Reising</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Hobbyer</h3>
                </div>
            <ul className="Hobbies">
                <li className={location.pathname==="/volleyball"? "current" : "other"} onClick={()=>history.push("/volleyball")}>Volleyball</li>
            </ul>
            </div>
        </div>
    );
}



