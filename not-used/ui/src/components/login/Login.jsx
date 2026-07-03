import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Navbars from "../navbar";
import TopFooterCard from "../TopFooterCard";
import "./login.scss";

const Login = () => {
	return (
		<>
			<Navbars />
			<h1 className="dream-pitching">"Dream pitching"</h1>
			<Container className="about-body login-container form-outter">
				<Form className="">
					<h1>Login</h1>
					<Form.Group className="mb-3" controlId="formGroupEmail">
						<Form.Label>Email address</Form.Label>
						<Form.Control type="email" placeholder="Enter email" />
					</Form.Group>
					<Form.Group className="mb-3" controlId="formGroupPassword">
						<Form.Label>Password</Form.Label>
						<Form.Control type="password" placeholder="Password" />
					</Form.Group>
					<Button>Login</Button>
				</Form>
			</Container>
			<TopFooterCard />
		</>
	);
};

export default Login;
