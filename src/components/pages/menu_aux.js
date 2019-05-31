import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import couvert from './couvert.png';
import water from './water.jpg';


class Menu extends Component {
	constructor(props) {
    super(props);
    this.state = this.props.getMyState();
    console.log(this.state);
  }

  updateProps(){
    console.log(this.state);
    this.props.upMyState(this.state);
  }

  dropMenu(n) {
    var i;
    let menu_tabs = this.state.menu_tabs; 
    for(i = 0; i < menu_tabs.length; i++){
      if(menu_tabs[i] === 'visible'){
        menu_tabs[i] = 'hidden';
        break;
      }
    }
    menu_tabs[n] = 'visible';
    this.setState({menu_tabs})
    setTimeout(this.updateProps.bind(this), 1000);
  }
	
  upMealNumber(i, j, diff){
    console.log(i);
    console.log(j);
    console.log(diff);
    let order_list = this.state.order_list;

    if(diff === "+")
      order_list[i][j]++
    else if(order_list[i][j] > 0)
      order_list[i][j]--

    this.setState({order_list})
    setTimeout(this.updateProps.bind(this), 1000);

  }

	
  render(){
    const values = this.state;
    return (
      <div className="container-fluid">
        <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <i className="fas fa-home"></i>
              <Link to="/">  Home</Link><span className="sr-only">(current)</span>
            </li>
            <li className="nav-item">
              <i className="fas fa-utensils"></i>
              <Link to="/Products">   Menu</Link>
            </li>
            <li className="nav-item">
              <i className="fas fa-cog"></i>
              <Link to="/Products">   Definitions</Link>
            </li>
            <li className="nav-item">
              <i className="far fa-money-bill-alt"></i>
              <Link to="/Products">   Pay</Link>
            </li>
            <li className="nav-item">
              <i className="fas fa-concierge-bell"></i>
              <Link to="/Products">   Call waitress</Link>
            </li>
          </ul>      
        </div>
        </nav>
        
				
        <button className="tablink" onClick={() => this.dropMenu(0)}>Starters</button>
        <button className="tablink" onClick={() => this.dropMenu(1)}>Salads</button>
        <button className="tablink" onClick={() => this.dropMenu(2)}>Meat</button>
        <button className="tablink" onClick={() => this.dropMenu(3)}>Fish</button>
        <button className="tablink" onClick={() => this.dropMenu(4)}>Deserts</button>
        <button className="tablink" onClick={() => this.dropMenu(5)}>Drinks</button>

        <div className="tabcontent" style={{visibility:this.state.menu_tabs[0]}}>
				  <h3>Starters</h3>
          <div className="mealTab overflow-auto">
            <div className="meals">
              {values.meals[0][0]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(0, 0, "-")}></i>
              <div className="mealNumber">{values.order_list[0][0]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(0, 0, "+")}></i>
              <img src={couvert} alt="couvert"/>
            </div>
            <div className="meals">
              {values.meals[0][1]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(0, 1, "-")}></i>
              <div className="mealNumber">{values.order_list[0][1]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(0, 1, "+")}></i>
            </div>
          </div>
				</div>

        <div className="tabcontent" style={{visibility:this.state.menu_tabs[1]}}>
          <h3>Salads</h3>
          <div className="mealTab overflow-auto">
            <div className="meals">
              {values.meals[1][0]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(1, 0, "-")}></i>
              <div className="mealNumber">{values.order_list[1][0]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(1, 0, "+")}></i>
            </div>
            <div className="meals">
              {values.meals[1][1]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(1, 1, "-")}></i>
              <div className="mealNumber">{values.order_list[1][1]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(1, 1, "+")}></i>
            </div>
          </div>
        </div>

        <div className="tabcontent" style={{visibility:this.state.menu_tabs[2]}}>
          <h3>Meat</h3>
          <div className="mealTab overflow-auto">
            <div className="meals">
                {values.meals[2][0]}
                <i className="far fa-minus-square" onClick={() => this.upMealNumber(2, 0, "-")}></i>
                <div className="mealNumber">{values.order_list[2][0]}</div>
                <i className="far fa-plus-square" onClick={() => this.upMealNumber(2, 0, "+")}></i>
              </div>
              <div className="meals">
                {values.meals[2][1]}
                <i className="far fa-minus-square" onClick={() => this.upMealNumber(2, 1, "-")}></i>
                <div className="mealNumber">{values.order_list[2][1]}</div>
                <i className="far fa-plus-square" onClick={() => this.upMealNumber(2, 1, "+")}></i>
              </div>
          </div>
        </div>

        <div className="tabcontent" style={{visibility:this.state.menu_tabs[3]}}>
          <h3>Fish</h3>
          <div className="mealTab overflow-auto">
            <div className="meals">
              {values.meals[3][0]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(3, 0, "-")}></i>
              <div className="mealNumber">{values.order_list[3][0]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(3, 0, "+")}></i>
            </div>
            <div className="meals">
              {values.meals[3][1]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(3, 1, "-")}></i>
              <div className="mealNumber">{values.order_list[3][1]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(3, 1, "+")}></i>
            </div>
          </div>
        </div>

        <div className="tabcontent" style={{visibility:this.state.menu_tabs[4]}}>
          <h3>Desert</h3>
          <div className="mealTab overflow-auto">
            <div className="meals">
              {values.meals[4][0]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(4, 0, "-")}></i>
              <div className="mealNumber">{values.order_list[4][0]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(4, 0, "+")}></i>
            </div>
            <div className="meals">
              {values.meals[4][1]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(4, 1, "-")}></i>
              <div className="mealNumber">{values.order_list[4][1]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(4, 1, "+")}></i>
            </div>
          </div>
        </div>

        <div className="tabcontent" style={{visibility:this.state.menu_tabs[5]}}>
          <h3>Drinks</h3>
          <div className="mealTab overflow-auto">
            <div className="meals">
              {values.meals[5][0]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(5, 0, "-")}></i>
              <div className="mealNumber">{values.order_list[5][0]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(5, 0, "+")}></i>
              <img src={water} alt="water"/>
            </div>
            <div className="meals">
              {values.meals[5][1]}
              <i className="far fa-minus-square" onClick={() => this.upMealNumber(5, 1, "-")}></i>
              <div className="mealNumber">{values.order_list[5][1]}</div>
              <i className="far fa-plus-square" onClick={() => this.upMealNumber(5, 1, "+")}></i>
            </div>
          </div>
        </div>
				
      </div>
    );
  }
 }




 export default Menu;



