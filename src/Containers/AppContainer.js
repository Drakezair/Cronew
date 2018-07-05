import React,{Component} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import { Icon,Dropdown,Search } from 'semantic-ui-react';


// Dropdown Component
import Tecnologia from '../Components/Dropdown/Tecnologia';
import Deportes from '../Components/Dropdown/Deportes';
import Musica from '../Components/Dropdown/Musica';
import Item from '../Components/Card/Item';

// Pages
import Index from '../Pages/Index';
import SearchPage from '../Pages/SearchPage';

class AppContainer extends Component{

  state={
    Dropdown: false,
    Tecnologia: false,
    Deportes: false,
    Musica: false,
    searchFocus: false,
    over:false,
    result: []
  }

  openShoppingCar = ()=> {
    var elmnt = this.refs.ShoppingList;
    var tag = this.refs.tag
    elmnt.classList.contains('ShoppingListOpen') ? elmnt.classList.add('ShoppingListClose') : elmnt.classList.remove('ShoppingListClose');
    elmnt.classList.toggle('ShoppingListOpen');
    tag.classList.toggle('ShoppingTagActive')
  }

  handleDropdown = ()=> this.setState({Dropdown: !this.state.Dropdown});

  options=[
  {
    "title": "Iphone x",
    "price": "$1.299",
    "image": require('../assets/examples/img_2.jpg')
  },
  {
    "title": "Iphone 7",
    "price": "$688.02"
  },
  {
    "title": "Xbox one",
    "price": "$400"
  },
  {
    "title": "Ps4",
    "price": "$27.48"
  },
  {
    "title": "Bicicleta",
    "price": "$120.66"
  },
  {
    "title": "Skate",
    "price": "$98.66"
  }
]
handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  async handleSearchChange(d) {
    await this.setState({
      result: []
    })

    this.options.map(res=>{
      if(res.title.toLowerCase().includes(d.value)){
        this.setState({
          result: this.state.result.concat(res)
        })
      }
    })
  }

  render(){
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 0){
        this.refs.container.classList.add('MenuContainClosed');
        this.refs.menuContainer.classList.add('MenuContainClosed');
      }
      if(window.scrollY < 45){
        this.refs.container.classList.remove('MenuContainClosed');
        this.refs.menuContainer.classList.remove('MenuContainClosed');
      }
    })

    return(

      <Router basename="/cronew" >
        <div >
          <div className="MenuNav-Container" ref='container'
            onMouseEnter={()=>{
              this.refs.container.classList.remove('MenuContainClosed');
              this.refs.menuContainer.classList.remove('MenuContainClosed');
            }}

            onMouseLeave={()=>{
              if(window.scrollY > 45 && !this.state.searchFocus){
                this.refs.container.classList.add('MenuContainClosed');
                this.refs.menuContainer.classList.add('MenuContainClosed');
              }
            }}
          >
            <div className="Menu-Container" ref="menuContainer" >
              <h1 className="Menu-Text-Logo" >Cronew</h1>
              <Search noResultsMessage='No hay resultados'
                onSearchChange={(e,d)=>this.handleSearchChange(d)}
                results={this.state.result}
                fluid
                onResultSelect={()=>window.location.href ="cronew/search"}
                onFocus={(e,d)=>{
                  this.setState({searchFocus: true})
                }}
                onBlur={(e,d)=>{
                  this.setState({searchFocus: false})
                }}
              />
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

          <div className="App-Container"
            onClick={()=>{
              this.setState({searchFocus: false})
              this.refs.container.classList.add('MenuContainClosed');
              this.refs.menuContainer.classList.add('MenuContainClosed');
            }}
          >

            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/search" component={SearchPage} />
            </Switch>
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
      </Router>
    );
  }

}

export default AppContainer;
