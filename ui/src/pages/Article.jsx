import axios from "axios";
import { Buffer } from "buffer";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import { Link, useNavigate, useParams } from "react-router-dom";
import soc1 from "../assets/Group 148.svg";
import soc2 from "../assets/Group 170.svg";
import soc3 from "../assets/Group 171.svg";
import soc4 from "../assets/Group 172.svg";
import path from "../assets/Path.svg";
import Footer from "../components/Footer";
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
						<a href="/">
							<img src={soc1} alt=".." />
						</a>
						<a href="/">
							<img src={soc2} alt=".." />
						</a>
						<a href="/">
							<img src={soc3} alt=".." />
						</a>
						<a href="/">
							<img src={soc4} alt=".." />
						</a>
					</Col>
				</div>
			</Container>
			{/* <Container className="related-work">
				<h5 className="relt-work">Related Projects</h5>
				<div className="small-cards">
					<Link to="#">
						<Card className="bg-dark text-white">
							<Card.Img
								src="https://ichef.bbci.co.uk/images/ic/960x960/p08634k6.jpg"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								<Card.Title>
									<Button>Design</Button>
								</Card.Title>
								<Card.Text>
									This is a wider card with supporting text
									below
								</Card.Text>
							</Card.ImgOverlay>
						</Card>
					</Link>
					<Link to="#">
						<Card className="bg-dark text-white">
							<Card.Img
								src="https://ichef.bbci.co.uk/images/ic/960x960/p08634k6.jpg"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								<Card.Title>
									<Button>Design</Button>
								</Card.Title>
								<Card.Text>
									This is a wider card with supporting text
									below
								</Card.Text>
							</Card.ImgOverlay>
						</Card>
					</Link>
					<Link to="#">
						<Card className="bg-dark text-white">
							<Card.Img
								src="https://ichef.bbci.co.uk/images/ic/960x960/p08634k6.jpg"
								alt="Card image"
							/>
							<Card.ImgOverlay>
								<Card.Title>
									<Button>Design</Button>
								</Card.Title>
								<Card.Text>
									This is a wider card with supporting text
									below as a natural lead-in to additional
									content. This content is a little bit
									longer.
								</Card.Text>
							</Card.ImgOverlay>
						</Card>
					</Link>
				</div>
			</Container> */}
			<TopFooterCard />
			<Footer />
		</>
	);
};

export default Article;

const ArticleBlog = (props) => {
	const { title, categories, image, createdAt, text, client } = props;

	let imgurl = Buffer.from(image, "base64");
	let desc = Buffer.from(text, "ascii").toString();

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
							<p>{createdAt}</p>
						</Col>
					</Row>
				</Col>
				<Col></Col>
				<div className="big-image">
					<img src={imgurl} alt="..." />
				</div>

				<Col></Col>

				<Col xs={6} className="body-arti-col">
					{ReactHtmlParser(desc)}
				</Col>
				<Col></Col>
			</Row>
		</>
	);
};
