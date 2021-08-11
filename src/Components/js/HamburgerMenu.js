import React, { useContext} from 'react';
import './../styles/HamburgerMenu.css'
import { PageContext } from './App'

export default ()=>{
    const { history, location } = useContext(PageContext);

    return (
        <div className="menu">
            <div className="category">
                <div className="header-container">
                    <h3>General</h3>
                </div>
            <ul id="General">
                <li className={location.pathname==="/"? "current" : "other"} onClick={()=>history.push("/")}>Home</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Technology</h3>
                </div>
            <ul className="Tech">
                <li className={location.pathname==="/sprint"? "current" : "other"} onClick={()=>history.push("/sprint")}>NTNUI Sprint</li>
                <li className={location.pathname==="/streaming"? "current" : "other"} onClick={()=>history.push("/streaming")}>BAT Streaming</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Dance</h3>
                </div>
            <ul className="Dance">
                <li className={location.pathname==="/showteam"? "current" : "other"} onClick={()=>history.push("/showteam")}>SalsaNor Men Show Team</li>
                <li className={location.pathname==="/salsa"? "current" : "other"} onClick={()=>history.push("/salsa")}>NTNUI Salsa</li>
            </ul>
            </div>
            <div className="category">
                <div className="header-container">
                    <h3>Hobbies</h3>
                </div>
            <ul className="Hobbies">
                <li className={location.pathname==="/volleyball"? "current" : "other"} onClick={()=>history.push("/volleyball")}>Volleyball</li>
            </ul>
            </div>
        </div>
    );
}



