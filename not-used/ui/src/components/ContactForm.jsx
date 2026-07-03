import axios from "axios";
import { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "../scss/contactform.scss";

const ContactForm = () => {
	const [show, setShow] = useState(false);

	const handleClose = () => {
		setShow(false);
		window.location.reload(false);
	};
	const handleShow = () => setShow(true);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const fetchMessage = (event) => {
		event.preventDefault();

		const options = {
			method: "POST",
			url: "/api/message",
			headers: { "Content-Type": "application/json" },
			data: { name: name, email: email, message: message },
		};

		axios
			.request(options)
			.then(function (response) {
				handleShow();
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	return (
		<>
			<div className="form-outter">
				<h3 className="mb-4">Get in Touch</h3>
				<Form onSubmit={fetchMessage}>
					<Form.Group
						controlId="exampleForm.ControlInput1"
						className="mb-3"
					>
						<Form.Control
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
							type="name"
							placeholder="Name"
							required
						/>
					</Form.Group>
					<Form.Group
						controlId="exampleForm.ControlInput1"
						className="mb-3"
					>
						<Form.Control
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
							type="email"
							placeholder="Email adderss"
							required
						/>
					</Form.Group>

					<Form.Group
						controlId="exampleForm.ControlTextarea1"
						className="mb-3"
					>
						<Form.Control
							value={message}
							onChange={(e) => {
								setMessage(e.target.value);
							}}
							as="textarea"
							rows={3}
							placeholder="Message"
							required
						/>
					</Form.Group>
					<Button type="submit">SUBMIT NOW</Button>
				</Form>
				<Modal
					show={show}
					onHide={handleClose}
					className="submitted-zindex"
				>
					<Modal.Header closeButton>
						<Modal.Title>Submitted !</Modal.Title>
					</Modal.Header>
					<Modal.Body>We have received your message.</Modal.Body>
				</Modal>
			</div>
		</>
	);
};

export default ContactForm;
