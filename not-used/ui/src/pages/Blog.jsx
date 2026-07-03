import React from "react";
import Navbars from "../components/navbar";
import { Container, Row, Col, Card, Pagination } from "react-bootstrap";

const Blog = () => {
	return (
		<>
			<Navbars />
			<Container className="work-container">
				<Row xs={1} md={1} className="g-4">
					{Array.from({ length: 2 }).map((_, idx) => (
						<Col key={idx}>
							<Card>
								<Card.Img
									variant="top"
									src="https://img.freepik.com/free-vector/tree_1308-36471.jpg?w=360"
								/>
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a longer card with supporting
										text below as a natural lead-in to
										additional content. This content is a
										little bit longer.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					))}
				</Row>

				{/* add pagination */}

				<Row className="justify-content-center">
					<Pagination>
						<Pagination.Prev />
						<Pagination.Item active>{1}</Pagination.Item>
						<Pagination.Item>{2}</Pagination.Item>
						<Pagination.Item>{3}</Pagination.Item>
						<Pagination.Item>{4}</Pagination.Item>
						<Pagination.Item>{5}</Pagination.Item>
						<Pagination.Next />
					</Pagination>
				</Row>
			</Container>
		</>
	);
};

export default Blog;
