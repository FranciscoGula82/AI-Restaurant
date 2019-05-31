import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'

class Header extends Component {
  constructor(props){
    super(props);
    this.state = this.props.generalState;
  }
  render(){
    this.state = this.props.getMyState();
    return (
      <header>
        
      	<div className = "logo">
      	RESTAURANT
      	</div>

        <div className="back-home">   
          <Link to="/"><i className="fas fa-home fa-3x"></i></Link> 
        </div>
        <div className="waitress-msg" style={{visibility:this.state.waitress}}>
          A waitress is on his way!
        </div>
      	{/*<nav>
      		<ul>
      			<li className="first">
      				<Link to="/">Home</Link>
      			</li>
      			<li>
              <Link to="/Products">Products</Link>
      			</li>
      			<li className="last">
      				<a href="#">Menu</a>
      			</li>
      		</ul>
      	</nav>*/}

      </header>
    );
  }
}

export default Header;
