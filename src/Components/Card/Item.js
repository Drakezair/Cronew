import React,{Component} from 'react';

import img from '../../assets/examples/img_1.jpeg';

class Item extends Component {

  render(){
    return(
      <div className="itemContain">
        <img src={img} className="itemImg"/>
        <div className="itemDescription">
          <h3
            style={{
              fontSize: 16,
              margin: 0
            }}
          >Nombre del producto</h3>
          <p style={{lineHeight:'1em',fontSize:12,margin:0}} >Precio: 1.299$</p>
          <p style={{lineHeight:'1em',fontSize:12,margin:0}} >Cantidad: 3</p>
        </div>
        <div>
          <span style={{background: '#49c705', marginBottom: 5}} className="itemButton" >+</span>
          <span style={{background:'red'}} className="itemButton" >-</span>
        </div>
      </div>
    );
  }
}

export default Item;
