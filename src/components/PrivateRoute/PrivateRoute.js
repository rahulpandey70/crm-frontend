import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { loginSuccess } from "../../redux-toolkit/slice/loginSlice";
import { getNewAccessToken } from "../../redux-toolkit/actions/userActions";

import { getUserProfile } from "../../redux-toolkit/actions/userActions";

const PrivateRoute = ({ children, ...rest }) => {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.login);
	const {
		user: { _id },
	} = useSelector((state) => state.user);

	useEffect(() => {
		const updateJwtToken = async () => {
			const result = await getNewAccessToken();
			if (result) {
				dispatch(loginSuccess());
				dispatch(getUserProfile());
			}
		};

		!sessionStorage.getItem("accessToken") &&
			localStorage.getItem("crmRfToken") &&
			updateJwtToken();

		if (!isAuth && sessionStorage.getItem("accessToken")) {
			dispatch(loginSuccess());
			dispatch(getUserProfile());
		}

		_id && dispatch(getUserProfile());
	}, [isAuth, dispatch, _id]);

	return isAuth ? (
		<>
			<Outlet />
			{children}
		</>
	) : (
		<>
			<Navigate to="/" />
		</>
	);
};

export default PrivateRoute;
