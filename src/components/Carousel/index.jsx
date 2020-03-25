import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import React, {PureComponent}  from "react";
import Iframe from 'react-iframe'
import "./style.css";

export default class CarouselMain extends PureComponent {
  constructor(props) {
      super(props);
      this.state = {
          index: 1,  
          direction: null,
          nextIcon: <a class="carousel-control-next" style={{display:"none"}} role="button" href="#"></a>,
          prevIcon: <a class="carousel-control-prev" style={{display:"none"}} role="button" href="#"></a>,
          indicators: false
      }
  }

  handleSelect = (selectedIndex, e) => {
      this.setState({
          index: selectedIndex,
          direction: e.direction
      });
  }
render(){
  return (
    <div className="row d-flex justify-content-center">
    <Carousel activeIndex={this.state.index} onSelect={this.handleSelect} prevIcon={this.state.prevIcon} nextIcon={this.state.nextIcon} indicators={this.state.indicators}>
      <Carousel.Item> 
        <Card className="float-right mr-5 cardPrueba" style={{height: "130px",  width: "250px"}}>
        <Iframe className="frame" url="https://www.youtube.com/embed/9Xa83OiyG5Q?controls=0"
        id="myId"
        height="130px"
        width="250px"
        allowFullScreen
        className="myClassname"
        display="initial"
        position="relative"/>
          
          
        </Card>
        <Card style={{height: "130px",  width: "250px" }} className="float-right mr-5 cardPrueba">
        <Iframe url="https://www.youtube.com/embed/_LRAuqwr53Q?controls=0"
        id="myId"
        height="130px"
        width="250px"
        allowFullScreen
        className="myClassname"
        display="initial"
        position="relative"/>
          
        </Card>
        <Card className="float-right mr-5 cardPrueba" style={{height: "130px",  width: "250px" }}>
        <Iframe url="https://www.youtube.com/embed/2Co4_VG4GM8" 
        id="myId"
        height="130px"
        width="250px"
        allowFullScreen
        className="myClassname"
        display="initial"
        position="relative"/>
          
        </Card >
      </Carousel.Item>
      <Carousel.Item>
        <Card className="float-right mr-5 cardPrueba" style={{height: "130px",  width: "250px" }}>
        <Iframe url="https://www.youtube.com/embed/qFnxkNgQyeA?controls=0"
        id="myId"
        height="130px"
        width="250px"
        allowFullScreen
        className="myClassname"
        display="initial"
        position="relative"/>
          
        </Card>
        <Card className="float-right mr-5 cardPrueba" style={{height: "130px",  width: "250px" }}>
        <Iframe url="https://www.youtube.com/embed/q_8jfIEh_dY?controls=0"
        id="myId"
        height="130px"
        width="250px"
        allowFullScreen
        className="myClassname"
        display="initial"
        position="relative"/>
         
        </Card>
        <Card className="float-right mr-5 cardPrueba" style={{height: "130px",  width: "250px"}}>
        <Iframe url="https://www.youtube.com/embed/y_FSgMdVFgY?controls=0"
        id="myId"
        height="130px"
        width="250px"
        allowFullScreen
        className="myClassname"
        display="initial"
        position="relative"
        styles={{borderRadius: "20"}}/>
         
        </Card>
      </Carousel.Item>
    </Carousel>
    </div>

  );
}}
