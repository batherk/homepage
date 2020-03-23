import React, { useState, useEffect } from 'react';
import './../styles/App.css';
import {Parallax, Hamburger} from '.'

export default ()=>{

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('posts/front.json')
    .then((res)=>res.json())
    .then((json)=>{
      setPosts(json);
    });
  }, []);

  return (
    <div className="App">
      <Hamburger/>
      <div className="content">
      {posts.map((post,index)=>{
        const imageSide = (index % 2 === 0 ? "left" : "right")
        const imageURL = '/img/' + post.imageName
          return <Parallax imageSide={imageSide} title={post.title} text={post.text} imageURL={imageURL}/>
        })
      }
      </div>
    </div>
  );
}
