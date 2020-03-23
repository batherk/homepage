import React, { useState} from 'react';
import './../styles/Hamburger.css'

export default ()=>{
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={isOpen? "hamburger-cont menu-open" : "hamburger-cont"}>
        <button className="menu-button"></button>
        <div className="hamburger"><div></div></div>
    </div>
  );
}






