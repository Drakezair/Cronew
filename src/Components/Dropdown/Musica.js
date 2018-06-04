import React,{Component} from 'react';
import {Header, Divider, List} from 'semantic-ui-react';

class Musica extends Component {

  render(){
    return(
      <div className="Dropdown-SubContent" >
        <h1>Instrumentos Musicales</h1>
        <Divider />
        <div className="Grid-SubContent" >
          <div>
            <h3>Guitarras</h3>
            <List>
              <List.Item as='a' >Electricas</List.Item>
              <List.Item as='a' >Accesorios y Amplificadores</List.Item>
              <List.Item as='a' >Acústica</List.Item>
            </List>
          </div>
          <div>
            <h3>Baterias y Percución</h3>
            <List>
              <List.Item as='a' >Baterias</List.Item>
              <List.Item as='a' >Accesorios</List.Item>
            </List>
          </div>
          <div>
            <h3>Teclados</h3>
            <List>
              <List.Item as='a' >Yamaha</List.Item>
              <List.Item as='a' >Casio</List.Item>
            </List>
          </div>
          <div style={{gridColumn: '1 / span 3'}} >
            <img src={require('../../assets/Musica.jpeg')} style={{width: '100%',height: 300}} />
          </div>
        </div>
      </div>
    );
  }
}

export default Musica;
