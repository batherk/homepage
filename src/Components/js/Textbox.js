import React from 'react';
import './../styles/Textbox.css'


export default (props)=>{
  return(
    <div class="text-box">
        <h2>{props.title}</h2>
        <p dangerouslySetInnerHTML={{__html:props.text}}></p> 
    </div>
    
  );

}