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
        <img src={require('https://imgur.com/a/KWQnO')} alt="" style={{width: "50%", borderRadius: "90%"}}/>
      <ul style={ul}>
        <li>References</li>
        <li>...</li>
      </ul>
      </div>
    </div>
      );
    }
  }
export default References;
