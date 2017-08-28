import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';

class ToolBar extends React.Component {
	constructor() {
		super();
		this.state = {
			idOngletActive : 0,
			onglets : ['Vidéos']
		};
	}
	render() {
		const navItems = this.state.onglets.map((onglet, index) =>
			<NavItem eventKey={index} href="#">
				{onglet}
			</NavItem>
		);
		return (
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Tractr</a>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav activeKey={this.state.idOngletActive}>
					{navItems}
				</Nav>
			</Navbar>
		);
	}
}

export default ToolBar;