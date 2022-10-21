import React,{ useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import moment from 'moment';
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap-daterangepicker/daterangepicker.css";
import { Dropdown, Tab, Nav } from "react-bootstrap";

///Import
import PendingBlog from './Guest/PendingBlog';
import BookedBlog from './Guest/BookedBlog';
import CanceledBlog from './Guest/CanceledBlog';
import RefundBlog from './Guest/RefundBlog';

//Images
import pic1 from './../../../images/avatar/1.jpg';
import pic2 from './../../../images/avatar/2.jpg';
import pic3 from './../../../images/avatar/3.jpg';
import pic4 from './../../../images/avatar/4.jpg';
import pic5 from './../../../images/avatar/5.jpg';
import pic6 from './../../../images/avatar/6.jpg';

const DropdownBlog = () =>{
	return(
		<>
			<Dropdown className="dropdown">
				<Dropdown.Toggle as="div" className="btn-link i-false" data-bs-toggle="dropdown" aria-expanded="false">
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#262626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdown-menu">
					<Dropdown.Item className="dropdown-item">Edit</Dropdown.Item>
					<Dropdown.Item className="dropdown-item">Delete</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
}

const GuestList = () =>{
	const [selectBtn, setSelectBtn] = useState("Newest");
	
	const [data, setData] = useState(
		document.querySelectorAll("#example2_wrapper tbody tr")
	);
	const sort = 8;
	const activePag = useRef(0);
	//const [test, settest] = useState(0);

	// Active data
	const chageData = (frist, sec) => {
		for (var i = 0; i < data.length; ++i) {
			if (i >= frist && i < sec) {
				data[i].classList.remove("d-none");
			} else {
				data[i].classList.add("d-none");
			}
		}
	};
   // use effect
   useEffect(() => {
      setData(document.querySelectorAll("#example2_wrapper tbody tr"));
      //chackboxFun();
	}, []);

  
   // Active pagginarion
   activePag.current === 0 && chageData(0, sort);
   // paggination
   let paggination = Array(Math.ceil(data.length / sort))
      .fill()
      .map((_, i) => i + 1);

   // Active paggination & chage data
	const onClick = (i) => {
		activePag.current = i;
		chageData(activePag.current * sort, (activePag.current + 1) * sort);
		//settest(i);
	};

   
	const chackbox = document.querySelectorAll(".sorting_1 input");
	const motherChackBox = document.querySelector(".sorting_asc input");
   // console.log(document.querySelectorAll(".sorting_1 input")[0].checked);
	const chackboxFun = (type) => {
      for (let i = 0; i < chackbox.length; i++) {
         const element = chackbox[i];
         if (type === "all") {
            if (motherChackBox.checked) {
               element.checked = true;
            } else {
               element.checked = false;
            }
         } else {
            if (!element.checked) {
               motherChackBox.checked = false;
               break;
            } else {
               motherChackBox.checked = true;
            }
         }
      }
   };
   
	   const [state, setState] = useState({
		  start: moment().subtract(29, 'days'),
		  end: moment(),
		});
		const { start, end } = state;
		const handleCallback = (start, end) => {
		  setState({ start, end });
		};
		const label =
      start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY');
	  
	return(
		<>
			<Tab.Container defaultActiveKey="All">
				<div className="d-flex justify-content-between align-items-center flex-wrap">
					<div className="card-action coin-tabs mb-2">
						<Nav as="ul" className="nav nav-tabs">
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="All">All Guest</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="Pending">Pending</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="Booked">Booked</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="Canceled">Canceled</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="Refund">Refund</Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
					<div className="d-flex align-items-center mb-2 flex-wrap"> 
						<div className="guest-calendar">
							<DateRangePicker 
								initialSettings={{
								  startDate: start.toDate(),
								  endDate: end.toDate(),
								  ranges: {
									Today: [moment().toDate(), moment().toDate()],
									Yesterday: [
									  moment().subtract(1, 'days').toDate(),
									  moment().subtract(1, 'days').toDate(),
									],
									'Last 7 Days': [
									  moment().subtract(6, 'days').toDate(),
									  moment().toDate(),
									],
									'Last 30 Days': [
									  moment().subtract(29, 'days').toDate(),
									  moment().toDate(),
									],
									'This Month': [
									  moment().startOf('month').toDate(),
									  moment().endOf('month').toDate(),
									],
									'Last Month': [
									  moment().subtract(1, 'month').startOf('month').toDate(),
									  moment().subtract(1, 'month').endOf('month').toDate(),
									],
								  },
								}}
								onCallback={handleCallback}
							  >
								<div
								  id="reportrange"
								  className="pull-right reportrange"
								  style={{
									width: '100%',
								  }}
								>
								{/* <i className="fa fa-calendar"></i>&nbsp;&nbsp; */}
								  <span>{label}</span> <i className="fas fa-chevron-down ms-3"></i>
								</div>
							  </DateRangePicker>
							
						</div>
						<div className="newest ms-3">
							 <Dropdown>
								<Dropdown.Toggle as="div" className=" btn-select-drop default-select btn i-false">
									{selectBtn} <i className="fas fa-angle-down ms-2 "></i>
								</Dropdown.Toggle>
								<Dropdown.Menu>
									<Dropdown.Item onClick={()=>setSelectBtn("Oldest")} eventKey="All">Oldest</Dropdown.Item>
									<Dropdown.Item onClick={()=>setSelectBtn("Newest")} eventKey="All">Newest</Dropdown.Item>
								</Dropdown.Menu>
							</Dropdown> 
						</div>	
					</div>
				</div>
				<div className="row mt-4">
					<div className="col-xl-12">
						<div className="card">
							<div className="card-body p-0">
								<Tab.Content>
									<Tab.Pane eventKey="All">
										<div className="table-responsive">
											<div id="example2_wrapper" className="dataTables_wrapper no-footer">
												<table
													id="example2"
													className="table card-table display mb-4 shadow-hover default-table dataTablesCard dataTable no-footer"
												>
													<thead>
														<tr role="row">
															<th className="sorting_asc bg-none" >
																<div className="form-check  style-1">
																	<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
																</div>
															</th>
															<th className="sorting_asc">Guest</th>
															<th className="sorting">Date Order</th>
															<th className="sorting">Check In</th>
															<th className="sorting">Check Out</th>
															<th className="sorting">Special Request</th>
															<th className="sorting">Room Type</th>
															<th className="sorting">Status</th>
															<th className="sorting bg-none"></th>
														</tr>
													</thead>
													<tbody>
														<tr role="row" className="odd">
															<td className="sorting_1">
																<div className="form-check  style-1">
																	<input type="checkbox" onClick={() => chackboxFun()} className="form-check-input"
																		id="customCheckBox2" required=""
																	/>
																</div>
															</td>
															<td>
																<div className="concierge-bx d-flex align-items-center">
																	<img className="me-3 rounded" src={pic1} alt="" />
																	<div>
																		<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black" >Cahyadi Purnomo</Link></h5>
																		<span className="text-primary fs-14">#EMP-00025</span>
																	</div>
																</div>
															</td>
															<td className="text-nowrap">
																<span>Oct 30th 2022 09:21 AM</span>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 2th, 2022</h5>
																	<span>9.46 PM</span>
																</div>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 4th, 2022</h5>
																	<span>6.12 PM</span>
																</div>
															</td>
															<td className="request">
																<Link to={"#"} className="btn btn-sm">View Notes</Link>
															</td>
															<td>
																<span className="font-w500">Deluxe A - 02</span>
															</td>
															<td>
																<div className="request">
																	<Link to={"#"} className="btn btn-md text-primary">Refund</Link>
																</div>
															</td>
															<td><DropdownBlog /></td>
														</tr>
														<tr role="row" className="even">
															<td className="sorting_1">  
																<div className="form-check   style-1">
																	<input type="checkbox" onClick={() => chackboxFun()}
																		className="form-check-input" id="customCheckBox21" required=""
																	/>
																</div> 
															</td>
															<td>
																<div className="concierge-bx d-flex align-items-center">
																	<img className="me-3 rounded" src={pic2} alt="" />
																	<div>
																		<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black">Cahyadi Purnomo</Link></h5>
																		<span className="text-primary fs-14">#EMP-00025</span>
																	</div>
																</div>
															</td>
															<td className="text-nowrap">
																<span>Oct 30th 2022 09:21 AM</span>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 2th, 2022</h5>
																	<span>9.46 PM</span>
																</div>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 4th, 2022</h5>
																	<span>6.12 PM</span>
																</div>
															</td>
															<td className="request">
																<Link to={"#"} className="btn btn-sm">View Notes</Link>
															</td>
															<td>
																<span className="font-w500">Deluxe A - 02</span>
															</td>
															<td>
																<div className="">
																	<Link to={"#"} className="btn btn-md btn-warning">Pending</Link>
																</div>
															</td>
															<td><DropdownBlog /></td>
														</tr>
														<tr role="row" className="odd">
															<td className="sorting_1">  
																<div className="form-check   style-1">
																	<input type="checkbox" onClick={() => chackboxFun()}
																		className="form-check-input" id="customCheckBox22" required=""
																	/>
																</div> 
															</td>
															<td>
																<div className="concierge-bx d-flex align-items-center">
																	<img className="me-3 rounded" src={pic3} alt="" />
																	<div>
																		<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black">Angela Smith</Link></h5>
																		<span className="text-primary fs-14">#EMP-00025</span>
																	</div>
																</div>
															</td>
															<td className="text-nowrap">
																<span>Oct 30th 2022 09:21 AM</span>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 2th, 2022</h5>
																	<span>9.46 PM</span>
																</div>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 4th, 2022</h5>
																	<span>6.12 PM</span>
																</div>
															</td>
															<td className="request">
																<Link to={"#"} className="btn  btn-sm">View Notes</Link>
															</td>
															<td>
																<span className="font-w500">Deluxe A - 02</span>
															</td>
															<td>
																<div className="request">
																	<Link to={"#"} className="btn btn-md text-primary">Refund</Link>
																</div>
															</td>
															<td><DropdownBlog /></td>
														</tr>
														<tr role="row" className="even">
															<td className="sorting_1">  
																<div className="form-check   style-1">
																	<input type="checkbox" onClick={() => chackboxFun()}
																		className="form-check-input" id="customCheckBox23" required=""
																	/>
																</div> 
															</td>
															<td>
																<div className="concierge-bx d-flex align-items-center">
																	<img className="me-3 rounded" src={pic4} alt="" />
																	<div>
																		<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black">Hendric Suratman</Link></h5>
																		<span className="text-primary fs-14">#EMP-00025</span>
																	</div>
																</div>
															</td>
															<td className="text-nowrap">
																<span>Oct 30th 2022 09:21 AM</span>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 2th, 2022</h5>
																	<span>9.46 PM</span>
																</div>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 4th, 2022</h5>
																	<span>6.12 PM</span>
																</div>
															</td>
															<td className="request">
																<Link to={"#"} className="btn btn-sm">View Notes</Link>
															</td>
															<td>
																<span className="font-w500">Deluxe A - 02</span>
															</td>
															<td>
																<div className="request">
																	<Link to={"#"} className="btn btn-md text-primary">Refund</Link>
																</div>
															</td>
															<td><DropdownBlog /></td>
														</tr>
														<tr role="row" className="odd">	
															<td className="sorting_1">  
																<div className="form-check   style-1">
																	<input type="checkbox" onClick={() => chackboxFun()}
																		className="form-check-input" id="customCheckBox24" required=""
																	/>
																</div> 
															</td>
															<td>
																<div className="concierge-bx d-flex align-items-center">
																	<img className="me-3 rounded" src={pic5} alt="" />
																	<div>
																		<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black">Jajang Lawrence</Link></h5>
																		<span className="text-primary fs-14">#EMP-00025</span>
																	</div>
																</div>
															</td>
															<td className="text-nowrap">
																<span>Oct 30th 2022 09:21 AM</span>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 2th, 2022</h5>
																	<span>9.46 PM</span>
																</div>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 4th, 2022</h5>
																	<span>6.12 PM</span>
																</div>
															</td>
															<td className="request">
																<Link to={"#"} className="btn btn-sm">View Notes</Link>
															</td>
															<td>
																<span className="font-w500">Deluxe A - 02</span>
															</td>
															<td>
																<div className="">
																	<Link to={"#"} className="btn btn-md btn-success">Booked</Link>
																</div>
															</td>
															<td><DropdownBlog /></td>
														</tr>
														<tr role="row" className="even">
															<td className="sorting_1">  
																<div className="form-check   style-1">
																	<input type="checkbox" onClick={() => chackboxFun()}
																		className="form-check-input" id="customCheckBox25" required=""
																	/>
																</div> 
															</td>
															<td>
																<div className="concierge-bx d-flex align-items-center">
																	<img className="me-3 rounded" src={pic6} alt="" />
																	<div>
																		<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black">Kevin Stuart</Link></h5>
																		<span className="text-primary fs-14">#EMP-00025</span>
																	</div>
																</div>
															</td>
															<td className="text-nowrap">
																<span>Oct 30th 2022 09:21 AM</span>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 2th, 2022</h5>
																	<span>9.46 PM</span>
																</div>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 4th, 2022</h5>
																	<span>6.12 PM</span>
																</div>
															</td>
															<td className="request">
																<Link to={"#"} className="btn btn-sm">View Notes</Link>
															</td>
															<td>
																<span className="font-w500">Deluxe A - 02</span>
															</td>
															<td>
																<div className="request">
																	<Link to={"#"} className="btn btn-md text-primary">Refund</Link>
																</div>
															</td>
															<td><DropdownBlog /></td>
														</tr>
														<tr role="row" className="odd">
															<td className="sorting_1">  
																<div className="form-check   style-1">
																	<input type="checkbox" onClick={() => chackboxFun()}
																		className="form-check-input" id="customCheckBox26" required=""
																	/>
																</div> 
															</td>
															<td>
																<div className="concierge-bx d-flex align-items-center">
																	<img className="me-3 rounded" src={pic3} alt="" />
																	<div>
																		<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black">Steven</Link></h5>
																		<span className="text-primary fs-14">#EMP-00025</span>
																	</div>
																</div>
															</td>
															<td className="text-nowrap">
																<span>Oct 30th 2022 09:21 AM</span>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 2th, 2022</h5>
																	<span>9.46 PM</span>
																</div>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 4th, 2022</h5>
																	<span>6.12 PM</span>
																</div>
															</td>
															<td className="request">
																<Link to={"#"} className="btn btn-sm">View Notes</Link>
															</td>
															<td>
																<span className="font-w500">Deluxe A - 02</span>
															</td>
															<td>
																<div className="">
																	<Link to={"#"} className="btn btn-md btn-warning">Pending</Link>
																</div>
															</td>
															<td><DropdownBlog /></td>
														</tr>	
														<tr role="row" className="even">
															<td className="sorting_1">  
																<div className="form-check   style-1">
																	<input type="checkbox" onClick={() => chackboxFun()}
																		className="form-check-input" id="customCheckBox27" required=""
																	/>
																</div> 
															</td>
															<td>
																<div className="concierge-bx d-flex align-items-center">
																	<img className="me-3 rounded" src={pic5} alt="" />
																	<div>
																		<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black" >Samantha</Link></h5>
																		<span className="text-primary fs-14">#EMP-00025</span>
																	</div>
																</div>
															</td>
															<td className="text-nowrap">
																<span>Oct 30th 2022 09:21 AM</span>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 2th, 2022</h5>
																	<span>9.46 PM</span>
																</div>
															</td>
															<td>
																<div>
																	<h5 className="text-nowrap">Nov 4th, 2022</h5>
																	<span>6.12 PM</span>
																</div>
															</td>
															<td className="request">
																<Link to={"#"} className="btn btn-sm">View Notes</Link>
															</td>
															<td>
																<span className="font-w500">Deluxe A - 02</span>
															</td>
															<td>
																<div className="">
																	<Link to={"#"} className="btn btn-md btn-danger">Canceled</Link>
																</div>
															</td>
															<td><DropdownBlog /></td>
														</tr>
													</tbody>
												</table>
												<div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-3">
													<div className="dataTables_info">
														Showing {activePag.current * sort + 1} to{" "}
														{data.length > (activePag.current + 1) * sort
															? (activePag.current + 1) * sort
															: data.length}{" "}
														of {data.length} entries
													</div>
													<div
														className="dataTables_paginate paging_simple_numbers mb-0"
														id="example2_paginate"
													>
														<Link
															className="paginate_button previous disabled"
															to="/guest-list"
															onClick={() =>
															   activePag.current > 0 &&
															   onClick(activePag.current - 1)
															}
														 >
															<i className="fa fa-angle-double-left" aria-hidden="true"></i>
														</Link>
														<span>
															{paggination.map((number, i) => (
															   <Link
																  key={i}
																  to="/guest-list"
																  className={`paginate_button  ${
																	 activePag.current === i ? "current" : ""
																  } `}
																  onClick={() => onClick(i)}
															   >
																  {number}
															   </Link>
															))}
														</span>

														<Link
															className="paginate_button next"
															to="/guest-list"
															onClick={() =>
															   activePag.current + 1 < paggination.length &&
															   onClick(activePag.current + 1)
															}
														>
															<i className="fa fa-angle-double-right" aria-hidden="true"></i>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</Tab.Pane>
									<Tab.Pane eventKey="Pending">
										<PendingBlog />	
									</Tab.Pane>
									<Tab.Pane eventKey="Booked">
										<BookedBlog />
									</Tab.Pane>
									<Tab.Pane eventKey="Canceled">
										<CanceledBlog />
									</Tab.Pane>
									<Tab.Pane eventKey="Refund">
										<RefundBlog />
									</Tab.Pane>
								</Tab.Content>
							</div>	
						</div>	
					</div>	
				</div>	
			</Tab.Container>		
		</>
	)
}
export {DropdownBlog};
export default GuestList;