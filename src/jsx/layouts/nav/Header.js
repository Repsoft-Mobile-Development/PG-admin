import React,{useState} from "react";

import { Link } from "react-router-dom";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";

/// Image
import profile from "../../../images/user.jpg";
import avatar from "../../../images/avatar/1.jpg";
import { Dropdown } from "react-bootstrap";
import LogoutPage from './Logout';

const Header = ({ onNote }) => {
  const [searchBut, setSearchBut] = useState(false);	
  var path = window.location.pathname.split("/");
  var name = path[path.length - 1].split("-");
  var filterName = name.length >= 3 ? name.filter((n, i) => i > 0) : name;
  var finalName = filterName.includes("app")
    ? filterName.filter((f) => f !== "app")
    : filterName.includes("ui")
    ? filterName.filter((f) => f !== "ui")
    : filterName.includes("uc")
    ? filterName.filter((f) => f !== "uc")
    : filterName.includes("basic")
    ? filterName.filter((f) => f !== "basic")
    : filterName.includes("jquery")
    ? filterName.filter((f) => f !== "jquery")
    : filterName.includes("table")
    ? filterName.filter((f) => f !== "table")
    : filterName.includes("page")
    ? filterName.filter((f) => f !== "page")
    : filterName.includes("email")
    ? filterName.filter((f) => f !== "email")
    : filterName.includes("ecom")
    ? filterName.filter((f) => f !== "ecom")
    : filterName.includes("chart")
    ? filterName.filter((f) => f !== "chart")
    : filterName.includes("editor")
    ? filterName.filter((f) => f !== "editor")
    : filterName;
  return ( 
    <div className="header border-bottom">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
				<div
					className="dashboard_bar"
					style={{ textTransform: "capitalize" }}
				  >
					{finalName.join(" ").length === 0
					  ? "Dashboard"
					  : finalName.join(" ") === "dashboard dark"
					  ? "Dashboard"
					  : finalName.join(" ")}
				</div>
            </div>
			<div className="nav-item d-flex align-items-center">
				<div className="input-group search-area">
					<input type="text" 
						className={`form-control ${searchBut ? "active" : ""}`}
						placeholder="Search.." 
					/>
					<span className="input-group-text" onClick={() => setSearchBut(!searchBut)}>
						<Link to={"#"}><i className="flaticon-381-search-2"></i></Link>
					</span>
				</div>
			</div> 
            <ul className="navbar-nav header-right">
					
				<Dropdown
					as="li"
					className="nav-item dropdown notification_dropdown "
				  >
					<Dropdown.Toggle
					  variant=""
					  as="a"
					  className="nav-link bell bell-link i-false c-pointer"
					  onClick={() => onNote()}
					>
						<svg xmlns="http://www.w3.org/2000/svg" width="26.667" height="24" viewBox="0 0 26.667 24">
						  <g id="_014-mail" data-name="014-mail" transform="translate(0 -21.833)">
							<path id="Path_1962" data-name="Path 1962" d="M26.373,26.526A6.667,6.667,0,0,0,20,21.833H6.667A6.667,6.667,0,0,0,.293,26.526,6.931,6.931,0,0,0,0,28.5V39.166a6.669,6.669,0,0,0,6.667,6.667H20a6.669,6.669,0,0,0,6.667-6.667V28.5A6.928,6.928,0,0,0,26.373,26.526ZM6.667,24.5H20a4.011,4.011,0,0,1,3.947,3.36L13.333,33.646,2.72,27.86A4.011,4.011,0,0,1,6.667,24.5ZM24,39.166a4.012,4.012,0,0,1-4,4H6.667a4.012,4.012,0,0,1-4-4V30.873L12.693,36.34a1.357,1.357,0,0,0,1.28,0L24,30.873Z" transform="translate(0 0)" fill="#135846"/>
						  </g>
						</svg>
						<span className="badge light text-white bg-primary rounded-circle">76</span>
					</Dropdown.Toggle>
				</Dropdown>	
				<Dropdown as="li" className="nav-item dropdown notification_dropdown">
					<Dropdown.Toggle className="nav-link i-false c-pointer" variant="" as="a">
						<svg xmlns="http://www.w3.org/2000/svg" width="19.375" height="24" viewBox="0 0 19.375 24">
						  <g id="_006-notification" data-name="006-notification" transform="translate(-341.252 -61.547)">
							<path id="Path_1954" data-name="Path 1954" d="M349.741,65.233V62.747a1.2,1.2,0,1,1,2.4,0v2.486a8.4,8.4,0,0,1,7.2,8.314v4.517l.971,1.942a3,3,0,0,1-2.683,4.342h-5.488a1.2,1.2,0,1,1-2.4,0h-5.488a3,3,0,0,1-2.683-4.342l.971-1.942V73.547a8.4,8.4,0,0,1,7.2-8.314Zm1.2,2.314a6,6,0,0,0-6,6v4.8a1.208,1.208,0,0,1-.127.536l-1.1,2.195a.6.6,0,0,0,.538.869h13.375a.6.6,0,0,0,.536-.869l-1.1-2.195a1.206,1.206,0,0,1-.126-.536v-4.8a6,6,0,0,0-6-6Z" transform="translate(0 0)" fill="#135846" fill-rule="evenodd"/>
						  </g>
						</svg>

						<span className="badge light text-white bg-primary rounded-circle">4</span>
					</Dropdown.Toggle>
					<Dropdown.Menu align="right" className="mt-2 dropdown-menu dropdown-menu-end">
					  <PerfectScrollbar className="widget-media dlab-scroll p-3 height380">
						<ul className="timeline">
						  <li>
							<div className="timeline-panel">
								<div className="media me-2">
									<img alt="images" width={50} src={avatar} />
								</div>
								<div className="media-body">
									<h6 className="mb-1">Dr sultads Send you Photo</h6>
									<small className="d-block">
									  29 July 2022 - 02:26 PM
									</small>
								</div>
							</div>
						  </li>
						  <li>
							<div className="timeline-panel">
							  <div className="media me-2 media-info">KG</div>
							  <div className="media-body">
								<h6 className="mb-1">
								  Resport created successfully
								</h6>
								<small className="d-block">
								  29 July 2022 - 02:26 PM
								</small>
							  </div>
							</div>
						  </li>
						  <li>
							<div className="timeline-panel">
							  <div className="media me-2 media-success">
								<i className="fa fa-home" />
							  </div>
							  <div className="media-body">
								<h6 className="mb-1">Reminder : Treatment Time!</h6>
								<small className="d-block">
								  29 July 2022 - 02:26 PM
								</small>
							  </div>
							</div>
						  </li>
						  <li>
							<div className="timeline-panel">
							  <div className="media me-2">
								<img alt="" width={50} src={avatar} />
							  </div>
							  <div className="media-body">
								<h6 className="mb-1">Dr sultads Send you Photo</h6>
								<small className="d-block">
								  29 July 2022 - 02:26 PM
								</small>
							  </div>
							</div>
						  </li>
						  <li>
							<div className="timeline-panel">
							  <div className="media me-2 media-danger">KG</div>
							  <div className="media-body">
								<h6 className="mb-1">
								  Resport created successfully
								</h6>
								<small className="d-block">
								  29 July 2022 - 02:26 PM
								</small>
							  </div>
							</div>
						  </li>
						  <li>
							<div className="timeline-panel">
							  <div className="media me-2 media-primary">
								<i className="fa fa-home" />
							  </div>
							  <div className="media-body">
								<h6 className="mb-1">Reminder : Treatment Time!</h6>
								<small className="d-block">
								  29 July 2022 - 02:26 PM
								</small>
							  </div>
							</div>
						  </li>
						</ul>
						<div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
						  <div
							className="ps__thumb-x"
							tabIndex={0}
							style={{ left: 0, width: 0 }}
						  />
						</div>
						<div className="ps__rail-y" style={{ top: 0, right: 0 }}>
						  <div
							className="ps__thumb-y"
							tabIndex={0}
							style={{ top: 0, height: 0 }}
						  />
						</div>
					  </PerfectScrollbar>
					  <Link className="all-notification" to="#">
						See all notifications <i className="ti-arrow-right" />
					  </Link>
					</Dropdown.Menu>
                </Dropdown>
			  <Dropdown
                as="li"
                className="nav-item  notification_dropdown "
              >
                <Dropdown.Toggle
                  variant=""
                  as="a"
                  className="nav-link  ai-icon i-false c-pointer"
                  // href="#"
                  role="button"
                  data-toggle="dropdown"
                >
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21.6" viewBox="0 0 24 21.6">
					  <g id="_008-chat" data-name="008-chat" transform="translate(-250.397 -62.547)">
						<path id="Path_1956" data-name="Path 1956" d="M274.4,67.347a4.8,4.8,0,0,0-4.8-4.8H255.2a4.8,4.8,0,0,0-4.8,4.8v15.6a1.2,1.2,0,0,0,2.048.848l3.746-3.745a2.4,2.4,0,0,1,1.7-.7H269.6a4.8,4.8,0,0,0,4.8-4.8Zm-2.4,0a2.4,2.4,0,0,0-2.4-2.4H255.2a2.4,2.4,0,0,0-2.4,2.4v12.7l1.7-1.7a4.8,4.8,0,0,1,3.395-1.406H269.6a2.4,2.4,0,0,0,2.4-2.4Zm-15.6,7.2H266a1.2,1.2,0,1,0,0-2.4h-9.6a1.2,1.2,0,0,0,0,2.4Zm0-4.8h12a1.2,1.2,0,1,0,0-2.4h-12a1.2,1.2,0,0,0,0,2.4Z" fill="#135846" fill-rule="evenodd"/>
					  </g>
					</svg>
					<span className="badge light text-white bg-primary rounded-circle">15</span>
                </Dropdown.Toggle>
                <Dropdown.Menu align="right" className="mt-4 dropdown-menu dropdown-menu-end">
                  <PerfectScrollbar className="widget-timeline dlab-scroll style-1 ps p-3 height370">
                    <ul className="timeline">
                      <li>
                        <div className="timeline-badge primary" />
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>10 minutes ago</span>
                          <h6 className="mb-0">
                            Youtube, a video-sharing website, goes live{" "}
                            <strong className="text-primary">$500</strong>.
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge info"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            New order placed{" "}
                            <strong className="text-info">#XF-2356.</strong>
                          </h6>
                          <p className="mb-0">
                            Quisque a consequat ante Sit amet magna at
                            volutapt...
                          </p>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge danger"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>30 minutes ago</span>
                          <h6 className="mb-0">
                            john just buy your product{" "}
                            <strong className="text-warning">Sell $250</strong>
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge success"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>15 minutes ago</span>
                          <h6 className="mb-0">
                            StumbleUpon is acquired by eBay.{" "}
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge warning"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            Mashable, a news website and blog, goes live.
                          </h6>
                        </Link>
                      </li>
                      <li>
                        <div className="timeline-badge dark"></div>
                        <Link
                          className="timeline-panel c-pointer text-muted"
                          to="#"
                        >
                          <span>20 minutes ago</span>
                          <h6 className="mb-0">
                            Mashable, a news website and blog, goes live.
                          </h6>
                        </Link>
                      </li>
                    </ul>
                    <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}>
                      <div
                        className="ps__thumb-x"
                        tabIndex={0}
                        style={{ left: 0, width: 0 }}
                      />
                    </div>
                    <div className="ps__rail-y" style={{ top: 0, right: 0 }}>
                      <div
                        className="ps__thumb-y"
                        tabIndex={0}
                        style={{ top: 0, height: 0 }}
                      />
                    </div>
                  </PerfectScrollbar>
                </Dropdown.Menu>
              </Dropdown>
			   
				<Dropdown as="li" className="nav-item dropdown header-profile">
					<Dropdown.Toggle variant="" as="a" className="nav-link i-false c-pointer">
						<img src={profile} width={20} alt="" />
					</Dropdown.Toggle>
					<Dropdown.Menu align="right" className="mt-3 dropdown-menu dropdown-menu-end">
					  <Link to="/app-profile" className="dropdown-item ai-icon">
						<svg
						  id="icon-user1" xmlns="http://www.w3.org/2000/svg" className="text-primary me-1"
						  width={18} height={18} viewBox="0 0 24 24" fill="none"
						  stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
						>
						  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
						  <circle cx={12} cy={7} r={4} />
						</svg>
						<span className="ms-2">Profile </span>
					  </Link>
					  <Link to="/email-inbox" className="dropdown-item ai-icon">
						<svg
						  id="icon-inbox" xmlns="http://www.w3.org/2000/svg" className="text-success me-1" width={18}
						  height={18} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
						  strokeLinecap="round" strokeLinejoin="round"
						>
						  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
						  <polyline points="22,6 12,13 2,6" />
						</svg>
						<span className="ms-2">Inbox </span>
					  </Link>
					  <LogoutPage />
					</Dropdown.Menu>
				</Dropdown> 				
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
