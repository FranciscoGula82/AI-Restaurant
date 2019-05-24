import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import menu_img from './menu.png';


class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = this.props.getMyState();

  }

  updateProps(){
    this.props.upMyState(this.state);
  }

  showWaitressMsg(){
    let waitress = this.state.waitress;
    if(waitress == 'visible')
      waitress = 'hidden';
    else
      waitress = 'visible';
    this.setState({waitress});
    this.updateProps()
  }

  changeLayout(){
    let sidebar_layout = this.state.sidebar_layout;
    let normal_layout = this.state.normal_layout;
    if(sidebar_layout == 'visible'){
      sidebar_layout = 'hidden';
      normal_layout = 'visible';
    }
    else{
      sidebar_layout = 'visible';
      normal_layout = 'hidden';
    }
    this.setState({sidebar_layout});
    this.setState({normal_layout});
    setTimeout(this.updateProps.bind(this), 1000);
  }




  render(){
    const values = this.state;
    console.log(values);
    return (
      <div className="container-fluid">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar" style={{visibility:values.sidebar_layout}}>
          <div className="sidebar-sticky">
            <ul className="nav flex-column">
              <li className="nav-item">
              	<Link to="/Menu"><i className="fas fa-utensils"></i></Link>
                <Link to="/Menu">   Menu</Link>
              </li>
              <li className="nav-item">
              	<Link to="/Settings"> <i className="fas fa-cog"></i></Link>
                <Link to="/Settings">   Table Settings</Link>
              </li>
              <li className="nav-item">
              	<Link to="/Pay"><i className="far fa-money-bill-alt"></i></Link>
                <Link to="/Pay">   Pay</Link>
              </li>
              <li className="nav-item">
              	<i className="fas fa-concierge-bell" onClick={this.showWaitressMsg.bind(this)}></i>
                Call waitress
              </li>
            </ul>      
          </div>
        </nav>
        <nav className="normal-display" style={{visibility:values.normal_layout}}>
          <div className="menu">   
            <Link to="/Menu"><img src={menu_img}/></Link> 
          </div>
          <div className="pay">
          	<Link to="/Pay">PAY</Link>      
            <Link to="/Pay"><i className="fas fa-shopping-cart fa-3x"></i></Link> 
          </div>
          <div className="order">
          	<Link to="/Order">ORDER LIST</Link>      
            <Link to="/Order"><i className="fas fa-clipboard-list fa-4x"></i></Link> 
          </div>
          <div className="waitress">
          	CALL WAITRESS  
            <i className="fas fa-concierge-bell fa-4x" onClick={this.showWaitressMsg.bind(this)}></i> 
          </div>
          <div className="settings">
          	<Link to="/Settings">TABLE SETTINGS</Link>      
            <Link to="/Settings"><i className="fas fa-cog fa-4x"></i></Link> 
          </div>
        </nav>
        <div className="toPlate">
          <button className="foodIsReady" onClick={this.changeLayout.bind(this)}>Food is ready</button>
          <button className="foodFinished" onClick={this.showWaitressMsg.bind(this)}>Finished meal</button>
          <button className="drinkFinished" onClick={this.showWaitressMsg.bind(this)}>Finished beverage</button>
        </div>
        <div className="waitress-msg" style={{visibility:this.state.waitress}}>
          A Waitress is on his way!
        </div>
      </div>
    );
  }
}

export default Homepage;



