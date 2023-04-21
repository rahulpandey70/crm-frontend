import React, { useState } from "react";
import propTypes from "prop-types";
import {
	Button,
	Col,
	Container,
	Form,
	Row,
	Spinner,
	Alert,
} from "react-bootstrap";

import {
	loginPending,
	loginSuccess,
	loginError,
} from "../../redux-toolkit/slice/loginSlice";

import { getUserProfile } from "../../redux-toolkit/actions/userActions";

import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux-toolkit/actions/loginActions";

import { useNavigate } from "react-router-dom";

const Login = ({ formLoader }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { isLoading, isAuth, error } = useSelector((state) => state.login);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		switch (name) {
			case "email":
				setEmail(value);
				break;
			case "password":
				setPassword(value);
				break;
			default:
				break;
		}
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			return alert("Please fill up all the form!");
		}

		dispatch(loginPending());
		//TODO call api to submit the form
		try {
			const auth = await userLogin({ email, password });
			if (auth.status === "error") {
				return dispatch(loginError(auth.message));
			}

			dispatch(loginSuccess());
			dispatch(getUserProfile());
			navigate("/dashboard");
		} catch (error) {
			dispatch(loginError(error.message));
		}
	};

	return (
		<Container>
			<Row>
				<Col>
					<h1 className="text-info text-center">Login</h1>
					<hr />
					{error && (
						<Alert variant="danger" className="text-center">
							{error}
						</Alert>
					)}
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
						{isLoading && <Spinner variant="primary" animation="border" />}
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
	formLoader: propTypes.func.isRequired,
};
