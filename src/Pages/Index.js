import React,{ Component } from 'react';
import Slider from "react-slick";
import { Icon,Divider } from 'semantic-ui-react';

//COMPONENTES

import Card from '../Components/Card/Card';

class Index extends Component {

  state={
    LisPosition: 0
  }

  Next = () => this.refs.SlideShow.slickNext()
  Back = () => this.refs.SlideShow.slickPrev()

  nextListView(){
    var element = this.refs.ListView;
    var totalWidth = element.scrollWidth;
    var position = element.scrollLeft;
    var nextPosition= (totalWidth / 3) + position;
    element.scroll({
      left: nextPosition ,
      behavior: 'smooth'
    })
  }

  backListView(){
    var element = this.refs.ListView;
    var totalWidth = element.scrollWidth;
    var position = element.scrollLeft;
    var backPosition = position - (totalWidth / 3);
    element.scroll({
      left: backPosition ,
      behavior: 'smooth'
    })
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

        <section className='Footer-Container' >

        </section>
      </div>
    )
  }
}

export default Index;
