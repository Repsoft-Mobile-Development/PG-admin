import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hotel1 from './../../../../images/gallery/hotel1.jpg';
import hotel2 from './../../../../images/gallery/hotel2.jpg';
import hotel3 from './../../../../images/gallery/hotel3.jpg';


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

const RoomSlider = () =>{
	const settings = {
		dots: false,
		infinite: true,
		fade: true,
		arrows: true,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
		speed: 2500,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 591,
				settings: {
				  slidesToShow: 1,
				  slidesToScroll: 1,
				},
			},
		],
	};
	return(
		<>
			<Slider className="guest-carousel owl-carousel owl-carousel owl-loaded owl-drag owl-dot" {...settings}>				
				<div className="item">
					<div className="rooms">
						<img src={hotel1} alt="" style={{width:"100%"}}/>
						<div className="booked">
							<p className="fs-20 font-w500">BOOKED</p>
						</div>
						<div className="img-content">
							<h4 className="fs-24 font-w600 text-white">Bed Room</h4>
							<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci</p>	
						</div>
					</div>
				</div>
				<div className="item">
					<div className="rooms">
						<img src={hotel2} alt="" style={{width:"100%"}}/>
						<div className="img-content">
							<h4 className="fs-24 font-w500 text-white">Bed Room</h4>
							<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci</p>	
						</div>
					</div>
				</div>
				<div className="item">
					<div className="rooms">
						<img src={hotel3} alt="" style={{width:"100%"}} />
						<div className="img-content">
							<h4 className="fs-24 font-w500 text-white">Bed Room</h4>
							<p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerci</p>	
						</div>
					</div>
				</div>
			</Slider>
		</>
	)
}
export default RoomSlider;