import React, { Component } from 'react'
import {
  Button,
  Header,
  Icon,
  Menu,
  Responsive,
  Modal,
  Sidebar,
} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import './Navbar.css'


class Navbar extends Component {
    state = {}
  
    handleSidebarHide = () => this.setState({ sidebarOpened: false })
  
    handleToggle = () => this.setState({ sidebarOpened: true })
  
    render() {
      const { children } = this.props
      const { sidebarOpened } = this.state
  
      return (
        <Responsive
        as={Sidebar.Pusher}>
  
        <Sidebar 
        className='navbarColor'
        inverted
          as={Menu}
          animation='push'
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
            
            <Menu.Item as='a'><Link to ='/nousconnaitre'onClick={this.handleSidebarHide} className="liens">Qui sommes-nous?</Link></Menu.Item>
            <Menu.Item as='a'><Link to ='/liensutiles'onClick={this.handleSidebarHide} className="liens">Liens utiles</Link></Menu.Item>
            <Menu.Item as='a'><Link to ='/nousrejoindre'onClick={this.handleSidebarHide} className="liens"> Nous rejoindre</Link></Menu.Item>
          </Sidebar>
  

          <Sidebar.Pusher dimmed={sidebarOpened}>
              <Menu className='navbarColor' inverted>
                <Menu.Item onClick={this.handleToggle}className='nav'>
                  <Icon name='sidebar' />
                </Menu.Item>

                <Menu.Item position='left' className="navbarTitle">
                <Link to ='/' className='navLink' ><Icon name ='tree' className='navIcon'></Icon>ASSOCIATION DEFENSE PRA LOUP MOLANES<Icon name ='tree' className='navIcon'></Icon></Link>
                </Menu.Item>

                
    <Menu.Item position='right'>
    <Link to ='/users/login'  > <Button className='logBtn'>Log-in</Button></Link>
    </Menu.Item>
  
              </Menu>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

export default Navbar

// import React, { Component } from 'react'
// import { Dropdown, Menu } from 'semantic-ui-react'
// import './Navbar.css'
// import { Link, NavLink } from 'react-router-dom';


// export default class Navbar extends Component {
//     state = {}

//   handleSidebarHide = () => this.setState({ sidebarOpened: false })

//   handleToggle = () => this.setState({ sidebarOpened: true })

//     render() {
//         const { sidebarOpened } = this.state

//         return (
//             <div>
//                 <Menu attached='top' className="navbarColor">
//                     <Dropdown item icon='bars' simple className="burger">
//                         <Dropdown.Menu >
//                            <Link onClick={this.handleSidebarHide} to='/nousconnaitre'>Qui sommes-nous?</Link>
//                             <Dropdown.Item onClick={this.handleSidebarHide} as={NavLink} to='/liensutiles'>Liens utiles</Dropdown.Item>
//                             <Dropdown.Item onClick={this.handleSidebarHide} as={NavLink} to='/nousrejoindre'>Nous rejoindre</Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>

//                     <Menu.Menu position='right' className="navbarTitle">
//                         <Link to='/' className="association">ASSOCIATION DEFENSE PRA LOUP MOLANES</Link>

//                     </Menu.Menu>
//                     {/* <Menu.Item className="login"
//                         name="login"
//                         active={activeItem === "login"}
//                         onClick={this.handleItemClick}>Log in</Menu.Item> */}
//                 </Menu>


//             </div>
//         )
//     }
// }
