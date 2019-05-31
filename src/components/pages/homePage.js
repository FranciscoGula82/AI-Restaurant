import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import menu_img from './menu.png';
import couvert from './couvert.png';
import water from './water.jpg';


class Homepage extends Component {
  constructor(props){
    super(props);
    this.state = this.props.getMyState();

  }

  updateProps(){
    console.log(this.state);
    this.props.upMyState(this.state);
  }

  showWaitressMsg(msg){
    let waitress = this.state.waitress;
    let menu_tabs = this.state.menu_tabs;
    var i;
    if(msg === 'food'){ //open deserts tab on MENU
      for(i = 0; i < menu_tabs.length; i++){
        if(menu_tabs[i] === 'visible'){
          menu_tabs[i] = 'hidden';
          break;
        }
      }
      menu_tabs[4] = 'visible';
      this.setState({menu_tabs});
    }
    else if(msg === 'drink'){ //open drinks tab on MENU
      for(i = 0; i < menu_tabs.length; i++){
        if(menu_tabs[i] === 'visible'){
          menu_tabs[i] = 'hidden';
          break;
        }
      }
      menu_tabs[5] = 'visible';
      this.setState({menu_tabs});
    }
    if(waitress === 'visible')
      waitress = 'hidden';
    else
      waitress = 'visible';

    this.setState({waitress});
    console.log(this.state);
    setTimeout(this.updateProps.bind(this), 1000);
  }

  changeLayout(){
    let sidebar_layout = this.state.sidebar_layout;
    let normal_layout = this.state.normal_layout;
    let food_ready = this.state.food_ready;
    if(sidebar_layout === 'visible'){
      sidebar_layout = 'hidden';
      normal_layout = 'visible';
    }
    else{
      sidebar_layout = 'visible';
      normal_layout = 'hidden';
    }
    
    this.setState({food_ready});
    this.setState({sidebar_layout});
    this.setState({normal_layout});
    setTimeout(this.updateProps.bind(this), 1000);
  }

  showOrder(a){
    let order = this.state.order;
    let pay = this.state.pay;
    let food_ready = this.state.food_ready;
    if( a === 'close'){
      order = 'hidden';
      pay = 0.4;
      food_ready = 'hidden';
    }

    else if( a === 'open'){
      order = 'visible';
      pay = 0.4;
    }

    else if( a === 'pay'){
      order = 'visible';
      pay = 1;
      this.setState({pay});
    }
    this.setState({food_ready});
    this.setState({order});
    setTimeout(this.updateProps.bind(this), 1000);
  }



  render(){
    const values = this.state;
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
              <li className="nav-item" onClick={() => this.showOrder('open')}>
                <i className="fas fa-clipboard-list"></i>
                  Order List
              </li>
              <li className="nav-item">
              	<i className="fas fa-concierge-bell" onClick={this.showWaitressMsg.bind(this)}></i>
                  Call waitress
              </li>
              <li className="nav-item" onClick={() => this.showOrder('pay')}>
                <i className="far fa-money-bill-alt"></i>
                  Pay
              </li>
            </ul>      
          </div>
        </nav>
        <nav className="normal-display" style={{visibility:values.normal_layout}}>
          <div className="menu">   
            <Link to="/Menu"><img src={menu_img} alt="menu"/></Link> 
          </div>
          <div className="pay" onClick={() => this.showOrder('pay')}>
            PAY    
            <i className="fas fa-shopping-cart fa-3x" onClick={() => this.showOrder('pay')}></i> 
          </div>
          <div className="order">
            ORDER LIST     
            <i className="fas fa-clipboard-list fa-4x" onClick={() => this.showOrder('open')}></i> 
          </div>
          <div className="waitress">
          	CALL WAITRESS  
            <i className="fas fa-concierge-bell fa-4x" onClick={() => this.showWaitressMsg('call')}></i> 
          </div>
          <div className="settings">
          	<Link to="/Settings">TABLE SETTINGS</Link>      
            <Link to="/Settings"><i className="fas fa-cog fa-4x"></i></Link> 
          </div>
        </nav>
        <div className="toPlate">
          <button className="foodIsReady" onClick={this.changeLayout.bind(this)}>Food is ready</button>
          <button className="foodFinished" onClick={() => this.showWaitressMsg('food')}>Finished meal</button>
          <button className="drinkFinished" onClick={() => this.showWaitressMsg('drink')}>Finished beverage</button>
        </div>

        <div className="orderList" style={{visibility:values.order}}>
          <i className="fas fa-times-circle" onClick={() => this.showOrder('close')}></i>
          Order List
          <div className="meals">
              {values.meals[0][0]}
              <div className="mealNumber">{values.order_list[0][0]}</div>
              <img src={couvert} alt="couvert"/>
              <div className="ready" style={{visibility:values.food_ready}}>Delivered</div>
          </div>
          <div className="meals">
              {values.meals[5][0]}
              <div className="mealNumber">{values.order_list[5][0]}</div>
              <img src={water} alt="water"/>
              <div className="ready" style={{visibility:values.food_ready}}>Delivered</div>
          </div>
          <div className="payButton" style={{opacity:values.pay}}>Pay</div>
        </div>
      </div>
    );
  }
}

export default Homepage;



