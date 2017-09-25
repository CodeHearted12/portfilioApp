import React, { Component } from 'react';
class About extends Component {
  render(){


    let ul = {
         color: "#601829",
         fontSize: 14,
         textAlign: "center",
         listStyle: "none"
       };


    return(
      <div>
        <h1 style={{textAlign: "center", color: "#601829"}}>About</h1>
        <div style={{textAlign:"center"}}>
          <img src={require('https://imgur.com/a/KWQnO')} alt="" style={{width: "50%", borderRadius: "90%"}}/>
        </div>
        <ul style={ul}>
          <li>Engineer</li>
          <li>Music Artist</li>
          <li>Athlete</li>
        </ul>
      </div>
    );
  }
}
