import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Breadcumbs = ({ page }) => {
	return (
		<Breadcrumb className="mt-4">
			<LinkContainer to="/">
				<Breadcrumb.Item>Home</Breadcrumb.Item>
			</LinkContainer>
			<Breadcrumb.Item active>{page}</Breadcrumb.Item>
		</Breadcrumb>
	);
};

export default Breadcumbs;
