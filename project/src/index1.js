import React from 'react';
 import ReactDOM from 'react-dom';
 
 // create a component

function student(){
    return <h1>welcome dear student</h1>;
}
 //display

 ReactDOM.render(
     <div>
<student/>
</div>,
       document.getElementById('root')
 );
 
