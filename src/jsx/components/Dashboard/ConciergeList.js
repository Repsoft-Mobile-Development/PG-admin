import React,{ useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Dropdown, Tab, Nav } from "react-bootstrap";

///Import
import Active from './Concierge/Active';
import Inactive from './Concierge/Inactive';


//Images
import pic1 from './../../../images/avatar/pic1.jpg';
import avt1 from './../../../images/avatar/1.jpg';
import avt2 from './../../../images/avatar/2.jpg';
import avt3 from './../../../images/avatar/3.jpg';
import avt4 from './../../../images/avatar/4.jpg';

const DropdownBlog = () =>{
	return(
		<>
			<Dropdown className="dropdown">
				<Dropdown.Toggle as="div" className="btn-link i-false" >
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

const ConciergeList = ()=>{
	const [selectBtn, setSelectBtn] = useState("Newest");
	
	const [data, setData] = useState(
		document.querySelectorAll("#concierge_wrapper tbody tr")
	);
	const sort = 5;
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
      setData(document.querySelectorAll("#concierge_wrapper tbody tr"));
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
	return(
		<>
			<Tab.Container defaultActiveKey="AllEmployee">
				<div className="row">
					<div className="col-xl-12">
						<div className="d-flex mb-4 justify-content-between align-items-center flex-wrap">
							<div className="card-action coin-tabs mb-3">
								<Nav as="ul" className="nav nav-tabs">
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="AllEmployee">All Employee</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="ActiveEmployee">Active Employee</Nav.Link>
									</Nav.Item>
									<Nav.Item as="li" className="nav-item">
										<Nav.Link className="nav-link" eventKey="InactiveEmployee">Inactive Employee</Nav.Link>
									</Nav.Item>
								</Nav>
							</div>
							<div className="d-flex align-items-center mb-3"> 
								<Link to={"#"} className="btn btn-secondary">+ New Employee</Link>
								<div className="newest ms-3">
									<Dropdown>
										<Dropdown.Toggle as="div" className=" btn-select-drop default-select btn i-false">
											{selectBtn} <i className="fas fa-angle-down ms-2 "></i>
										</Dropdown.Toggle>
										<Dropdown.Menu>
											<Dropdown.Item onClick={()=>setSelectBtn("Oldest")} eventKey="AllEmployee">Oldest</Dropdown.Item>
											<Dropdown.Item onClick={()=>setSelectBtn("Newest")} eventKey="AllEmployee">Newest</Dropdown.Item>
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
											<Tab.Pane eventKey="AllEmployee">
												<div className="table-responsive">
													<div id="concierge_wrapper" className="dataTables_wrapper no-footer">
														<table id="example2"	
															className="table card-table display mb-4 shadow-hover dataTablesCard dataTable no-footer"
														>
															<thead>
																<tr role="row">
																	<th className="sorting_asc bg-none" >
																		<div className="form-check  style-1">
																			<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
																		</div>
																	</th>
																	<th className="sorting_asc">Name</th>
																	<th className="sorting">Job Desk</th>
																	<th className="sorting">Schedule</th>
																	<th className="sorting">Contact</th>
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
																		<div className="concierge-list-bx d-flex align-items-center">
																			<img className="me-3 rounded" src={pic1} alt="" />
																			<div>
																				<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black">James Sitepu</Link></h5>
																				<span className=" text-secondary fs-14 d-block">#12341225</span>
																				<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																			</div>
																		</div>
																	</td>
																	<td className="job-desk3">
																		<p className="mb-0">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
																	</td>
																	<td>
																		<div>
																			<h5 className="text-nowrap">Monday, Friday</h5>
																			<span className="tex-secondary text-nowrap">Check schedule</span>
																		</div>
																	</td>
																	<td>
																		<div>
																			
																			<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
																		</div>
																	</td>
																	<td>
																		<span  className="font-w600 text-success">ACTIVE</span>
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
																		<div className="concierge-list-bx d-flex align-items-center">
																			<img className="me-3 rounded" src={avt1} alt="" />
																			<div>
																				<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black" >Louis Humbs</Link></h5>
																				<span className=" text-secondary fs-14 d-block">#12341225</span>
																				<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																			</div>
																		</div>
																	</td>
																	<td className="job-desk3">
																		<p className="mb-0">Offer restaurant and activity recommendations and assist guests in arranging transportation</p>
																	</td>
																	<td>
																		<div>
																			<h5 className="text-nowrap">Monday, Friday</h5>
																			<span className="tex-secondary text-nowrap">Check schedule</span>
																		</div>
																	</td>
																	<td>
																		<div>
																			<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
																		</div>
																	</td>
																	<td>
																		<span  className="font-w600 text-success">ACTIVE</span>
																	</td>	
																	<td><DropdownBlog /></td>
																</tr>
																<tr role="row" className="even">
																	<td className="sorting_1">  
																		<div className="form-check style-1">
																			<input type="checkbox" onClick={() => chackboxFun()}
																				className="form-check-input" id="customCheckBox22" required=""
																			/>
																		</div> 
																	</td>
																	<td>
																		<div className="concierge-list-bx d-flex align-items-center">
																			<img className="me-3 rounded" src={avt2} alt="" />
																			<div>
																				<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black" >Jackson Marquez</Link></h5>
																				<span className=" text-secondary fs-14 d-block">#12341225</span>
																				<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																			</div>
																		</div>
																	</td>
																	<td className="job-desk3">
																		<p className="mb-0">Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</p>
																	</td>
																	<td>
																		<div>
																			<h5 className="text-nowrap">Monday, Friday</h5>
																			<span className="tex-secondary text-nowrap">Check schedule</span>
																		</div>
																	</td>
																	<td>
																		<div>
																			
																			<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
																		</div>
																	</td>
																	<td>
																		<span  className="font-w600 text-danger">INACTIVE</span>
																	</td>
																	<td><DropdownBlog /></td>
																</tr>
																<tr role="row" className="odd">
																	<td className="sorting_1">  
																		<div className="form-check   style-1">
																			<input type="checkbox" onClick={() => chackboxFun()}
																				className="form-check-input" id="customCheckBox23" required=""
																			/>
																		</div> 
																	</td>
																	<td>
																		<div className="concierge-list-bx d-flex align-items-center">
																			<img className="me-3 rounded" src={avt3} alt="" />
																			<div>
																				<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black" >Samantha William</Link></h5>
																				<span className=" text-secondary fs-14 d-block">#12341225</span>
																				<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																			</div>
																		</div>
																	</td>
																	<td className="job-desk3">
																		<p className="mb-0">Anticipate guests needs in order to accommodate them and provide an exceptional guest experience</p>
																	</td>
																	<td>
																		<div>
																			<h5 className="text-nowrap">Monday, Friday</h5>
																			<span className="tex-secondary text-nowrap">Check schedule</span>
																		</div>
																	</td>
																	<td>
																		<div>
																			
																			<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
																		</div>
																	</td>
																	<td>
																		<span  className="font-w600 text-success">ACTIVE</span>
																	</td>
																	<td><DropdownBlog /></td>
																</tr>
																<tr role="row" className="even">	
																	<td className="sorting_1">  
																		<div className="form-check   style-1">
																			<input type="checkbox" onClick={() => chackboxFun()}
																				className="form-check-input" id="customCheckBox24" required=""
																			/>
																		</div> 
																	</td>
																	<td>
																		<div className="concierge-list-bx d-flex align-items-center">
																			<img className="me-3 rounded" src={avt4} alt="" />
																			<div>
																				<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black" >David Here</Link></h5>
																				<span className=" text-secondary fs-14 d-block">#12341225</span>
																				<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																			</div>
																		</div>
																	</td>
																	<td className="job-desk3">
																		<p className="mb-0">Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</p>
																	</td>
																	<td>
																		<div>
																			<h5 className="text-nowrap">Monday, Friday</h5>
																			<span className="tex-secondary text-nowrap">Check schedule</span>
																		</div>
																	</td>
																	<td>
																		<div>
																			
																			<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
																		</div>
																	</td>
																	<td>
																		<span  className="font-w600 text-danger">INACTIVE</span>
																	</td>
																	<td><DropdownBlog /></td>
																</tr>	
																<tr role="row" className="odd">
																	<td className="sorting_1">  
																		<div className="form-check   style-1">
																			<input type="checkbox" onClick={() => chackboxFun()}
																				className="form-check-input" id="customCheckBox23" required=""
																			/>
																		</div> 
																	</td>
																	<td>
																		<div className="concierge-list-bx d-flex align-items-center">
																			<img className="me-3 rounded" src={avt3} alt="" />
																			<div>
																				<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black" >Elina Moss</Link></h5>
																				<span className=" text-secondary fs-14 d-block">#12341225</span>
																				<span className=" fs-14  text-nowrap">Joined on Aug 2th 2017</span>
																			</div>
																		</div>
																	</td>
																	<td className="job-desk3">
																		<p className="mb-0">Offer restaurant and activity recommendations and assist guests in arranging transportation</p>
																	</td>
																	<td>
																		<div>
																			<h5 className="text-nowrap">Monday, Friday</h5>
																			<span className="tex-secondary text-nowrap">Check schedule</span>
																		</div>
																	</td>
																	<td>
																		<div>
																			
																			<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-2 "></i>012 334 55512</span>
																		</div>
																	</td>
																	<td>
																		<span  className="font-w600 text-success">ACTIVE</span>
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
																	className="paginate_button previous "
																	to="/concierge-list"
																	onClick={() =>
																	   activePag.current > 0 &&
																	   onClick(activePag.current - 1)
																	}
																 >
																	<i className="fa fa-angle-double-left" aria-hidden="true"></i> Previous
																</Link>
																<span>
																	{paggination.map((number, i) => (
																	   <Link
																		  key={i}
																		  to="/concierge-list"
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
																	to="/concierge-list"
																	onClick={() =>
																	   activePag.current + 1 < paggination.length &&
																	   onClick(activePag.current + 1)
																	}
																>
																	Next <i className="fa fa-angle-double-right" aria-hidden="true"></i>
																</Link>
															</div>
														</div>
													</div>
												</div>
											</Tab.Pane>
											<Tab.Pane eventKey="ActiveEmployee">
												<Active />
											</Tab.Pane>  
											<Tab.Pane eventKey="InactiveEmployee">
												<Inactive />	
											</Tab.Pane>
										</Tab.Content>
									</div>	
								</div>	
							</div>	
						</div>	
					</div>
				</div>	
			</Tab.Container>		
		</>
	)
}
export {DropdownBlog};
export default ConciergeList;