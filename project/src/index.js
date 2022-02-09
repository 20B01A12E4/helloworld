import React from 'react';
 import ReactDOM from 'react-dom';
 import lizard from './lizardpicture.png';
 // create a component
function Welcome() {
  return (
      <div>
        <img src={lizard}/>
        <h1  style={{color:"black"}}>
            Lizard
        </h1>
        <h4>lizards are a widespread group aquamate reptiles,with over 6000 species.ranging across at continents except antartica</h4>
        <h3 style={{color:"blue"}}>SHARE        
        LEARNMORE</h3>
      </div>
    );
}
 //display

 ReactDOM.render(
     <div>
<Welcome/>
</div>,
       document.getElementById('root')
 );
 
