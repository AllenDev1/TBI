import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/logo.svg";
import "../scss/nav.scss";
import Offcanvas from "react-bootstrap/Offcanvas";
import home from "../assets/_company website/home.svg";
import ser from "../assets/_company website/Vector-1.svg";
import work from "../assets/_company website/Vector-2.svg";
import contact from "../assets/_company website/Vector-3.svg";
import about from "../assets/_company website/Vector.svg";

const Navbars = () => {
	let navigate = useNavigate();

	const listenScrollEvent = (event) => {
		if (window.scrollY < 10) {
			document.getElementById("navbar-top").style.filter = "none";
		} else if (window.scrollY > 10) {
			document.getElementById("navbar-top").style.filter =
				"drop-shadow(4px 4px 4px rgba(0, 0, 0, 0.25))";
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listenScrollEvent);
		return () => window.removeEventListener("scroll", listenScrollEvent);
	}, []);

	return (
		<>
			{["sm"].map((expand) => (
				<Navbar
					// fixed={window.screen.width >= 994 ? "top" : "bottom"}
					collapseOnSelect
					expand="lg"
					variant="dark"
					className="navbar-top"
					id="navbar-top"
					key="nav"
				>
					<Container className="navbar-container">
						<Navbar.Brand
							href="/"
							className="main-logo"
							id="main-logo"
						>
							<img src={Logo} alt="..." id="mainLogoImage" />
						</Navbar.Brand>
						<div className="mobile-nav-menu">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
							>
								<img src={home} alt="..." />
								Home
							</NavLink>
							<NavLink
								to="/works"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
							>
								<img src={work} alt="..." />
								Works
							</NavLink>
							<NavLink
								to="/services"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
							>
								<img src={ser} alt="..." />
								Services
							</NavLink>
							<NavLink
								to="/about"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
							>
								<img src={about} alt="..." />
								About
							</NavLink>
							<NavLink
								to="/contact"
								className={({ isActive }) =>
									isActive ? "active" : ""
								}
							>
								<img src={contact} alt="..." />
								Contact
							</NavLink>
						</div>
						<Navbar.Toggle
							aria-controls={`offcanvasNavbar-expand-${expand}`}
							className="toggle-mobile"
						/>
						<Navbar.Offcanvas
							id={`offcanvasNavbar-expand-${expand}`}
							aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
							placement="end"
							className="nav-links"
						>
							<Offcanvas.Header closeButton>
								<Offcanvas.Title
									id={`offcanvasNavbarLabel-expand-${expand}`}
								>
									The Brilliant Ideas
								</Offcanvas.Title>
							</Offcanvas.Header>
							<Offcanvas.Body>
								<Nav className="nav-links-nav">
									<NavLink
										to="/"
										className={({ isActive }) =>
											isActive ? "active" : ""
										}
									>
										Home
									</NavLink>
									<NavLink
										to="/works"
										className={({ isActive }) =>
											isActive ? "active" : ""
										}
									>
										Works
									</NavLink>
									<NavLink
										to="/services"
										className={({ isActive }) =>
											isActive ? "active" : ""
										}
									>
										Services
									</NavLink>
									<NavLink
										to="/about"
										className={({ isActive }) =>
											isActive ? "active" : ""
										}
									>
										About
									</NavLink>
									<Button
										onClick={() => {
											let path = `/contact`;
											navigate(path);
										}}
									>
										Contact
									</Button>
								</Nav>
							</Offcanvas.Body>
						</Navbar.Offcanvas>
					</Container>
				</Navbar>
			))}
		</>
	);
};

export default Navbars;
