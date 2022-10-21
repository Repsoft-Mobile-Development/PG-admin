import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

//images
import pic1 from './../../../images/profile/pic1.jpg';
import hotel1 from './../../../images/gallery/hotel1.jpg';
import hotel2 from './../../../images/gallery/hotel2.jpg';

import RoomSlider from './Guest/RoomSlider';

const DropdownBlog = () =>{
	return(
		<>
			<Dropdown className="dropdown dropend ms-auto">
				<Dropdown.Toggle as="div" className="btn-link i-false">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						<path d="M12 6C12.5523 6 13 5.55228 13 5C13 4.44772 12.5523 4 12 4C11.4477 4 11 4.44772 11 5C11 5.55228 11.4477 6 12 6Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
						<path d="M12 20C12.5523 20 13 19.5523 13 19C13 18.4477 12.5523 18 12 18C11.4477 18 11 18.4477 11 19C11 19.5523 11.4477 20 12 20Z" stroke="#575757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
					</svg>
				</Dropdown.Toggle>
				<Dropdown.Menu>
					<Dropdown.Item>Edit</Dropdown.Item>
					<Dropdown.Item>Delete</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}

const GuestDetails = () =>{
	const [selectBtn, setSelectBtn] = useState("Newest");
	return(
		<>
			<div className="row mt-4">
				<div className="col-xl-12">
					<div className="row">
						<div className="col-xl-12">
							<div className="card overflow-hidden">
								<div className="row m-0">
									<div className="col-xl-6 p-0">
										<div className="card-body">
											<div className="guest-profile">
												<div className="d-flex">
													<img src={pic1} alt="" />
													<div>
														<h2 className="font-w600">Roberto Mansini</h2>
														<span className="text-secondary">ID 1234124512551</span>
														<div className="call d-flex align-items-center"> 
														<Link to={"#"}><i className="fas fa-phone-alt text-secondary"></i></Link>
															<button className="btn btn-secondary ms-3">
																<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="24" height="24.18" viewBox="0 0 24 24.18">
																  <g id="_032-speech-bubble" data-name="032-speech-bubble" transform="translate(-1.63 0)">
																	<g id="Group_9" data-name="Group 9" transform="translate(1.63 0)">
																	  <path id="Path_118" data-name="Path 118" d="M22.193,3.6A12,12,0,0,0,1.636,12.361a11.434,11.434,0,0,0,.82,4.015,11.885,11.885,0,0,0,1.7,2.969l-.99,2.347a1.778,1.778,0,0,0,1.951,2.46l4.581-.792A12.013,12.013,0,0,0,22.193,3.6ZM12.749,16.8H9.61a.9.9,0,1,1,0-1.81h3.139a.911.911,0,0,1,.9.9A.893.893,0,0,1,12.749,16.8Zm4.892-3.676H9.61a.911.911,0,0,1-.9-.9.893.893,0,0,1,.9-.9h8.031a.9.9,0,1,1,0,1.81Zm0-3.7H9.61a.9.9,0,1,1,0-1.81h8.031a.911.911,0,0,1,.9.9A.93.93,0,0,1,17.641,9.421Z" transform="translate(-1.63 0)" fill="#fff"/>
																	</g>
																  </g>
																</svg>
																Send Message
															</button>	
														</div>
													</div>
													<DropdownBlog />
												</div>
												<div className="d-flex">
													<div className="mt-4 check-status">
														<span className="d-block mb-2">Check In</span>	
														<span className="font-w500 fs-16">October 30th, 2022 | 08:23 AM</span>
													</div>
													<div className="mt-4">
														<span className="d-block mb-2">Check Out</span>	
														<span className="font-w500 fs-16">November 2th, 2022</span>
													</div>
												</div>
											</div>
											<div className="d-flex flex-wrap">
												<div className="mt-4 check-status">
													<span className="d-block mb-2">Room Info</span>	
													<h4 className="font-w500 fs-24">Deluxe Z - 002424</h4>
												</div>
												<div className="mt-4 ms-3">
													<span className="d-block mb-2 text-black">Price</span>	
													<span className="font-w500 fs-24 text-black">$145<small className="fs-14 ms-2 text-secondary">/night</small></span>
												</div>
											</div>
											<p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
											<div className="facilities">
												<div className="mb-3 ">
													<span className="d-block mb-3">Facilities</span>
													<Link to={"#"} className="btn btn-secondary light btn-lg">
														<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="28" height="20" viewBox="0 0 28 20">
															<g>
															<path  d="M27,14V7a1,1,0,0,0-1-1H6A1,1,0,0,0,5,7v7a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V24H28v1a1,1,0,0,0,2,0V17A3,3,0,0,0,27,14ZM7,8H25v6H24V12a2,2,0,0,0-2-2H19a2,2,0,0,0-2,2v2H15V12a2,2,0,0,0-2-2H10a2,2,0,0,0-2,2v2H7Zm12,6V12h3v2Zm-9,0V12h3v2ZM4,17a1,1,0,0,1,1-1H27a1,1,0,0,1,1,1v5H4Z" transform="translate(-2 -6)" fill="#135846"/>
															</g>
														</svg>
													3 Bed Space</Link>
													<Link to={"#"} className="btn btn-secondary light btn-lg">
														<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="23.512" viewBox="0 0 20 23.512">
														  <g id="_010-security" data-name="010-security" transform="translate(-310.326 -159.324)">
															<path id="Path_1958" data-name="Path 1958" d="M330.326,165.226a2.952,2.952,0,0,0-1.71-2.8l-7.5-2.951a2.139,2.139,0,0,0-1.581,0l-7.5,2.951a2.951,2.951,0,0,0-1.709,2.8v5.318a10.445,10.445,0,0,0,4.372,8.772l5.142,3.372a.871.871,0,0,0,.971,0l5.143-3.372a10.448,10.448,0,0,0,4.372-8.772Zm-2,0a.591.591,0,0,0-.342-.561l-7.5-2.951a.432.432,0,0,0-.317,0l-7.5,2.951a.59.59,0,0,0-.341.561v5.318a7.985,7.985,0,0,0,3.343,6.707l4.657,3.054,4.656-3.054a7.986,7.986,0,0,0,3.344-6.707Zm-8.657,7.273,4.949-5.843a.9.9,0,0,1,1.415,0,1.338,1.338,0,0,1,0,1.67L320.376,175a.9.9,0,0,1-1.414,0l-2.829-3.338a1.337,1.337,0,0,1,0-1.669.9.9,0,0,1,1.414,0Z" transform="translate(0 0)" fill="#135846" fill-rule="evenodd"/>
														  </g>
														</svg>
													24 Hours Guard</Link>
													<Link to={"#"} className="btn btn-secondary light btn-lg">
														<svg className="me-2" xmlns="http://www.w3.org/2000/svg" width="20" height="15.75" viewBox="0 0 20 15.75">
														  <g id="internet" transform="translate(0 -2.15)">
															<g id="Group_22" data-name="Group 22">
															  <path id="Path_1969" data-name="Path 1969" d="M18.3,7.6a11.709,11.709,0,0,0-16.6,0,.967.967,0,0,1-1.4,0,.967.967,0,0,1,0-1.4,13.641,13.641,0,0,1,19.4,0,.99.99,0,0,1-1.4,1.4Z" fill="#135846"/>
															</g>
															<g id="Group_23" data-name="Group 23">
															  <path id="Path_1970" data-name="Path 1970" d="M15.4,10.4a7.667,7.667,0,0,0-10.7,0A.99.99,0,0,1,3.3,9,9.418,9.418,0,0,1,16.8,9a.99.99,0,0,1-1.4,1.4Z" fill="#135846"/>
															</g>
															<g id="Group_24" data-name="Group 24">
															  <path id="Path_1971" data-name="Path 1971" d="M12.6,13.4a3.383,3.383,0,0,0-4.9,0,.967.967,0,0,1-1.4,0,1.087,1.087,0,0,1,0-1.5,5.159,5.159,0,0,1,7.7,0,1.088,1.088,0,0,1,0,1.5A.967.967,0,0,1,12.6,13.4Z" fill="#135846"/>
															</g>
															<circle id="Ellipse_10" data-name="Ellipse 10" cx="1.9" cy="1.9" r="1.9" transform="translate(8.2 14.1)" fill="#135846"/>
														  </g>
														</svg>
													Free Wifi</Link>
												</div>	
												<Link to={"#"} className="btn btn-secondary light">2 Bathroom</Link>
												<Link to={"#"} className="btn btn-secondary light">Air Conditioner</Link>
												<Link to={"#"} className="btn btn-secondary light">Television</Link>
											</div>
										</div>
									</div>
									<div className="col-xl-6 p-0">
										<RoomSlider />
									</div>
								</div>
							</div>
						</div>	
						<div className="col-xl-12">
							<div className="card">
								<div className="card-header border-0">
									<h4 className="fs-20">Purchase History</h4>
									<div className="newest ms-3">
										{/* <select className="default-select">
											<option>Newest</option>
											<option>Oldest</option>
										</select> */}
										<Dropdown>
											<Dropdown.Toggle as="div" className=" btn-select-drop default-select btn i-false">
												{selectBtn} <i className="fas fa-angle-down ms-2 "></i>
											</Dropdown.Toggle>
											<Dropdown.Menu>
												<Dropdown.Item onClick={()=>setSelectBtn("Oldest")}>Oldest</Dropdown.Item>
												<Dropdown.Item onClick={()=>setSelectBtn("Newest")}>Newest</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown> 
									</div>	
								</div>
								<div className="card-body pt-0">
									<div className="row align-items-center">
										<div className="col-xl-4 col-sm-7">
											<div className="purchase-history d-flex align-items-center">
												<img src={hotel1} alt="" />
												<div className="ms-3">
													<h4 className="guest-text font-w500">Deluxe A-91234</h4>
													<span className="fs-14 d-block mb-2 text-secondary">#000123456</span>
													<span className="fs-16 text-nowrap">Oct 30th 2022 09:21 AM</span>
												</div>
											</div>
										</div>
										<div className="col-xl-2 col-sm-5 col-6">
											<div className="ms-0 ms-sm-2">
												<span className="d-block">Check In</span>
												<span className="text-black fs-18 font-w500">Nov 2th, 2022</span>
												<span className="fs-14 d-block">9.46 PM</span>
											</div>
										</div>
										<div className="col-xl-2 col-sm-4 col-6">
											<div>
												<span className="d-block">Check Out</span>
												<span className="text-black fs-18 font-w500">Nov 2th, 2022</span>
												<span className="fs-14 d-block">9.46 PM</span>
											</div>
										</div>
										<div className="col-xl-2 col-sm-4 col-6">
											<div className="mt-sm-0 mt-3">
												<span className="d-block mb-2 text-black">Price</span>	
												<span className="font-w500 fs-18 text-black">$145<small className="fs-14 ms-2 text-secondary">/night</small></span>
											</div>
										</div>
										<div className="col-xl-2 col-sm-4 col-6">
											<div className="d-flex align-items-center mt-sm-0 mt-3">
												<Link to={"#"} className="btn btn-secondary light">View Notes</Link>
												<DropdownBlog />
											</div>
										</div>
									</div>
									<div className="row align-items-center mt-5">
										<div className="col-xl-4 col-sm-7">
											<div className="purchase-history d-flex align-items-center">
												<img src={hotel2} alt="" />
												<div className="ms-3">
													<h4 className="guest-text font-w500">Deluxe A-91234</h4>
													<span className="fs-14 d-block mb-2 text-secondary">#000123456</span>
													<span className="fs-16 text-nowrap">Oct 30th 2022 09:21 AM</span>
												</div>
											</div>
										</div>
										<div className="col-xl-2 col-sm-5 col-6">
											<div className="ms-2">
												<span className="d-block">Check In</span>
												<span className="text-black fs-18 font-w500">Nov 2th, 2022</span>
												<span className="fs-14 d-block">9.46 PM</span>
											</div>
										</div>
										<div className="col-xl-2 col-sm-4 col-6">
											<div className="mt-sm-0 mt-2">
												<span className="d-block">Check Out</span>
												<span className="text-black fs-18 font-w500">Nov 2th, 2022</span>
												<span className="fs-14 d-block">9.46 PM</span>
											</div>
										</div>
										<div className="col-xl-2 col-sm-4 col-6">
											<div className="mt-sm-0 mt-3">
												<span className="d-block mb-2 text-black">Price</span>	
												<span className="font-w500 fs-18 text-black">$145<small className="fs-14 ms-2 text-secondary">/night</small></span>
											</div>
										</div>
										<div className="col-xl-2 col-sm-4 col-6">
											<div className="d-flex align-items-center mt-sm-0 mt-3">
												<Link to={"#"} className="btn btn-secondary light">View Notes</Link>
												<DropdownBlog />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>		
		</>
	)
}
export default GuestDetails;