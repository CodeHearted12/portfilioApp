import React, {Component} from 'react';


class References extends Component {

  render(){
      let ul = {
      color: "#FF4571",
      fontSize: 14,
      textAlign: "center",
      listStyle: "none"
    };

    return(
    <div>
      <h1 style={{textAlign: "center", color: "#FF4571"}}>"References"</h1>
      <div style={{textAlign:"center"}}>
        <img src='https://i.imgur.com/IneCjQZ.jpg' alt="My Picture"/>
      <ul style={ul}>
        <li>References</li>
        <li>Refer Me</li>
      </ul>
      </div>
    </div>
      );
    }
  }
export default References;
