import React,{Component} from 'react';
import { BrowserHistory } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

class AppContainer extends Component{

  render(){
    return(
      <div >
        <div className="MenuNav-Container" >
          <div className="Menu-Container" >
            <h1 className="Menu-Text-Logo" >Cronew</h1>
            <div className="Menu-Buttons-Container" >
              <a className="Menu-Button" >Crea tu cuenta</a>
              <a className="Menu-Button" >Ingresa</a>
            </div>
          </div>
          <div className="Dropdown" >
            <a className="Dropdown-Open-Button" >Categorias <Icon name="caret down" /> </a>
            <div class="Dropdown-Content">
              <button className="Dropdown-button" >Tecnologia <Icon name="caret right" /> </button>
              <button className="Dropdown-button" >Muebles <Icon name="caret right" /> </button>
              <button className="Dropdown-button" >Salud y belleza <Icon name="caret right" /> </button>
            </div>
          </div>
        </div>

        <div className="App-Container" >
        </div>

        <div className="ShoppinCar-Tag" onClick={()=> alert("CLICK")} >

        </div>
      </div>
    );
  }

}

export default AppContainer;
