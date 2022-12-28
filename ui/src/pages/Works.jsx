import axios from "axios";
import { Buffer } from "buffer";
import { useEffect, useState } from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import da from "../components/datafiles/datafiles.json";
import Navbars from "../components/navbar";
import TopFooterCard from "../components/TopFooterCard";
import { WhiteBtn } from "../components/WhiteBtn";
import "../scss/work.scss";
import { heroHeading } from "./About";
import { convertToSlug } from "./Article";

const ArticlesCard = (props) => {
	const { image, title, categories, id } = props;
	let imgurl = Buffer.from(image, "base64");

	return (
		<Link to={"/article/" + id + "/" + convertToSlug(title)}>
			<Card className="bg-dark text-white">
				<Card.Img src={imgurl} alt={title} />
				<Card.ImgOverlay>
					<Card.Title >
						<Button >{categories}</Button>
					</Card.Title>
					<Card.Text className=" text-truncate">{title}</Card.Text>
				</Card.ImgOverlay>
			</Card>
		</Link>
	);
};
const blogsPerRow = 12;

const Works = () => {
	const [next, setNext] = useState(blogsPerRow);

	const loadMore = () => {
		setNext(next + blogsPerRow);
	};

	const [blogs, setBlogs] = useState();

	useEffect(() => {
		fetchArticles();
	}, []);

	const fetchArticles = () => {
		const options = {
			method: "GET",
			url: "/api/blog/",
		};

		axios
			.request(options)
			.then(function (response) {
				setBlogs(response.data);
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
				<Row xs={1} md={4} className="small-cards">
					{blogs?.slice(0, next).map((blog, idx) => {
						return (
							<ArticlesCard
								key={idx}
								image={blog.image}
								title={blog.title}
								categories={blog.categories}
								id={blog.id}
							/>
						);
					})}
				</Row>
				<div className="load-more-work-btn">
					{next < blogs?.length && WhiteBtn(da.work_btn, loadMore)}
				</div>
				<TopFooterCard />
			</Container>
		</>
	);
};

export default Works;
