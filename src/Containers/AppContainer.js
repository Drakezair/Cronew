import React,{Component} from 'react';
import { BrowserHistory } from 'react-router-dom';
import { Icon,Dropdown,} from 'semantic-ui-react';

import Tecnologia from '../Components/Dropdown/Tecnologia';
import Deportes from '../Components/Dropdown/Deportes';
import Musica from '../Components/Dropdown/Musica';

class AppContainer extends Component{

  state={
    Dropdown: false,
    Tecnologia: false,
    Deportes: false,
    Musica: false
  }

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

          <Dropdown text="Categorias" pointing='top left' className="Dropdown"  open={this.state.Dropdown} onMouseEnter={()=>this.setState({Dropdown:true})} >
            <Dropdown.Menu onMouseLeave={()=>this.setState({Dropdown: false})} >
              <Dropdown text='Tecnología' pointing='left' className='link item'
                open={this.state.Tecnologia}
                onMouseEnter={()=>this.setState({Tecnologia: true})}
                onMouseLeave={()=>this.setState({Tecnologia: false})}
              >
                <Dropdown.Menu>
                  <Tecnologia />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown text='Deportes y Aire Libre' pointing='left' className='link item'
                open={this.state.Deportes}
                onMouseEnter={()=>this.setState({Deportes: true})}
                onMouseLeave={()=>this.setState({Deportes: false})}
              >
                <Dropdown.Menu>
                  <Deportes />
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown text='Instrumentos Musicales' pointing='left' className='link item'
                open={this.state.Musica}
                onMouseEnter={()=>this.setState({Musica: true})}
                onMouseLeave={()=>this.setState({Musica: false})}
              >
                <Dropdown.Menu>
                  <Musica />
                </Dropdown.Menu>
              </Dropdown>
            </Dropdown.Menu>
          </Dropdown>
          <a>Ofertas</a>
          <a>Tus Compras</a>
        </div>

        <div className="App-Container" >

        </div>

        <button className="Sell-Button" >
          Vender
        </button>

        <div className="ShoppinCar-Tag" onClick={()=> alert("CLICK")} >
          <p>Carrito de Compras</p>
        </div>
      </div>
    );
  }

}

export default AppContainer;
