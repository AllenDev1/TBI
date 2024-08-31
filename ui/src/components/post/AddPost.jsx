import React from "react";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Navbars from "../navbar";
import "./addpost.scss";
import TopFooterCard from "../TopFooterCard";

const AddPost = () => {
	return (
		<>
			<Navbars />
			<div className="addpost">
				<Container>
					<Form className="add-post-form">
						<h3>About Your Idea</h3>
						<Row className="mb-3" xs={1} md={2}>
							<Form.Group as={Col} controlId="forTitle">
								<Form.Label>Title</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your title"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="forCategory">
								<Form.Label>Category</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your category"
								/>
							</Form.Group>
						</Row>
						<Row>
							<Form.Group className="mb-3" controlId="forConcept">
								<Form.Label>Concept Your Idea</Form.Label>
								<Form.Control
									as="textarea"
									rows={4}
									placeholder="Concept your plan.."
								/>
							</Form.Group>
						</Row>
						<Row className="mb-3">
							<Form.Group
								className="mb-3"
								controlId="forDescription"
							>
								<Form.Label>Describe Your Idea</Form.Label>
								<Form.Control
									as="textarea"
									rows={8}
									placeholder="Describe your plan.."
								/>
							</Form.Group>
						</Row>
						<h5 className="mt-4 credit-others-h">Credit others</h5>
						<Row className="credit-name mb-3" xs={1} md={3}>
							<Form.Group as={Col} controlId="forCreditName1">
								<Form.Label>Credit Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your credit name"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="forCreditEmail1">
								<Form.Label>Credit Email</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your credit email"
								/>
							</Form.Group>
							<Form.Group
								as={Col}
								controlId="forCreditPersentage1"
							>
								<Form.Label>Credit Precentage</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your credit percentage"
								/>
							</Form.Group>
						</Row>
						<Row className="mb-3" xs={1} md={3}>
							<Form.Group as={Col} controlId="forCreditName1">
								<Form.Label>Credit Name</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your credit name"
								/>
							</Form.Group>
							<Form.Group as={Col} controlId="forCreditEmail1">
								<Form.Label>Credit Email</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your credit email"
								/>
							</Form.Group>
							<Form.Group
								as={Col}
								controlId="forCreditPersentage1"
							>
								<Form.Label>Credit Precentage</Form.Label>
								<Form.Control
									type="text"
									placeholder="Enter your credit percentage"
								/>
							</Form.Group>
						</Row>
						<Form.Group controlId="formFileLg" className="mb-3">
							<Form.Label>Attach your file</Form.Label>
							<Form.Control type="file" size="lg" />
						</Form.Group>
						<p className="text-muted">
							By continuing, you agree to our Terms of Service and
							Privacy Policy.
						</p>
						<Button className="submit-button" variant="outline-success">Submit</Button>
					</Form>
				</Container>
			</div>
			<TopFooterCard />
		</>
	);
};

export default AddPost;
