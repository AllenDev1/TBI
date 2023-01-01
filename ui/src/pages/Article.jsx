import axios from "axios";
import { Buffer } from "buffer";
import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card, Button, CardGroup } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { Link, useNavigate, useParams } from "react-router-dom";
import soc1 from "../assets/Group 148.svg";
import soc2 from "../assets/Group 170.svg";
import soc3 from "../assets/Group 171.svg";
import soc4 from "../assets/Group 172.svg";
import path from "../assets/Path.svg";
import Navbars from "../components/navbar";
import TopFooterCard from "../components/TopFooterCard";
import "../scss/article.scss";

export const convertToSlug = (text) => {
	return text
		.toLowerCase()
		.replace(/ /g, "-")
		.replace(/[^\w-]+/g, "");
};

const Article = () => {
	const navigate = useNavigate();
	const { article_id, article_title_slug } = useParams();

	const [articles, setArticles] = useState();
	const [articledata, setArticlesdata] = useState();

	useEffect(() => {
		fetchArticles();
	}, []);

	useEffect(() => {
		if (articles && articles.length > 0) {
			filterCurrentArticle();
		}
	}, [article_id, article_title_slug, articles]);

	const fetchArticles = () => {
		const options = { method: "GET", url: "/api/blog/" };

		axios
			.request(options)
			.then(function (response) {
				setArticles(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	const filterCurrentArticle = () => {
		// filter current blog
		const idMatch = (article) => {
			return article.id == article_id;
		};

		const currentArticle = articles.filter(idMatch)[0];
		const correctSlug = convertToSlug(currentArticle.title);

		if (article_title_slug !== correctSlug) {
			navigate(`/article/${article_id}/${correctSlug}`);
			return;
		}
		setArticlesdata(currentArticle);
	};

	return (
		<>
			<Navbars />
			<Container className="article-container">
				<Link to="/works" className="back-towork">
					<img src={path} alt="..." /> Back to Works
				</Link>

				{articledata ? (
					<ArticleBlog
						title={articledata.title}
						categories={articledata.categories}
						image={articledata.image}
						createdAt={articledata.createdAt}
						text={articledata.text}
						client={articledata.client}
					/>
				) : (
					<>page not found</>
				)}
				<div className="share-on">
					<p>Share on</p>
					<Col className="social-icon-col">
						<a
							href="https://www.linkedin.com/company/the-brilliant-ideas/"
							target="_blank"
						>
							<img src={soc1} alt=".." />
						</a>
						<a
							href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
							target="_blank"
						>
							<img src={soc2} alt=".." />
						</a>
						<a
							href={`https://twitter.com/intent/tweet?text=${window.location.href}`}
							target="_blank"
						>
							<img src={soc3} alt=".." />
						</a>
						<a href="/">
							<img src={soc4} alt=".." />
						</a>
					</Col>
				</div>
			</Container>
			<Container className="related-work">
				<h5 className="relt-work">Related Projects</h5>

				<Row xs={1} md={4} className="g-4">
					{articles?.slice(0.4).map((_, idx) => {
						return (
							<Link
								to={
									"/article/" +
									_.id +
									"/" +
									convertToSlug(_.title)
								}
								onClick={() => window.scrollTo(0, 0)}
								className="related-projects-cards"
							>
								<Card className="bg-dark text-white">
									<Card.Img src={_.image} alt={_.title} />
									<Card.ImgOverlay>
										<Card.Title>
											<Button>{_.categories}</Button>
										</Card.Title>
										<Card.Text className=" text-truncate">
											{_.title}
										</Card.Text>
									</Card.ImgOverlay>
								</Card>
							</Link>
						);
					})}
				</Row>
			</Container>
			<TopFooterCard />
		</>
	);
};

export default Article;

const ArticleBlog = (props) => {
	const { title, categories, image, createdAt, text, client } = props;

	let desc = Buffer.from(text, "ascii").toString();

	const formatDate = (createdAt) => {
		const options = { year: "numeric", month: "long", day: "numeric" };
		return new Date(createdAt).toLocaleDateString(undefined, options);
	};

	return (
		<>
			<Row className="article-sec">
				<Col></Col>

				<Col xs={6} className="arti-row">
					<h1 className="work-title">{title}</h1>

					<Row className="cato-wrok">
						<Col className="cato">
							<h5>Category</h5>
							<div className="cato-list">
								<p>{categories}</p>
								<p>Design</p>
								<p>development</p>
							</div>
						</Col>
						<Col className="client">
							<h5>Client</h5>
							<h1>{client}</h1>
							<h5>Date</h5>
							<p>{formatDate(createdAt)}</p>
						</Col>
					</Row>
				</Col>
				<Col></Col>

				<div className="big-image">
					{/* <img src={imgurl} alt={title} /> */}
				</div>

				<Col className="body-arti-col">
					{ReactHtmlParser(desc)}

					{/* {desc} */}
				</Col>
			</Row>
		</>
	);
};
