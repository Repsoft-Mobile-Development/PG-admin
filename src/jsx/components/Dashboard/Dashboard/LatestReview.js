import {Link} from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import user5 from './../../../../images/users/user5.jpg';
import user6 from './../../../../images/users/user6.jpg';
import user7 from './../../../../images/users/user7.jpg';

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
  	<div className="owl-nav">
		<div className="owl-next fas fa-arrow-right"  onClick={onClick}/>
	</div>	
  );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
		<div className="owl-nav">
			<div className=" owl-prev fas fa-arrow-left" onClick={onClick} style={{zIndex:1}}/>
		</div>
    );
}

const LatestReview = () =>{
	const settings = {
		dots: false,
		infinite: true,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		speed: 3000,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1560,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				},
			},
			{
				breakpoint: 1400,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				},
			},	
			{
				breakpoint: 640,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				},
			},
		],
	};
	return(
		<>
			<Slider className="front-view-slider owl-carousel owl-carousel owl-loaded owl-drag owl-dot" {...settings}>				
				<div className="items">
					<div className="customers border">
						<p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div className="d-flex justify-content-between align-items-center mt-4">
							<div className="customer-profile d-flex ">
							<img src={user5} alt="" />
							<div className="ms-3">
								<h5 className="mb-0"><Link to={"#"}>Kusnaidi Anderson</Link></h5>
								<span>4m ago</span>
							</div>
							</div>
							<div className="customer-button text-nowrap">
								<Link to={"#"}><i className="far fa-check-circle text-success"></i></Link>
								<Link to={"#"}><i className="far fa-times-circle text-danger"></i></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="items">
					<div className="customers border">
						<p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div className="d-flex justify-content-between align-items-center mt-4">
							<div className="customer-profile d-flex ">
							<img src={user6} alt="" />
							<div className="ms-3">
								<h5 className="mb-0"><Link to={"#"}>Kusnaidi Anderson</Link></h5>
								<span>4m ago</span>
							</div>
							</div>
							<div className="customer-button text-nowrap">
								<Link to={"#"}><i className="far fa-check-circle text-success"></i></Link>
								<Link to={"#"}><i className="far fa-times-circle text-danger"></i></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="items">
					<div className="customers border">
						<p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div className="d-flex justify-content-between align-items-center mt-4">
							<div className="customer-profile d-flex ">
							<img src={user7} alt="" />
							<div className="ms-3">
								<h5 className="mb-0"><Link to={"#"}>Kusnaidi Anderson</Link></h5>
								<span>4m ago</span>
							</div>
							</div>
							<div className="customer-button text-nowrap">
								<Link to={"#"}><i className="far fa-check-circle text-success"></i></Link>
								<Link to={"#"}><i className="far fa-times-circle text-danger"></i></Link>
							</div>
						</div>
					</div>
				</div>
				<div className="items">
					<div className="customers border">
						<p className="fs-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
						<div className="d-flex justify-content-between align-items-center mt-4">
							<div className="customer-profile d-flex ">
							<img src={user5} alt="" />
							<div className="ms-3">
								<h5 className="mb-0"><Link to={"#"}>Kusnaidi Anderson</Link></h5>
								<span>4m ago</span>
							</div>
							</div>
							<div className="customer-button text-nowrap">
								<Link to={"#"}><i className="far fa-check-circle text-success"></i></Link>
								<Link to={"#"}><i className="far fa-times-circle text-danger"></i></Link>
							</div>
						</div>
					</div>
				</div>
			</Slider>
		</>
	)
}
export default LatestReview;