import React from 'react';

import ReviewSlider from './Reviews/ReviewSlider';
import CustomerTable from './Reviews/CustomerTable';

const Reviews = () =>{
	return(
		<>
			<div className="row mt-4">
				<div className="col-xl-12">
					<div className="row">
						<div className="col-xl-12">
							<ReviewSlider />
						</div>
						<CustomerTable />
					</div>
				</div>
			</div>
		</>
	)
}
export default Reviews;