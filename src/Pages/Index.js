import React,{ Component } from 'react';
import Slider from "react-slick";
import { Icon,Divider } from 'semantic-ui-react';

//COMPONENTES

import Card from '../Components/Card/Card';

// Images for SlideShow
import img from '../assets/slideshow.jpeg';
import img1 from '../assets/slideshow_1.jpeg';
import img2 from '../assets/slideshow_2.jpeg';

class Index extends Component {

  Next = () => this.refs.SlideShow.slickNext()
  Back = () => this.refs.SlideShow.slickPrev()

  render(){
    var settings = { //Configuracion Slider
     infinite: true,
     speed: 500,
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
            <div className="Card-List-Index" ref='ListCard' >
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>

        <section className='Footer-Container' >

        </section>
      </div>
    )
  }
}

export default Index;
