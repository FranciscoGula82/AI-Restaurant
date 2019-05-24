import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

import {
  Link
} from 'react-router-dom'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
});


class Menu extends Component {
  constructor(props){
    super(props);
    this.state = this.props.getMyState();
    console.log(this.state);

  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render(){
    const { classes } = this.props;
    const { value } = this.state;

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
              <Link to="/Menu">   Menu</Link>
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

        <div className={styles("").root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={this.handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="scrollable"
              scrollButtons="auto"
              >
              <Tab label="Entrees" />
              <Tab label="Salads" />
              <Tab label="Pasta" />
              <Tab label="Meat" />
              <Tab label="Fish" />
              <Tab label="Desert" />
              <Tab label="Drinks" />
            </Tabs>
          </AppBar>
          {value === 0 && <TabContainer>Item One</TabContainer>}
          {value === 1 && <TabContainer>Item Two</TabContainer>}
          {value === 2 && <TabContainer>Item Three</TabContainer>}
          {value === 3 && <TabContainer>Item Four</TabContainer>}
          {value === 4 && <TabContainer>Item Five</TabContainer>}
          {value === 5 && <TabContainer>Item Six</TabContainer>}
          {value === 6 && <TabContainer>Item Seven</TabContainer>}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Menu);



