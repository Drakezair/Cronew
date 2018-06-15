import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Icon,Dropdown,Search } from 'semantic-ui-react';


// Dropdown Component
import Tecnologia from '../Components/Dropdown/Tecnologia';
import Deportes from '../Components/Dropdown/Deportes';
import Musica from '../Components/Dropdown/Musica';
import Item from '../Components/Card/Item';

// Pages
import Index from '../Pages/Index';

class AppContainer extends Component{

  state={
    Dropdown: false,
    Tecnologia: false,
    Deportes: false,
    Musica: false,
  }

  openShoppingCar = ()=> {
    var elmnt = this.refs.ShoppingList;
    var tag = this.refs.tag
    elmnt.classList.toggle('ShoppingListOpen');
    elmnt.classList.toggle('ShoppingListClose');
    tag.classList.toggle('ShoppingTagActive')
  }

  handleDropdown = ()=> this.setState({Dropdown: !this.state.Dropdown});

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
          <span className="Dropdown-button"
            onMouseEnter={()=> this.handleDropdown()}
            onMouseOver={()=> console.log('hola')}
          >Categorias <Icon name="down" /></span>
          {
            this.state.Dropdown ?
              <div className="Dropdown-List"
                onMouseLeave={()=> this.handleDropdown()}
              >
                <div className="dot" />


                <span
                  className="Dropdown-Span"
                  onMouseEnter={()=>this.setState({Tecnologia: true})}
                  onMouseLeave={()=>this.setState({Tecnologia: false})}
                >
                  Tecnologia
                  {
                    this.state.Tecnologia ? <Tecnologia /> : null
                  }
                </span>
                <span
                  className="Dropdown-Span"
                  onMouseEnter={()=>this.setState({Deportes: true})}
                  onMouseLeave={()=>this.setState({Deportes: false})}
                >
                  Deportes
                  {
                    this.state.Deportes ? <Deportes /> : null
                  }
                </span>
                <span
                  className="Dropdown-Span"
                  onMouseEnter={()=>this.setState({Musica: true})}
                  onMouseLeave={()=>this.setState({Musica: false})}
                >
                  Musica
                  {
                    this.state.Musica ? <Musica /> : null
                  }
                </span>
              </div>
            :
            null

            /* <div className="Dropdown-Component"></div> */
          }
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
          <div className="ShoppinCar-Tag" ref='tag' onClick={()=>this.openShoppingCar()} >
            <p>Carrito de Compras</p>
          </div>
          <div className="ShoppingList ShoppingListClose" ref='ShoppingList' >
            <div className="list">
              <Item />
              <Item />
              <Item />
            </div>
            <div className="checkList">
              Total: 1.700$
              <span>Comprar</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default AppContainer;
