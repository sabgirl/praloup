import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import './Navbar.css'
import { Link } from 'react-router-dom';


export default class Navbar extends Component {
    state = {}
  
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
    render() {
      const { activeItem } = this.state
  
      return (
    <div>
        <Menu attached='top' className="navbarColor">
            <Dropdown item icon='bars' simple className="burger">
                <Dropdown.Menu >
                <Link to='/nousconnaitre'><Dropdown.Item>Qui sommes-nous?</Dropdown.Item></Link>
                <Link to='/liensutiles'><Dropdown.Item>Liens utiles</Dropdown.Item></Link>
                <Link to='/nousrejoindre'><Dropdown.Item>Nous rejoindre</Dropdown.Item></Link>
                </Dropdown.Menu>
            </Dropdown>

            <Menu.Menu position='right' className="navbarTitle">
               <Link to='/' className="association">ASSOCIATION DEFENSE PRA LOUP MOLANES</Link>
                
            </Menu.Menu>
            <Menu.Item className="login"
            name="login"
            active={activeItem ==="login"}
            onClick={this.handleItemClick}>Log in</Menu.Item>
        </Menu>


    </div>
)
      }}
