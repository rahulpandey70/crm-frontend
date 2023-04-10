import React from "react";
import propTypes from "prop-types";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const PasswordReset = ({
	handleOnChange,
	handleOnRestSubmit,
	formLoader,
	email,
}) => {
	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Reset Password</h1>
					<hr />
					<Form
						className="mt-4"
						autoComplete="off"
						onSubmit={handleOnRestSubmit}
					>
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
						<Button type="submit" className="mt-2">
							Reset Password
						</Button>
					</Form>
					<hr />
				</Col>
			</Row>
			<Row>
				<Col>
					<a href="#" onClick={() => formLoader("login")}>
						Login Now
					</a>
				</Col>
			</Row>
		</Container>
	);
};

export default PasswordReset;

PasswordReset.propTypes = {
	handleOnChange: propTypes.func.isRequired,
	handleOnRestSubmit: propTypes.func.isRequired,
	formLoader: propTypes.func.isRequired,
	email: propTypes.string.isRequired,
};
