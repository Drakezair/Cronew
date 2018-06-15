import React, { Component } from 'react';
import { Divider,Icon } from 'semantic-ui-react';

class Card extends Component {

  state={
    hoverButton: false
  }

  onButton=()=>this.setState({hoverButton: true})
  leaveButton=()=>this.setState({hoverButton: false})

    render(){
      return(
        <div className="Card" onClick={()=>this.state.hoverButton ? null : alert('hola')}  >
          <img src={require("../../assets/examples/img_1.jpeg")} alt="" className="Card-Img" />
          <div style={{padding: '0 5px', position: 'relative'}} >
            <h3 style={{marginBottom:2}} >Nombre del producto</h3>
            <span className="Card-Add"
              onClick={()=>alert('hola-312')}
              onMouseEnter={()=>this.onButton()}
              onMouseLeave={()=>this.leaveButton()}
            ><Icon name="plus" /></span>
            <p style={{color:"#8f8f8f"}} ><strong>Precio: </strong>1.299$</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias optio </p>
          </div>
        </div>
      );
    }
}

export default Card;
