import React,{Component} from 'react';
import { Icon } from 'semantic-ui-react';

//Component
import Card from '../Components/Card/Card';

// IMAGES

import platzi from '../assets/Platzi.png';

class SearchPage extends Component
{

  state={
    Objects: [0,1,2,3,4,5,6,7,8,9]
  }

  twitter = "https://twitter.com/Drakezair1";
  github = "https://github.com/Drakezair";
  instagram = 'https://www.instagram.com/drakezair/';
  platziUrl = 'https://platzi.com/@Drakezair/';
  youtube = 'https://www.youtube.com/channel/UC7WQRANCPZ1rKsjeO4jB6xg';

  render()
  {
    return(
      <div>
        <div className="searchPage-Contain">
          <div className="filterContain">
            <h3>Filtros de busqueda</h3>
            <p><strong></strong></p>
            <span></span>
          </div>
          <div className="ListContain">
            {
              this.state.Objects.map((card,index)=>{
                return <Card />
              })
            }
          </div>

        </div>
        <footer className='Footer' >
          <div className="Footer-Container">
            <div className="footer-left">
              <div className="footerTag">
                <span className="iconPlace">
                  <Icon name='map marker alternate' />
                </span>
                <p>21 Revolution Street. <br/><strong>Paris, France.</strong></p>
              </div>
              <div className="footerTag">
                <span className="iconPlace">
                  <Icon name='phone' />
                </span>
                <strong>+1 555 123456</strong>
              </div>
              <div className="footerTag">
                <span className="iconPlace">
                  <Icon name='mail' />
                </span>
                <strong >andradex.js07@gmail.com</strong>
              </div>
            </div>
            <div className="footer-right">
              <h3>About company.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim at dolores
                eius magnam dolorum nostrum sunt cumque error sint corporis, rem iste excepturi
                provident doloremque, nemo nulla! Sit, magnam, consectetur.
              </p>
              <div className="buttonsContain NoSelection">
                <div className="socialButton NoSelection" onClick={()=>this.toUrl(this.github)}><Icon name="github" /></div>
                <div className="socialButton NoSelection" onClick={()=>this.toUrl(this.instagram)}><Icon name="instagram" /></div>
                <div className="socialButton NoSelection" onClick={()=>this.toUrl(this.twitter)}><Icon name="twitter" /></div>
                <div className="socialButton NoSelection" onClick={()=>this.toUrl(this.youtube)}><Icon name="youtube" /></div>
                <div className="socialButton NoSelection" onClick={()=>this.toUrl(this.platziUrl)}><img src={platzi}/></div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default SearchPage;
