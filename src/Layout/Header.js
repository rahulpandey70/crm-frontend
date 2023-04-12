import React from "react";
import logo from "../assets/image/logo.png";
import { Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
	const navigate = useNavigate();
	return (
		<Navbar
			collapseOnSelect
			bg="info"
			variant="dark"
			expand="md"
			style={{ zIndex: "1" }}
		>
			<Navbar.Brand className="ms-2">
				<img src={logo} alt="logo" width="50px" />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse
				id="basic-navbar-nav"
				className="justify-content-end me-2"
			>
				<Nav className="ml-auto">
					<LinkContainer to="/dashboard">
						<Nav.Link>Dashboard</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/all-tickets">
						<Nav.Link>Tickets</Nav.Link>
					</LinkContainer>
					<Nav.Link onClick={() => navigate("/")}>Logout</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
