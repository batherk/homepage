import React, { createContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from "react-router";
import { Hamburger, Parallax, VideoParallax } from '.';
import './../styles/App.css';


export const PageContext = createContext(null);


export default ()=>{

  const location = useLocation()
  const history = useHistory()

  const [posts, setPosts] = useState([]);

  const paths = {
    "/":"posts/front.json",
    "/ai":"posts/ai.json",
    "/sprint":"posts/sprint.json",
    "/streaming":"posts/streaming.json",
    "/showteam":"posts/showteam.json",
    "/salsa":"posts/ntnuisalsa.json",
    "/travelling":"posts/salsaturer.json",
    "/volleyball":"posts/volleyball.json"
  }

  useEffect(() => {
    if (paths[location.pathname]){
      fetch(paths[location.pathname])
    .then((res)=>res.json())
    .then((json)=>{
      setPosts(json);
    });
    }
  }, [location, paths]);

  return (
    <PageContext.Provider value={{history, location}}>
          <div className="App">
            <Hamburger/>
            <div className="content">
              {posts?.map((post,index)=>{
                const imageSide = (index % 2 === 0 ? "left" : "right")
                const imageURL = '/img/' + post.imageName
                return <Parallax key={index} imageSide={imageSide} title={post.title} text={post.text} imageURL={imageURL}/>
              })}
            <VideoParallax/>
            </div>
          </div>
    </PageContext.Provider>
  );
}
