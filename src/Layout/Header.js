import React from "react";
import logo from "../assets/image/logo.png";
import { Nav, Navbar } from "react-bootstrap";

const Header = () => {
	return (
		<Navbar
			collapseOnSelect
			bg="info"
			variant="dark"
			expand="md"
			style={{ zIndex: "2" }}
		>
			<Navbar.Brand>
				<img src={logo} alt="logo" width="50px" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
				<Nav className="ml-auto">
					<Nav.Link href="/">Dashboard</Nav.Link>
					<Nav.Link href="/">Tickets</Nav.Link>
					<Nav.Link href="/">Logout</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
