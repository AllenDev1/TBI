import axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import da from "../components/datafiles/datafiles.json";
import Footer from "../components/Footer";
import Navbars from "../components/navbar";
import TopFooterCard from "../components/TopFooterCard";
import { WhiteBtn } from "../components/WhiteBtn";
import "../scss/work.scss";
import { heroHeading } from "./About";
import { convertToSlug } from "./Article";

const FeatureArticles = (props) => {
	const { content, title, author, ID, Client,Categories } = props;

	return (
		<Link to={"/article/" + ID + "/" + convertToSlug(title)}>
			<Card className="bg-dark text-white fet-card">
				<Card.Img src={content} alt="Card image" />
				<Card.ImgOverlay>
					<Card.Title>
						<Button>{Categories}</Button>
					</Card.Title>
					<Card.Text>{title}</Card.Text>
				</Card.ImgOverlay>
			</Card>
		</Link>
	);
};

const ArticlesCard = (props) => {
	const { Thumbnail, Title, Categories, ID } = props;
	let imgurl = Buffer.from(Thumbnail, "base64");

	return (
		<Link to={"/article/" + ID + "/" + convertToSlug(Title)}>
			<Card className="bg-dark text-white">
				<Card.Img src={imgurl} alt="Card image" />
				<Card.ImgOverlay>
					<Card.Title>
						<Button>{Categories}</Button>
					</Card.Title>
					<Card.Text>{Title}</Card.Text>
				</Card.ImgOverlay>
			</Card>
		</Link>
	);
};
const blogsPerRow = 2;

const Works = () => {
	const [next, setNext] = useState(blogsPerRow);

	const loadMore = () => {
		setNext(next + blogsPerRow);
	};

	const [blogs, setBlogs] = useState();
	const [featureBlog, setFeatureBlogs] = useState();

	useEffect(() => {
		fetchArticles();
		fetchfeatureArticles();
	}, []);

	const fetchArticles = () => {
		const options = { method: "GET", url: "/allblog" };

		axios
			.request(options)
			.then(function (response) {
				setBlogs(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	const fetchfeatureArticles = () => {
		const options = {
			method: "GET",
			url: "/showarticles",
		};

		axios
			.request(options)
			.then(function (response) {
				setFeatureBlogs(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};
	return (
		<>
			<Navbars />
			{heroHeading(da.work_heading, da.work_dec)}
			<Container className="work-container">
				 {/* <div className="works-card">
					{featureBlog?.map((item, index) => {
						return (
							<FeatureArticles
								content={item.content}
								author={item.author}
								Client = {item.Client}
								Categories={item.Categories}
								title={item.title}
								key={index}
								ID={item.ID}
							/>
						);
					})}
				</div>  */}
				<div className="small-cards">
					{blogs?.slice(0, next)?.map((item, index) => {
						return (
							<ArticlesCard
								Title={item.Title}
								Categories={item.Categories}
								Thumbnail={item.Thumbnail}
								key={index}
								ID={item.ID}
							/>
						);
					})}
				</div>
				<div className="load-more-work-btn">
					{next < blogs?.length && WhiteBtn(da.work_btn, loadMore)}
				</div>
				<TopFooterCard />
				<Footer />
			</Container>
		</>
	);
};

export default Works;
