import React,{ useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";

import { DropdownBlog } from "./../ConciergeList";
import room7 from './../../../../images/room/room7.jpg';

const Booked = () =>{
	const [data, setData] = useState(
		document.querySelectorAll("#booked_wrapper tbody tr")
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
  
	const chackbox = document.querySelectorAll(".sorting_6 input");
	const motherChackBox = document.querySelector(".sorting_asc6 input");
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
					<table className="table card-table display mb-4 dataTablesCard booking-table room-list-tbl dataTable no-footer">
						<thead>
							<tr role="row">
								<th className="sorting_asc6 bg-none" >
									<div className="form-check  style-1">
										<input type="checkbox" onClick={() => chackboxFun("all")} className="form-check-input" id="checkAll" required=""/>
									</div>
								</th>
								<th>Room Name</th>
								<th>Bed Type</th>
								<th>Room Floor</th>
								<th>Facility</th>
								<th>Rate</th>
								<th>Status</th>
								<th className="bg-none"></th>
							</tr>
						</thead>
						<tbody>
							<tr role="row" className="odd">
								<td className="sorting_6">  
									<div className="form-check   style-1">
										<input type="checkbox" onClick={() => chackboxFun()}
											className="form-check-input" id="customCheckBox21" required=""
										/>
									</div> 
								</td>
								<td>
									<div className="room-list-bx d-flex align-items-center">
										<img className="me-3 rounded" src={room7} alt="" />
										<div>
											<span className=" text-secondary fs-14 d-block">#12341225</span>
											<span className=" fs-16 font-w500 text-nowrap">Deluxe A-91234</span>
										</div>
									</div>
								</td>
								<td className="">
									<span className="fs-16 font-w500 text-nowrap">Double Bed</span>
								</td>
								<td>
									<div>
										
										<span className="fs-16 font-w500">Floor A-1</span>
									</div>
								</td>
								<td className="facility">
									<div className="">
										<span className="fs-16 comments">AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</span>
									</div>
								</td>
								<td>
									<div className="">
										<span className="mb-2">Price</span>	
										<span className="font-w500">$145<small className="fs-14 ms-2">/night</small></span>
									</div>
								</td>
								<td>
									<Link to={"#"} className="btn btn-danger btn-md">BOOKED</Link>
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
								to="/room-list"
								onClick={() =>
								   activePag.current > 0 &&
								   onClick(activePag.current - 1)
								}
							 >
								<i className="fa fa-angle-double-left"></i> Previous
							</Link>
							<span>
								{paggination.map((number, i) => (
								   <Link key={i} to="/room-list"
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
								to="/room-list"
								onClick={() =>
								   activePag.current + 1 < paggination.length &&
								   onClick(activePag.current + 1)
								}
							>
								Next <i className="fa fa-angle-double-right"></i>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Booked