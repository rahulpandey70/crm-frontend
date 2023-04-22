import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginSuccess } from "../../redux-toolkit/slice/loginSlice";
import { getNewAccessToken } from "../../redux-toolkit/actions/userActions";

const PrivateRoute = ({ children, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.login);

	useEffect(() => {
		const updateJwtToken = async () => {
			const result = await getNewAccessToken();
			result && dispatch(loginSuccess());
		};

		updateJwtToken();
		sessionStorage.getItem("accessToken") && dispatch(loginSuccess());
	}, [isAuth, dispatch]);

	return isAuth ? (
		<>
			<Outlet />
			{children}
		</>
	) : (
		<Navigate to="/" />
	);
};

export default PrivateRoute;
