import React from 'react';
import './../styles/Parallax.css'
import './../styles/VideoParallax.css'
import iphone from '../imgs/iphone.png'
import mac from '../imgs/mac.png'
import ReactPlayer from "react-player/youtube";



export default (props) => {
    return (
    <div className="parallax video">
        <div className="mobile">
            <img src={iphone} alt="Iphone">
            
            </img>
            <ReactPlayer url='https://www.youtube.com/watch?v=6G5_w4c8MdA'
            width="125px"
            height="156px"
            controls="true"
            ></ReactPlayer>
        </div>
        <div className="pc">
            <img src={mac} alt="Mac"></img>
            <ReactPlayer url='https://www.youtube.com/watch?v=rbMMlyJ97pA'
            width="250px"
            height="141px"
            controls="true"
            ></ReactPlayer>
        </div>
    </div>
    
  );
}

