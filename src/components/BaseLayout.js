import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

 class BaseLayout extends Component {
  render(){

    let body = {
      fontSize: "1em"
}

let header = {
  backgroundColor: "blue",
  height: "150px"
}

let ul = {
      listStyle: "none",
      padding: 26,
      margin: 0,
      display: "flex",
      justifyContent: "center"
    }

    let li = {
          display: "inline",
          marginTop: "20px",
          padding: "10px"
        }


        let link = {
      color: "white",
      textDecoration: "none"
    }

    let footer = {
      textAlign: "center",
      backgroundColor: "blue",
      height: 100,
      margin: "0 auto",
      marginTop: "400px"
    }

    return(
      <div style ={body}>
        <div style={header}>
          <ul style={ul}>
            <li style={li}>
                <NavLink className="myButton" to="/" style={link}>Home</NavLink>
            </li>
            <li style={li}>
                <NavLink className="myButton" to="/about" style={link}>About</NavLink>
            </li>
            <li style={li}>
                <NavLink className="myButton" to="/portfolio" style={link}>Portfolio</NavLink>
            </li>
            <li style={li}>
                <NavLink className="myButton" to="/contact" style={link}>Contact</NavLink>
            </li>
            <li style={li}>
                <NavLink className="myButton" to="/references" style={link}>References</NavLink>
            </li>
          </ul>
        </div>
        <div style={{backgroundColor: "black", padding: "10px", paddingBottom: "100px", height: "100px"}}>
          {this.props.children}
        </div>
        <footer style={footer}>
        </footer>
      </div>
    );
  }
}

export default BaseLayout;
