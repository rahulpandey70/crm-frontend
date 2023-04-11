import React from "react";
import { Breadcrumb } from "react-bootstrap";

const Breadcumbs = ({ page }) => {
	return (
		<Breadcrumb className="mt-4">
			<Breadcrumb.Item href="/">Home</Breadcrumb.Item>
			<Breadcrumb.Item active>{page}</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default Breadcumbs;
