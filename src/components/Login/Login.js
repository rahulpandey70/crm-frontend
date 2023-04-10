import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Login = ({ handleOnChange, email, password }) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Login</h1>
					<hr />
					<Form className="mt-4">
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
					<a href="#">Forget Password?</a>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;
