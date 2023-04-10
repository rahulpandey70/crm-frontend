import React from "react";
import propTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login = ({
	handleOnChange,
	handleOnSubmit,
	formLoader,
	email,
	password,
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Login</h1>
					<hr />
					<Form className="mt-4" autoComplete="off" onSubmit={handleOnSubmit}>
						<Form.Group className="mt-2">
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								value={email}
								onChange={handleOnChange}
								placeholder="Enter Email"
								required
							/>
						</Form.Group>
						<Form.Group className="mt-2">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								value={password}
								onChange={handleOnChange}
								placeholder="Enter Password"
								required
							/>
						</Form.Group>
						<Button type="submit" className="mt-2">
							Login
						</Button>
					</Form>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<a href="#" onClick={() => formLoader("reset")}>
						Forget Password?
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;

Login.propTypes = {
	handleOnChange: propTypes.func.isRequired,
	handleOnSubmit: propTypes.func.isRequired,
	formLoader: propTypes.func.isRequired,
	email: propTypes.string.isRequired,
	password: propTypes.string.isRequired,
};
