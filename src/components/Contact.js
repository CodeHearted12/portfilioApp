import React, {Component} from 'react';

 class Contact extends Component {

  render(){
    let ul = {
        color: "#FF4571",
        fontSize: 14,
        textAlign: "center",
        listStyle: "none"
      };

      return(
          <div>
            <h1 style={{textAlign: "center", color: "#FF4571"}}>"Contact Info"</h1>
          <div style={{textAlign:"center"}}>
            <img src='https://i.imgur.com/IneCjQZ.jpg' alt="" style={{width: "50%", borderRadius: "90%"}}/>
          <ul style={ul}>
            <li>Contact Information</li>
            <li>email@email.com</li>
          </ul>
          </div>
              </div>
            );
          }
        }
        export default Contact;
