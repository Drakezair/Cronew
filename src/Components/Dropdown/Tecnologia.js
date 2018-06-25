import React,{Component} from 'react';
import {Header, Divider, List} from 'semantic-ui-react';

class Tecnologia extends Component {

  render(){
    return(
      <div className="Dropdown-Component" >
        <h1>Tecnología</h1>
        <Divider />
        <div className="Grid-Dropdown-Component" >
          <div>
            <h3>Celulares y Telefonos</h3>
            <List>
              <List.Item as='a' >Celulares y Smartphones</List.Item>
              <List.Item as='a' >Accesorios para celulares</List.Item>
            </List>
          </div>
          <div>
            <h3>Computación</h3>
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
            <img src={require('../../assets/tecnologia.jpeg')} className="DropdownImg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Tecnologia;
