import React,{ useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import {Dropdown, Tab, Nav} from 'react-bootstrap';

import Archived from './Archived';
import Published from './Published';

const CustomerTable = () =>{
	const [selectBtn, setSelectBtn] = useState("Newest");
	const [data, setData] = useState(
		document.querySelectorAll("#reviews_wrapper tbody tr")
	);
	const sort = 10;
	const activePag = useRef(0);
	
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
      setData(document.querySelectorAll("#reviews_wrapper tbody tr"));
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
	const motherChackBox = document.querySelector(".sorting_asc_1 input");
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
			<Tab.Container defaultActiveKey="All">
				<div className="my-4 d-flex justify-content-between align-items-center flex-wrap">
					<div className="card-action coin-tabs mb-4">
						<Nav as="ul" className="nav nav-tabs" role="tablist">
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="All">All Customer Reviews</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="Published">Published</Nav.Link>
							</Nav.Item>
							<Nav.Item as="li" className="nav-item">
								<Nav.Link className="nav-link" eventKey="Archived">Archived</Nav.Link>
							</Nav.Item>
						</Nav>
					</div>
					<div className="newest mb-4">
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
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body p-0">
							<Tab.Content>	
								<Tab.Pane eventKey="All">
									<div className="table-responsive">
										<div id="reviews_wrapper" className="dataTables_wrapper no-footer">
											<table className="table card-table display mb-4 shadow-hover dataTablesCard review-tbl dataTable no-footer">
												<thead>
													<tr role="row">
														<th className="sorting_asc_1 bg-none" >
															<div className="form-check  style-1">
																<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
															</div>
														</th>
														<th>Order ID</th>
														<th>Date</th>
														<th>Customer</th>
														<th className="text-center">Comment</th>
														<th className="text-center">Action</th>
													</tr>
												</thead>
												<tbody>
													<tr role="row" className="odd">
														<td className="sorting_1">  
															<div className="form-check   style-1">
																<input type="checkbox" onClick={() => chackboxFun()}
																	className="form-check-input" id="customCheckBox21" required=""
																/>
															</div> 
														</td>
														<td>
															<span>#000123456</span>
														</td>
														<td>
															<span className="text-nowrap">Nov 21th 2022 09:21 AM</span>
														</td>
														<td>
															<span className="text-nowrap">James Sitepu</span>
														</td>
														<td className="job-desk1">
															<span>
																<ul className="stars">
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																</ul>
															</span>
															<span>
																<p className="fs-16">
																	We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																</p>
															</span>
														</td>
														<td>
															<div className="d-flex">
																<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																<span   className="text-danger fs-14 font-w500" >Archive</span>
															</div>
														</td>
													</tr>
													<tr className="even">
														<td className="sorting_1">  
															<div className="form-check   style-1">
																<input type="checkbox" onClick={() => chackboxFun()}
																	className="form-check-input" id="customCheckBox22" required=""
																/>
															</div> 
														</td>
														<td>
															<span>#000987654</span>
														</td>
														<td>
															<span className="text-nowrap">Nov 21th 2022 09:21 AM</span>
														</td>
														<td>
															<span className="text-nowrap">James Sitepu</span>
														</td>
														<td className="job-desk1">
															<span>
																<ul className="stars">
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																</ul>
															</span>
															<span>
																<p className="fs-16">
																	We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																</p>
															</span>
														</td>
														<td>
															<div className="d-flex">
																<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																<span   className="text-danger fs-14 font-w500" >Archive</span>
															</div>
														</td>
													</tr>
													<tr className="odd">
														<td className="sorting_1">  
															<div className="form-check  style-1">
																<input type="checkbox" onClick={() => chackboxFun()}
																	className="form-check-input" id="customCheckBox23" required=""
																/>
															</div> 
														</td>
														<td>
															<span>#00012123</span>
														</td>
														<td>
															<span className="text-nowrap">Nov 21th 2022 09:21 AM</span>
														</td>
														<td>
															<span className="text-nowrap">James Sitepu</span>
														</td>
														<td className="job-desk1">
															<span>
																<ul className="stars">
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																	<li><Link to={"#"}><i className="fas fa-star text-secondary"></i></Link></li>
																</ul>
															</span>
															<span>
																<p className="fs-16">
																	We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back
																</p>
															</span>
														</td>
														<td>
															<div className="d-flex">
																<span   className="text-success fs-14 font-w500 me-3">Publish</span>
																<span   className="text-danger fs-14 font-w500" >Archive</span>
															</div>
														</td>
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
														to="/reviews"
														onClick={() =>
														   activePag.current > 0 &&
														   onClick(activePag.current - 1)
														}
													 >
														Prev
													</Link>
													<span>
														{paggination.map((number, i) => (
														   <Link key={i} to="/reviews"
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
														to="/reviews"
														onClick={() =>
														   activePag.current + 1 < paggination.length &&
														   onClick(activePag.current + 1)
														}
													>
														Next
													</Link>
												</div>
											</div>
										</div>
									</div>
								</Tab.Pane>
								<Tab.Pane eventKey="Published">
									<Published />	
								</Tab.Pane>
								<Tab.Pane eventKey="Archived">
									<Archived />	
								</Tab.Pane> 
							</Tab.Content>
						</div>	
					</div>	
				</div>		
			</Tab.Container>
		</>
	)
}
export default CustomerTable