import React,{ useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import {DropdownBlog} from './../GuestList';

//Images
import pic5 from './../../../../images/avatar/5.jpg';

const BookedBlog = () =>{
	const [data, setData] = useState(
		document.querySelectorAll("#booked_wrapper tbody tr")
	);
	const sort = 4;
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
      setData(document.querySelectorAll("#booked_wrapper tbody tr"));
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
		
	};

   
	const chackbox = document.querySelectorAll(".sorting_3 input");
	const motherChackBox = document.querySelector(".sorting_asc_3 input");
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
				<div id="booked_wrapper" className="dataTables_wrapper no-footer">
					<table
						id="example2"
						className="table card-table default-table display mb-4 dataTablesCard dataTable no-footer"
					>
						<thead>
							<tr role="row">
								<th className="sorting_asc_3 bg-none" >
									<div className="form-check  style-1">
										<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
									</div>
								</th>
								<th className="sorting_asc_3">Guest</th>
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
								<td className="sorting_3">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox22" required=""
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
		</>
	)
}
export default BookedBlog;