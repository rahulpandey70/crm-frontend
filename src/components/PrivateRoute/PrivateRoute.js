import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const auth = true;
const PrivateRoute = ({ children, ...rest }) => {
	return auth ? (
		<>
			<Outlet />
			{children}
		</>
	) : (
		<Navigate to="/" />
	);
};

export default PrivateRoute;
