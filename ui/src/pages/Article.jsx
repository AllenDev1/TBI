import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Navbars from "../components/navbar";
import path from "../assets/Path.svg";
import { Link } from "react-router-dom";
import soc1 from "../assets/Group 148.svg";
import soc2 from "../assets/Group 170.svg";
import soc3 from "../assets/Group 171.svg";
import soc4 from "../assets/Group 172.svg";
import "../scss/article.scss";
import TopFooterCard from "../components/TopFooterCard";
import Footer from "../components/Footer";
import axios from "axios";
import { Buffer } from "buffer";
import { useParams, useNavigate } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

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
		const options = { method: "GET", url: "/allblog" };

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
			return article.ID == article_id;
		};

		const currentArticle = articles.filter(idMatch)[0];
		const correctSlug = convertToSlug(currentArticle.Title);

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
						Title={articledata.Title}
						Categories={articledata.Categories}
						Thumbnail={articledata.Thumbnail}
						Date={articledata.Date}
						Text={articledata.Text}
						Client={articledata.Client}
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
			<Container className="related-work">
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
			</Container>
			<TopFooterCard />
			<Footer />
		</>
	);
};

export default Article;

const ArticleBlog = (props) => {
	const { Title, Categories, Thumbnail, Date, Text, Client } = props;

	let imgurl = Buffer.from(Thumbnail, "base64");
	let desc = Buffer.from(Text, "ascii").toString();

	return (
		<>
			<Row className="article-sec">
				<Col></Col>
				<Col xs={6} className="arti-row">
					<h1 className="work-title">{Title}</h1>

					<Row className="cato-wrok">
						<Col className="cato">
							<h5>Category</h5>
							<div className="cato-list">
								<p>{Categories}</p>
								<p>Design</p>
								<p>development</p>
							</div>
						</Col>
						<Col className="client">
							<h5>Client</h5>
							<h1>{Client}</h1>
							<h5>Date</h5>
							<p>{Date}</p>
						</Col>
					</Row>
				</Col>
				<Col></Col>
				<div className="big-image">
					<img src={imgurl} alt="..." />
				</div>

				<Col></Col>

				<Col xs={6} className="body-arti-col">
					<p>{ReactHtmlParser(desc)}</p>
				</Col>
				<Col></Col>
			</Row>
		</>
	);
};
