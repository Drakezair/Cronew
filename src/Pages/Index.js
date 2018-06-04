import React,{ Component } from 'react';
import Slider from "react-slick";
import { Icon } from 'semantic-ui-react';

// Images for SlideShow
import img from '../assets/slideshow.jpeg';
import img1 from '../assets/slideshow_1.jpeg';
import img2 from '../assets/slideshow_2.jpeg';

class Index extends Component {

  Next = () => this.refs.SlideShow.slickNext()
  Back = () => this.refs.SlideShow.slickPrev()

  render(){
    var settings = {
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
        <section>
          
        </section>
      </div>
    )
  }
}

export default Index;
