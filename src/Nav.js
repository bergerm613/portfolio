import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import logo from './images/logo.png'

class Nav extends Component {
    render() {
        const textColorClass = this.props.location.pathname === '/experience' ? 'black' : 'white'

        return (
            <div className="nav">
                <Link to="/">
                    <img src={logo} alt='' height='125px' className="logo" />
                </Link>

                <div className="nav_items">
                    <Link to="/about" className={'comfortaa nav_item ' + textColorClass}>Who's Michelle</Link>
                    <Link to="/experience" className={'comfortaa nav_item ' + textColorClass}>What's She Done</Link>
                    <Link to="/contact" className={'comfortaa nav_item ' + textColorClass}>Ok, Where Can I Find Her</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Nav);
