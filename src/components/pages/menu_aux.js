import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'




class Menu extends Component {
	constructor(props) {
    super(props);
    this.foodList = ['hidden', 'hidden', 'hidden', 'hidden', 'hidden', 'hidden']
    this.starter = 'hidden';
    this.salad = 'hidden';
    this.meat = 'hidden';
    this.fish = 'hidden';
    this.desert = 'hidden';
    this.drinks = 'hidden';
    this.nowOpen = null;
  }

	handleClick2(pageName) {
	  if(this.nowOpen != null){
      this.nowOpen = 'hidden';
    }

    if(pageName == "starter"){
      this.starter = 'visible';
      this.nowOpen = 'starter';
    }
    else if(pageName == "salad"){
      this.salad = 'visible';
      this.nowOpen = 'salad';
    }
    else if(pageName == "meat"){
      this.meat = 'visible';
      this.nowOpen = 'meat';
    }
    else if(pageName == "fish"){
      this.fish = 'visible';
      this.nowOpen = 'fish';
    }
    else if(pageName == "desert"){
      this.desert = 'visible';
      this.nowOpen = 'desert';
    }
    else if(pageName == "drinks"){
      this.desert = 'visible';
      this.nowOpen = 'desert';
    }
    this.forceUpdate();
	}

  handleClick(n) {
    var i;
    for(i = 0; i < this.foodList.length; i++){
      if(this.foodList[i] == 'visible'){
        this.foodList[i] = 'hidden';
        break;
      }
    }
    this.foodList[n] = 'visible';
    console.log(this.foodList);
    this.forceUpdate();

  }
	

	
  render(){
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
        
				
        <button className="tablink" onClick={() => this.handleClick(0)}>Starters</button>
        <button className="tablink" onClick={() => this.handleClick(1)}>Salads</button>
        <button className="tablink" onClick={() => this.handleClick(2)}>Meat</button>
        <button className="tablink" onClick={() => this.handleClick(3)}>Fish</button>
        <button className="tablink" onClick={() => this.handleClick(4)}>Deserts</button>
        <button className="tablink" onClick={() => this.handleClick(5)}>Drinks</button>

        <div className="tabcontent" style={{visibility:this.foodList[0]}}>
				  <h3>Starter</h3>
				  <p>Home is where the heart is..</p>
				</div>
        <div className="tabcontent" style={{visibility:this.foodList[1]}}>
          <h3>Salads</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.foodList[2]}}>
          <h3>Meat</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.foodList[3]}}>
          <h3>Fish</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.foodList[4]}}>
          <h3>Desert</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.foodList[5]}}>
          <h3>Drinks</h3>
          <p>Home is where the heart is..</p>
        </div>

        {/*<button className="tablink" onClick={() => this.handleClick("starter")}>Starters</button>
        <button className="tablink" onClick={() => this.handleClick("salad")}>Salads</button>
        <button className="tablink" onClick={() => this.handleClick("meat")}>Meat</button>
        <button className="tablink" onClick={() => this.handleClick("fish")}>Fish</button>
        <button className="tablink" onClick={() => this.handleClick("desert")}>Deserts</button>
        <button className="tablink" onClick={() => this.handleClick("drinks")}>Drinks</button>

        <div className="tabcontent" style={{visibility:this.starter}}>
          <h3>Starter</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.salad}}>
          <h3>Salads</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.meat}}>
          <h3>Meat</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.fish}}>
          <h3>Fish</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.desert}}>
          <h3>Desert</h3>
          <p>Home is where the heart is..</p>
        </div>
        <div className="tabcontent" style={{visibility:this.drinks}}>
          <h3>Drinks</h3>
          <p>Home is where the heart is..</p>
        </div>*/}

				
      </div>
    );
  }
 }




 export default Menu;



