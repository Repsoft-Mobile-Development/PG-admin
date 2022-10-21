import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

///Images
import room1 from "./../../../../images/room/room1.jpg";
import room2 from "./../../../../images/room/room2.jpg";
import room3 from "./../../../../images/room/room3.jpg";
import user1 from "./../../../../images/users/user1.jpg";
import user2 from "./../../../../images/users/user2.jpg";
import user3 from "./../../../../images/users/user3.jpg";

function Btn1(){
	return(
		<span className="date bg-secondary mb-3">3</span>
	)
}
function Btn2(){
	return(
		<span className="date2 bg-primary mb-3">16, 17, 18</span>
	)
}
function Btn3(){
	return(
		<span className="date bg-warning mb-3">3</span>
	)
}

const RoomsBlog = [
	{id:1, image1: room1, image2: user1, title: 'Queen Bed A-12324', subtitle: 'James Sukardi', btnblog:<Btn1 /> },
	{id:2, image1: room2, image2: user2, title: 'Deluxe Room B-1324', subtitle: 'Angela Moss', btnblog: <Btn2/>},
	{id:3, image1: room3, image2: user3, title: 'King Big C-2445', subtitle: 'JGeovanny', btnblog: <Btn3 />},
	{id:4, image1: room2, image2: user2, title: 'Queen Bed A-12324', subtitle: 'James Sukardi', btnblog:<Btn1 /> },
];

const RecentBooking = () =>{
	const [value, onChange] = useState(new Date());
	const [moredata, setMoreData] = useState(RoomsBlog);
	const [refresh, setRefresh] = useState(false);
	const onClick = () => {
		setRefresh(true);
		setTimeout(() => {
		  setMoreData([
			...moredata,
			moredata[Math.floor(Math.random() * Math.floor(moredata.length - 1))],
		  ]);
		  setRefresh(false);
		}, 1000);
	};
	return(
		<>
			<div className="card-body pb-2 loadmore-content" id="BookingContent">
				<div className="text-center event-calender border-bottom booking-calender ">
					{/* <input type='text' className="form-control d-none " id='datetimepicker1' /> */}
					<Calendar onChange={onChange} value={value}  className="mb-4" />
				</div>	
				{moredata.map((data, index)=>(	
					<div className="rooms mt-3 d-flex align-items-center justify-content-between flex-wrap" key={index}>
						<div className="d-flex align-items-center mb-3">
							<img src={data.image1} alt="" />
							<div className="ms-4 bed-text">
								<h4>{data.title}</h4>
								<div className="users d-flex align-items-center">
									<img src={data.image2} alt="" />
									<div>
										<span className="fs-16 font-w500 me-3">{data.subtitle}</span>
										<span>12min ago</span>
									</div>
								</div>
							</div>
						</div>
						{data.btnblog}
					</div>
				))}
			</div>
			<div className="card-footer border-0 m-auto pt-0">
				{/* <Link to={"#"} className="btn  btn-link m-auto dlab-load-more fs-16 font-w500 text-secondary" id="Booking" rel="ajax/booking.html">View more</Link> */}
				<Link  to={"#"} className="btn  btn-link m-auto dlab-load-more fs-16 font-w500 text-secondary" onClick={() => onClick()}>View More {" "}
					{refresh && <i className="fas fa-sync"></i>}
				</Link>
			</div>
		</>
	)
}
export default RecentBooking;