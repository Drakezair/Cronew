import React,{ Component } from 'react';
import Slider from "react-slick";
import { Icon,Divider } from 'semantic-ui-react';

//COMPONENTES

import Card from '../Components/Card/Card';

// IMAGES

import platzi from '../assets/Platzi.png';

class Index extends Component {

  state={
    LisPosition: 0
  }

  //REDES SOCIALES

  twitter = "https://twitter.com/Drakezair1";
  github = "https://github.com/Drakezair";
  instagram = 'https://www.instagram.com/drakezair/';
  platziUrl = 'https://platzi.com/@Drakezair/';
  youtube = 'https://www.youtube.com/channel/UC7WQRANCPZ1rKsjeO4jB6xg';

  // FUNCIONES

  Next = () => this.refs.SlideShow.slickNext()
  Back = () => this.refs.SlideShow.slickPrev()

  nextListView(){
    var element = this.refs.ListView;
    var totalWidth = element.scrollWidth;
    var position = element.scrollLeft;
    if(window.innerWidth >= 860){
      var nextPosition= (totalWidth / 3) + position;
    }else{
      var nextPosition= (totalWidth / 6) + position;
    }
    element.scroll({
      left: nextPosition ,
      behavior: 'smooth'
    })
  }

  backListView(){
    var element = this.refs.ListView;
    var totalWidth = element.scrollWidth;
    var position = element.scrollLeft;
    if(window.innerWidth >= 860){
      var backPosition = position - (totalWidth / 3);
    }else{
      var backPosition = position - (totalWidth / 6);
    }
    element.scroll({
      left: backPosition ,
      behavior: 'smooth'
    })
  }

  toUrl(url) {
    window.open(url, '_self')
  }

  render(){
    var settings = { //Configuracion Slider
     infinite: true,
     speed: 1000,
     autoplay: true,
     fade: true
   };
    return(
      <div className="Index-Container" >
        <section>
          <div style={{position: 'relative'}} >
            <Slider style={{zIndex: 0}} {...settings} ref="SlideShow" >
              <div className="imgSlide" />
              <div className="imgSlide1" />
              <div className="imgSlide2" />
            </Slider>
            <Icon onClick={()=>this.Next()} className="nextSlide" name="arrow circle right" color='white' />
            <Icon onClick={()=>this.Back()} className="backSlide" name="arrow circle left" color='white' />
          </div>
        </section>
        <section className="Index-Grid" >
          <h2>Descubre</h2>
          <Divider />
          <div className="Descubre-Wrap" >
            <div className="Descubre-1 Descubre" >
              <button className="Descubre-button" >Ver Ahora</button>
            </div>
            <div className="Descubre-2 Descubre" >
              <button className="Descubre-button" >Ver Ahora</button>
            </div>
          </div>
          <div className="Descubre-large" >
            <button className="Descubre-button" >Ver Ahora</button>
          </div>
        </section>

        <section className="Mas-Vistos">
          <div className="Card-Contain-Index">
            <h2>Mas visto</h2>
            <Divider/>
            <div className="Card-List-Index" ref='ListCard' ref='ListView' >
              <div className="List-Contain-Index" >
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
            <Icon className="MasVisto-Button MasVisto-Right" name='chevron circle right' onClick={()=>this.nextListView()} />
            <Icon className="MasVisto-Button MasVisto-Left" name='chevron circle left' onClick={()=> this.backListView()} />
          </div>
        </section>

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

export default Index;
