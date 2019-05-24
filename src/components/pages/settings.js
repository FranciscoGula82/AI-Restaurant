import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import Slider from 'react-input-slider';


class Settings extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.getMyState();
    console.log(this.state);

    this.isChanging = false;

  }

  waitAux(){
    console.log("oi");
  }

  updateProps(){
    this.props.upMyState(this.state);
  }

  changeVolume(event) {
    let volume = this.state.volume;
    volume = parseInt(event.target.value);
    this.setState({volume});
    setTimeout(this.updateProps.bind(this), 1000);
    
  }

  changeAirTemp(diff){
    let air_temp = this.state.air_temp;
    if(diff == "-")
      air_temp--;   
    else
      air_temp++;
    this.setState({air_temp});
    setTimeout(this.updateProps.bind(this), 1000);
    setTimeout(this.updateTemps.bind(this), 3000);
    
  }

  changeSeatTemp(diff){
    let seat_temp = this.state.seat_temp;
    if(diff == "-")
      seat_temp--;   
    else
      seat_temp++;
    this.setState({seat_temp});
    setTimeout(this.updateProps.bind(this), 1000);
    setTimeout(this.updateTemps.bind(this), 1000);
  }

  updateTemps(){
    while(this.isChanging){
      //just wait
    }
    this.isChanging = true;
    console.log(this.isChanging);

    let diff_air = this.state.air_temp - this.state.actual_air_temp;
    let diff_seat = this.state.seat_temp - this.state.actual_seat_temp;

    while(diff_air != 0|| diff_seat != 0){
      this.updateTempsAux(diff_air, diff_seat);
      
      if(diff_air > 0)
        diff_air--;
      else if(diff_air < 0)
        diff_air++;
      if(diff_seat > 0)
        diff_seat--;
      else if(diff_seat < 0)
        diff_seat++;
    }
    this.isChanging = false;
    
  }

  updateTempsAux(diff_air, diff_seat){
    setTimeout(() => this.updateTempsAux2(diff_air, diff_seat), 8000);
  }

  updateTempsAux2(diff_air, diff_seat){
    if(diff_air != 0){
      console.log("mequie2");
      let actual_air_temp = this.state.actual_air_temp;
      if(diff_air > 0)
        actual_air_temp++
      else if(diff_air < 0)
        actual_air_temp--;
      this.setState({actual_air_temp});
    }
    if(diff_seat != 0){
      let actual_seat_temp = this.state.actual_seat_temp;
      if(diff_seat > 0)
        actual_seat_temp++
      else if(diff_seat < 0)
        actual_seat_temp--;
      this.setState({actual_seat_temp}); 
    }
    setTimeout(this.updateProps.bind(this), 1000);
  }
  

  render(){
    const values = this.state;
    return (
      <div className="container-fluid">
        <nav className="settings-menu" style={{visibility:values.sidebar_layout}}>
          <ul>
            <div className="air-temp-side">
              <i className="fas fa-thermometer-half"></i>  Air Temperature
              <div className="air-temp-value-side">
                {values.actual_air_temp}º
              </div>
              <i className="far fa-minus-square"  onClick={() => this.changeAirTemp("-")}></i>
              <div className="air-temp-seter-side">
                {values.air_temp}
              </div>
              <i className="far fa-plus-square"  onClick={() => this.changeAirTemp("+")}></i>
            </div>
            <div className="seat-temp-side">
              <i className="fas fa-chair"></i>  Seat Temperature
              <div className="seat-temp-value-side">
                {values.actual_seat_temp}º
              </div>
              <i className="far fa-minus-square" onClick={() => this.changeSeatTemp("-")}></i>
              <div className="air-temp-seter-side">
                {values.seat_temp}
              </div>
              <i className="far fa-plus-square" onClick={() => this.changeSeatTemp("+")}></i>
            </div>
            <div className="volume-side">
              <i className="fas fa-volume-up"></i>  Volume
              <input className="slider-side" type="range" min="0" max="100" step="10" 
                    value={values.volume} id="myRange" onChange={ (e) => this.changeVolume(e) }>
              </input>

          </div>
          </ul>
        </nav>
        <nav className="settings-changes" style={{visibility:values.normal_layout}}>
          <div className="air-temp">
              <i className="fas fa-thermometer-half"></i>  Air Temperature
              <div className="air-temp-value">
                {values.actual_air_temp}º
              </div>
              <i className="far fa-minus-square fa-2x"  onClick={() => this.changeAirTemp("-")}></i>
              <div className="air-temp-seter">
                {values.air_temp}
              </div>
              <i className="far fa-plus-square fa-2x"  onClick={() => this.changeAirTemp("+")}></i>
          </div>
          <div className="seat-temp">
              <i className="fas fa-chair"></i>  Seat Temperature
              <div className="seat-temp-value">
                {values.actual_seat_temp}º
              </div>
              <i className="far fa-minus-square fa-2x" onClick={() => this.changeSeatTemp("-")}></i>
              <div className="air-temp-seter">
                {values.seat_temp}
              </div>
              <i className="far fa-plus-square fa-2x" onClick={() => this.changeSeatTemp("+")}></i>
          </div>
          <div className="volume">
              <i className="fas fa-volume-up"></i>  Volume
              <input className="slider" type="range" min="0" max="100" step="10" 
                    value={values.volume} id="myRange" onChange={ (e) => this.changeVolume(e) }>
              </input>

          </div>
        </nav>

      </div>
    );
  }
}

export default Settings;

