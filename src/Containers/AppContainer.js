import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Icon,Dropdown,Search } from 'semantic-ui-react';


// Dropdown Component
import Tecnologia from '../Components/Dropdown/Tecnologia';
import Deportes from '../Components/Dropdown/Deportes';
import Musica from '../Components/Dropdown/Musica';

// Pages
import Index from '../Pages/Index';

class AppContainer extends Component{

  state={
    Dropdown: false,
    Tecnologia: false,
    Deportes: false,
    Musica: false,
    tagHeight: 0,
    tagColor: null
  }

  openShoppingCar = ()=> {
    this.setState({
      tagHeight: this.state.tagHeight===0 ? 500 : 0,
      tagColor: this.state.tagColor===null ? {background:'#a9f0da'} : null
    })
  }

  render(){
    return(
      <div >
        <div className="MenuNav-Container" >
          <div className="Menu-Container" >
            <h1 className="Menu-Text-Logo" >Cronew</h1>
            <Search />
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
          <Router>
            <Route exact path="/" component={Index} />
          </Router>
        </div>

        <span className="Sell-Button" >
          Vender
        </span>

        <div className="ShoppinCar-Container" >
          <div className="ShoppinCar-Tag" onClick={()=>this.openShoppingCar()}
            style={this.state.tagColor}
          >
            <p>Carrito de Compras</p>
          </div>
          <div className="ShoppingList" style={{height: this.state.tagHeight}} >

          </div>
        </div>
      </div>
    );
  }

}

export default AppContainer;
