import React,{Component} from 'react';
import {Header, Divider, List} from 'semantic-ui-react';

class Deportes extends Component {

  render(){
    return(
      <div className="Dropdown-Component" >
        <h1>Deportes y Aire Libre</h1>
        <Divider />
        <div className="Grid-Dropdown-Component" >
          <div>
            <h3>Bicicletas y Ciclismo</h3>
            <List>
              <List.Item as='a' >Bisicletas</List.Item>
              <List.Item as='a' >Accesorios</List.Item>
            </List>
          </div>
          <div>
            <h3>Fútball</h3>
            <List>
              <List.Item as='a' >Tablets</List.Item>
              <List.Item as='a' >Pórtatiles</List.Item>
              <List.Item as='a' >Computadores</List.Item>
            </List>
          </div>
          <div>
            <h3>Consolas y Videojuegos</h3>
            <List>
              <List.Item as='a' >Play Station</List.Item>
              <List.Item as='a' >Xbox</List.Item>
              <List.Item as='a' >Nintendo</List.Item>
            </List>
          </div>
          <div style={{gridColumn: '1 / span 3'}} >
            <img src={require('../../assets/Deportes.jpeg')} style={{width: 778,height: 300}} />
          </div>
        </div>
      </div>
    );
  }
}

export default Deportes;
