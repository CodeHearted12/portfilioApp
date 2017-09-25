import React, {Component} from 'react';


export default class Portfolio extends Component {
  render(){
   let ul = {
   color: "#601829",
   fontSize: 13,
   textAlign: "center",
   listStyle: "none"
 };

 return(
    <div>
      <h1 style={{textAlign: "center", color: "#FF4571"}}>"Myron Flakes Portfolio"</h1>
      <div style={{textAlign:"center"}}>
        <img src={require('https://imgur.com/a/KWQnO')} alt="" style={{width: "50%", borderRadius: "90%"}}/>
      <ul style={ul}>
        <li>TIY Orlando</li>
        <li>My Stories</li>
      </ul>
      </div>
    </div>
     );
   }
 }
