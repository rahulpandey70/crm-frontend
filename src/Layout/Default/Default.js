import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

const Default = ({ children }) => {
	return (
		<>
			<div className="default-layout">
				<header className="header mb-2">
					<Header />
				</header>
				<main className="main">
					<Outlet />
					{children}
				</main>
				<footer className="footer">
					<Footer />
				</footer>
			</div>
		</>
	);
};

export default Default;
