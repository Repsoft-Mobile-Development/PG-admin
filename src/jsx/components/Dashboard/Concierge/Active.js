import React,{ useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import { DropdownBlog } from "./../ConciergeList";
import pic1 from './../../../../images/avatar/pic1.jpg';
import avt1 from './../../../../images/avatar/1.jpg';
import avt3 from './../../../../images/avatar/3.jpg';
import avt4 from './../../../../images/avatar/4.jpg';


const Active = ()=>{
	const [data, setData] = useState(
		document.querySelectorAll("#active_wrapper tbody tr")
	);
	const sort = 10;
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
      setData(document.querySelectorAll("#active_wrapper tbody tr"));
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
  
	const chackbox = document.querySelectorAll(".sorting_3 input");
	const motherChackBox = document.querySelector(".sorting_asc3 input");
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
			<div className="table-responsive">
				<div id="active_wrapper" className="dataTables_wrapper no-footer">
					<table
						
						className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
					>
						<thead>
							<tr role="row">
								<th className="sorting_asc3 bg-none" >
									<div className="form-check  style-1">
										<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
									</div>
								</th>
								<th className="sorting_asc3">Employee Name</th>
								<th className="sorting_3">Job Desk</th>
								<th className="sorting_3">Schedule</th>
								<th className="sorting_3">Contact</th>
								<th className="sorting_3">Status</th>
								<th className="sorting_3 bg-none"></th>
							</tr>
						</thead>
						<tbody>
							<tr role="row" className="odd">
								<td className="sorting_3">  
									<div className="form-check style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox44" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="concierge-list-bx d-flex align-items-center">
										<img className="me-3 rounded" src={pic1} alt="" />
										<div>
											<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black" >James Sitepu</Link></h5>
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
								<td className="sorting_3">  
									<div className="form-check  style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox45" required=""
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
							<tr>
								<td className="sorting_3">  
									<div className="form-check  style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox46" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="concierge-list-bx d-flex align-items-center">
										<img className="me-3 rounded" src={avt4} alt="" />
										<div>
											<h5 className="fs-16 mb-0 text-nowrap"><Link to={"#"} className="text-black">Samantha William</Link></h5>
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
							<tr>
								<td className="sorting_3">  
									<div className="form-check  style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox47" required=""
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
										
										<span className="font-w600 text-nowrap"><i className="fas fa-phone-alt me-3 "></i>012 334 55512</span>
									</div>
								</td>
								<td>
									<span  className="font-w600 text-success">ACTIVE</span>
								</td>
								<td><DropdownBlog /></td>
							</tr>	
						</tbody>
					</table>
					<div className="d-sm-flex text-center justify-content-between align-items-center mt-3 mb-2">
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
		</>
	)
}
export default Active;