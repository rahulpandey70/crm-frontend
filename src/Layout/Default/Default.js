import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const Default = ({ children }) => {
	return (
		<div className="default-layut">
			<header className="header">
				<Header />
			</header>
			<main className="main">{children}</main>
			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default Default;
