import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';

class Card extends Component {

    render(){
      return(
        <div className="Card" >
          <img src={require("../../assets/examples/img_1.jpeg")} alt="" className="Card-Img" />
          <div style={{padding: '0 5px'}} >
            <h3>Nombre del producto</h3>
            <p style={{color:"#8f8f8f"}} ><strong>Precio: </strong>1.299$</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias optio </p>
          </div>
        </div>
      );
    }
}

export default Card;
