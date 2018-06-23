import React, { Component } from 'react';
import { Rating,Icon,Divider } from 'semantic-ui-react';
import Slider from 'react-slick';

import img1 from '../../assets/examples/img_1.jpeg';
import img2 from '../../assets/examples/img_2.jpg';
import img3 from '../../assets/examples/img_3.jpeg';

class Card extends Component {

  state={
    hoverButton: false,
    modal:false,
  }

  onButton=()=>this.setState({hoverButton: true});
  leaveButton=()=>this.setState({hoverButton: false});


  openModal = () => this.setState({modal:true});
  closeModal = () => {
    this.refs.contain.style.animationName="closeModalAnim";
    this.refs.contain.style.animationDuration=".4s";
    this.refs.contain.style.animationTimingFunction="ease-in";
    this.refs.contain.style.animationFillMode="forwards";

    this.refs.contain.addEventListener('animationend', e =>{
      if(e.animationName==='closeModalAnim'){
        this.setState({modal:false});
      }
    })
  }

  next = () => this.refs.slidesModal.slickNext();
  back = () => this.refs.slidesModal.slickPrev();

    render(){
      return(

        <div className="Card"
          onClick={()=>!this.state.hoverButton && !this.state.modal ? this.openModal(): null}  >


          { this.state.modal ?
            <div className="dimerModal">
              <div className="modalContain" ref='contain' >
                <Icon name='x' className='closeModal'
                  onClick={()=>this.closeModal()}
                />
                <div className="modalInfoContain">
                  <div className="sliderContainCard" >
                    <Icon name='arrow alternate circle right outline' className="butttonCard cardRight" onClick={()=>this.next()} />
                    <Icon name='arrow alternate circle left outline' className="butttonCard cardLeft" onClick={()=>this.back()} />
                    <Slider
                      arrows={false}
                      draggable={false}
                      ref='slidesModal'
                    >
                      <img src={img1} alt="" className="imgSlideCard"/>
                      <img src={img2} alt="" className="imgSlideCard"/>
                      <img src={img3} alt="" className="imgSlideCard"/>
                    </Slider>
                  </div>
                  <div className='modalInfo' >
                    <h1 style={{margin:0}} >Nombre del producto</h1>
                    <p style={{margin:0}} >Precio: 1.299$</p>
                    <Rating icon='star' defaultRating={4} maxRating={5} />
                    <span className='modalButton NoSelection' >Añadir al Carrito</span>
                  </div>
                </div>
                <Divider />
                <div className='Description'>
                  <h3>Descripcion</h3>
                  <p>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae voluptatum perspiciatis nisi dolorum suscipit mollitia labore ab repellat quas et, necessitatibus quibusdam. Dicta tenetur veniam laborum quibusdam officia voluptatibus a.</span>
                    <span>Pariatur reiciendis vitae cupiditate, nesciunt provident at laudantium culpa aut laborum, perspiciatis animi! Fugiat, earum quae quas itaque natus, eveniet dolor velit ab veniam cupiditate ea. Consequuntur libero, similique a.</span>
                    <span>Blanditiis tenetur, quis suscipit in ipsam architecto eveniet, nisi voluptates rem hic obcaecati totam a provident dignissimos aut quibusdam accusamus eaque, enim! Voluptas soluta, in adipisci ullam quibusdam sunt quas?</span>
                  </p>
                </div>
              </div>
            </div>
          :
            null
          }

          <img src={require("../../assets/examples/img_1.jpeg")} alt="" className="Card-Img" />
          <div style={{padding: '0 5px', position: 'relative'}} >
            <h3 style={{marginBottom:2}} >Nombre del producto</h3>
            <span className="Card-Add"
              onClick={()=>alert('FUNCION PARA AÑADIR AL CARRITO')}
              onMouseEnter={()=>this.onButton()}
              onMouseLeave={()=>this.leaveButton()}
            ><Icon name="plus" /></span>
            <p style={{color:"#8f8f8f"}} ><strong>Precio: </strong>1.299$</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias optio </p>
          </div>
        </div>
      );
    }
}

export default Card;
