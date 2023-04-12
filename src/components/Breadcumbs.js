import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Breadcumbs = ({ page }) => {
	const navigate = useNavigate();
	return (
		<Breadcrumb className="mt-4">
			<Breadcrumb.Item onClick={() => navigate("/")}>Home</Breadcrumb.Item>
			<Breadcrumb.Item active>{page}</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default Breadcumbs;
