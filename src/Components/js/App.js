import React, { useState, useEffect, createContext } from 'react';
import './../styles/App.css';
import {Parallax, Hamburger} from '.'


export const PageContext = createContext(null);


export default ()=>{

  const [page,setPage] = useState("Home");
  const [posts, setPosts] = useState([]);

  const paths = {
    "Home":"posts/front.json",
    "AI":"posts/ai.json",
    "Sprint":"posts/sprint.json",
    "BAT Streaming":"posts/streaming.json",
    "ShowTeam":"posts/showteam.json",
    "NTNUI Salsa":"posts/ntnuisalsa.json",
    "Reising":"posts/salsaturer.json",
    "Volleyball":"posts/volleyball.json"
  }


  useEffect(() => {
    if (paths[page]){
      fetch(paths[page])
    .then((res)=>res.json())
    .then((json)=>{
      setPosts(json);
    });
    }
  }, [page]);

  return (
    <PageContext.Provider value={{page,setPage}}>
      <div className="App">
        <Hamburger/>
        <div className="content">
          {posts.map((post,index)=>{
            const imageSide = (index % 2 === 0 ? "left" : "right")
            const imageURL = '/img/' + post.imageName
            return <Parallax imageSide={imageSide} title={post.title} text={post.text} imageURL={imageURL}/>
          })}
        </div>
      </div>
    </PageContext.Provider>
  );
}
