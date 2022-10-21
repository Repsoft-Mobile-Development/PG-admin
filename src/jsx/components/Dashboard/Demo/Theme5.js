import React,{useContext, useEffect} from 'react';
import {Link} from 'react-router-dom';


//Import Components
import { ThemeContext } from "../../../../context/ThemeContext";
import ReservationStats from './../Dashboard/ReservationStats';
import LatestReview from './../Dashboard/LatestReview';
import RecentBooking from './../Dashboard/RecentBooking';


const Theme5 = () => {
	const { 
			changeNavigationHader,
			chnageHaderColor,
			changePrimaryColor,
			changeSideBarLayout,
			changeSideBarStyle
		} 
	= useContext(ThemeContext);
	useEffect(() => {
		changeNavigationHader("color_9");
		chnageHaderColor("color_9");
		changePrimaryColor("color_9");
		changeSideBarLayout({ value: "horizontal", label: "Horizontal" });
		changeSideBarStyle({ value: "modern", label: "Modern" });
	}, []);
	
	return(
		<>
			<div className="row">
				<div className="col-xl-12">
					<div className="row">
						<div className="col-xl-12">
							<div className="row">
								<div className="col-xl-3 col-sm-6">
									<div className="card booking">
										<div className="card-body">
											<div className="booking-status d-flex align-items-center">
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
													  <path  d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z" transform="translate(-2 -6)" fill="var(--primary)"/>
													</svg>
												</span>
												<div className="ms-4">
													<h2 className="mb-0 font-w600">8,461</h2>
													<p className="mb-0 text-nowrap">New Booking</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6">
									<div className="card booking">
										<div className="card-body">
											<div className="booking-status d-flex align-items-center">
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
													  <path  d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z" transform="translate(-2 -6)" fill="var(--primary)"/>
													</svg>
												</span>
												<div className="ms-4">
													<h2 className="mb-0 font-w600">8,461</h2>
													<p className="mb-0 text-nowrap ">New Booking</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6">
									<div className="card booking">
										<div className="card-body">
											<div className="booking-status d-flex align-items-center">
												<span>
													<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
													  <path  data-name="Path 1957" d="M129.035,178.842v2.8a5.6,5.6,0,0,0,5.6,5.6h14a5.6,5.6,0,0,0,5.6-5.6v-16.8a5.6,5.6,0,0,0-5.6-5.6h-14a5.6,5.6,0,0,0-5.6,5.6v2.8a1.4,1.4,0,0,0,2.8,0v-2.8a2.8,2.8,0,0,1,2.8-2.8h14a2.8,2.8,0,0,1,2.8,2.8v16.8a2.8,2.8,0,0,1-2.8,2.8h-14a2.8,2.8,0,0,1-2.8-2.8v-2.8a1.4,1.4,0,0,0-2.8,0Zm10.62-7-1.81-1.809a1.4,1.4,0,1,1,1.98-1.981l4.2,4.2a1.4,1.4,0,0,1,0,1.981l-4.2,4.2a1.4,1.4,0,1,1-1.98-1.981l1.81-1.81h-12.02a1.4,1.4,0,1,1,0-2.8Z" transform="translate(-126.235 -159.242)" fill="var(--primary)" fill-rule="evenodd"/>
													</svg>
												</span>
												<div className="ms-4">
													<h2 className="mb-0 font-w600">753</h2>
													<p className="mb-0">Check In</p>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-xl-3 col-sm-6">
									<div className="card booking">
										<div className="card-body">
											<div className="booking-status d-flex align-items-center">
												<span>
													<svg id="_009-log-out" data-name="009-log-out" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
													  <path  data-name="Path 1957" d="M151.435,178.842v2.8a5.6,5.6,0,0,1-5.6,5.6h-14a5.6,5.6,0,0,1-5.6-5.6v-16.8a5.6,5.6,0,0,1,5.6-5.6h14a5.6,5.6,0,0,1,5.6,5.6v2.8a1.4,1.4,0,0,1-2.8,0v-2.8a2.8,2.8,0,0,0-2.8-2.8h-14a2.8,2.8,0,0,0-2.8,2.8v16.8a2.8,2.8,0,0,0,2.8,2.8h14a2.8,2.8,0,0,0,2.8-2.8v-2.8a1.4,1.4,0,0,1,2.8,0Zm-10.62-7,1.81-1.809a1.4,1.4,0,1,0-1.98-1.981l-4.2,4.2a1.4,1.4,0,0,0,0,1.981l4.2,4.2a1.4,1.4,0,1,0,1.98-1.981l-1.81-1.81h12.02a1.4,1.4,0,1,0,0-2.8Z" transform="translate(-126.235 -159.242)" fill="var(--primary)" fill-rule="evenodd"/>
													</svg>

												</span>
												<div className="ms-4">
													<h2 className="mb-0 font-w600">516</h2>
													<p className="mb-0">Check Out</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-12">
							<div className="row">
								<div className="col-xl-6">
									<div className="card">
										<div className="card-header border-0 pb-0">
											<h4 className="fs-20">Recent Booking Schedule</h4>
										</div>
										<RecentBooking />
									</div>
								</div>
								<div className="col-xl-6">
									<div className="row">
										<div className="col-xl-12">
											<ReservationStats />
										</div>
										<div className="col-xl-6 col-sm-6">
											<div className="card bg-secondary">
												<div className="card-body">
													<div className="d-flex align-items-end pb-4 justify-content-between">
														<span className="fs-14 font-w500 text-white">Available Room Today</span>
														<span className="fs-20 font-w600 text-white"><span className="pe-2"></span>683</span>
													</div>
													<div className="progress default-progress h-auto">
														<div className="progress-bar bg-white progress-animated" style={{width: "60%", height:"13px" }}>
															<span className="sr-only">60% Complete</span>
														</div>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-xl-6 col-sm-6">
											<div className="card bg-secondary">
												<div className="card-body">
													<div className="d-flex align-items-end pb-4 justify-content-between">
														<span className="fs-14 font-w500 text-white">Sold Out Room Today</span>
														<span className="fs-20 font-w600 text-white"><span className="pe-2"></span>156</span>
													</div>
													<div className="progress default-progress h-auto">
														<div className="progress-bar bg-white progress-animated" style={{width: "30%", height:"13px"}} >
															<span className="sr-only">30% Complete</span>
														</div>
													</div>
													
												</div>
											</div>
										</div>
										<div className="col-xl-12">
											<div className="card">
												<div className="card-body">
													<div className="row">
														<div className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6">
															<div className="text-center">
																<h3 className="fs-28 font-w600">569</h3>
																<span className="fs-16">Total Concierge</span>
															</div>
														</div>
														<div className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6">
															<div className="text-center">
																<h3 className="fs-28 font-w600">2,342</h3>
																<span className="fs-16">Total Customer</span>
															</div>
														</div>
														<div className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6">
															<div className="text-center">
																<h3 className="fs-28 font-w600">992</h3>
																<span className="fs-16">Total Room</span>
															</div>
														</div>
														<div className="col-xl-3 col-sm-3 col-6 mb-4 col-xxl-6">
															<div className="text-center">
																<h3 className="fs-28 font-w600">76k</h3>
																<span className="fs-16 wspace-no">Total Transaction</span>
															</div>
														</div>
														<div className="mb-5 mt-4 d-flex align-items-center">
															<div>
																<h4><Link to={"#"} className="text-secondary">Let Travl Generate Your Annualy Report Easily</Link></h4>
																<span className="fs-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labo
																</span>
															</div>
															<div><Link to={"#"} className="ms-5"><i className="fas fa-arrow-right fs-20"></i></Link></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0 pb-0">
									<h4 className="fs-20">Latest Review by Customers</h4>
								</div>
								<div className="card-body pt-0">
									<LatestReview  />
								</div>	
							</div>	
						</div>
					</div>
				</div>
			</div>		
		</>
	)
}
export default Theme5;