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
    elmnt.classList.contains('ShoppingListOpen') ? elmnt.classList.add('ShoppingListClose') : elmnt.classList.remove('ShoppingListClose');
    elmnt.classList.toggle('ShoppingListOpen');
    tag.classList.toggle('ShoppingTagActive')
  }

  handleDropdown = ()=> this.setState({Dropdown: !this.state.Dropdown});

  render(){
    return(
      <div >
        <div className="MenuNav-Container" >
          <div className="Menu-Container" >
            <h1 className="Menu-Text-Logo" >Cronew</h1>
            <Search noResultsMessage='No hay resultados' />
            <div className="Menu-Buttons-Container" >
              <a className="Menu-Button" >Crea tu cuenta</a>
              <a className="Menu-Button" >Ingresa</a>
            </div>
          </div>
          <span className="Dropdown-button"
            onMouseEnter={()=> this.handleDropdown()}
            onMouseOver={()=> console.log('hola')}
          >Categorias <Icon name="caret down" size='large' /></span>
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
                  <Icon name="caret right" size="large"/>
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
                  <Icon name="caret right" size="large"/>
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
                  <Icon name="caret right" size="large"/>
                  {
                    this.state.Musica ? <Musica /> : null
                  }
                </span>
              </div>
            :
            null

            /* <div className="Dropdown-Component"></div> */
          }
          <a>Ofertas de la semana</a>
          <a>Tiendas oficiales</a>
          <a>Tu historial</a>
          <a>Tus Compras</a>
        </div>

        <div className="App-Container" >
          <Router>
            <Route exact path="/" component={Index} />
          </Router>
        </div>

        <span className="Sell-Button NoSelection" >
          Vender
        </span>

        <div className="ShoppinCar-Container" >
          <div className="ShoppinCar-Tag NoSelection" ref='tag' onClick={()=>this.openShoppingCar()} >
            <p>Carrito de Compras</p>
          </div>
          <div className="ShoppingList" ref='ShoppingList' >
            <div className="listCar">
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
