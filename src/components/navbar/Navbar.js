import React, { Component } from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom';


export default class Navbar extends Component {
    state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

    render() {
        const { sidebarOpened } = this.state

        return (
            <div>
                <Menu attached='top' className="navbarColor">
                    <Dropdown item icon='bars' simple className="burger">
                        <Dropdown.Menu >
                           <Link onClick={this.handleSidebarHide} to='/nousconnaitre'>Qui sommes-nous?</Link>
                            <Dropdown.Item onClick={this.handleSidebarHide} as={NavLink} to='/liensutiles'>Liens utiles</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleSidebarHide} as={NavLink} to='/nousrejoindre'>Nous rejoindre</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Menu position='right' className="navbarTitle">
                        <Link to='/' className="association">ASSOCIATION DEFENSE PRA LOUP MOLANES</Link>

                    </Menu.Menu>
                    {/* <Menu.Item className="login"
                        name="login"
                        active={activeItem === "login"}
                        onClick={this.handleItemClick}>Log in</Menu.Item> */}
                </Menu>


            </div>
        )
    }
}
