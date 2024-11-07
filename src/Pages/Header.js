const Header = () =>{
    return(
        <header className="navbar pcoded-header navbar-expand-lg navbar-light header-dark">
				<div className="m-header">
                MY HOME
				</div>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item">
							<a href="#!" className="pop-search"><i className="feather icon-search"></i></a>
							<div className="search-bar">
								<input type="text" className="form-control border-0 shadow-none" placeholder="Search hear" />
								<button type="button" className="close" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
						</li>
						<li className="nav-item">
							<div className="dropdown">
								<a className="dropdown-toggle h-drop" href="#" data-toggle="dropdown">
									Cards
								</a>
								<div className="dropdown-menu profile-notification ">
									<ul className="pro-body">
										<li><a href="user-profile.html" className="dropdown-item"><i className="fas fa-circle"></i>HDFC</a></li>
										<li><a href="email_inbox.html" className="dropdown-item"><i className="fas fa-circle"></i>ICICI</a></li>
										<li><a href="auth-signin.html" className="dropdown-item"><i className="fas fa-circle"></i>SBI</a></li>
                                        <li><a href="auth-signin.html" className="dropdown-item"><i className="fas fa-circle"></i>HSBC</a></li>
									</ul>
								</div>
							</div>
						</li>
						<li className="nav-item">
							<div className="dropdown mega-menu">
								<a className="dropdown-toggle h-drop" href="#" data-toggle="dropdown">
									Documents
								</a>
								<div className="dropdown-menu profile-notification ">
									<div className="row no-gutters">
										<div className="col">
											<h6 className="mega-title">Education</h6>
											<ul className="pro-body">
												<li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>My Self</a></li>
												<li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>Kalyani</a></li>
                                                <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>Karthik</a></li>
												<li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>Krishna</a></li>
											</ul>
										</div>
										<div className="col">
											<h6 className="mega-title">Properties/Sale Deeds</h6>
											<ul className="pro-body">
												<li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>Mangalagiri Home</a></li>
												<li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>Hyderabad Home</a></li>
                                                <li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>Hyderabad Land</a></li>
												<li><a href="#!" className="dropdown-item"><i className="fas fa-circle"></i>Polam</a></li>
											</ul>
										</div>
										<div className="col">
											<h6 className="mega-title">Experience</h6>
											<ul className="pro-body">
												<li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Delectus</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Snap IT</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> OTSI</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> EPIQ</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> FORM 16 & IT Returns</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-minus"></i> Other</a></li>
											</ul>
										</div>
										<div className="col">
											<h6 className="mega-title">Loans</h6>
											<ul className="pro-body">
												<li><a href="#!" className="dropdown-item"><i className="feather icon-mail"></i>HDFC Personal Loan</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-clipboard"></i>LIC Housing Finance</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-check-square"></i>Car Loan</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-image"></i>Other EMI's</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-help-circle"></i>Other</a></li>
											</ul>
										</div>
										<div className="col">
											<h6 className="mega-title">Invistment/Insurance</h6>
											<ul className="pro-body">
												<li><a href="#!" className="dropdown-item"><i className="feather icon-mail"></i>HDFC Life Term Insurance</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-clipboard"></i>Postoffice RD</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-check-square"></i>SBI Life Insurance</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-image"></i>Mutual Funds</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-help-circle"></i>Stocks</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-help-circle"></i>Other</a></li>
											</ul>
										</div>
										<div className="col">
											<h6 className="mega-title">Address & ID Proofs</h6>
											<ul className="pro-body">
												<li><a href="#!" className="dropdown-item"><i className="feather icon-file-plus"></i>Aadhar</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-file-minus"></i>PAN</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-calendar"></i>RC & Driving Licence</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-scissors"></i>Other</a></li>
											</ul>
										</div>
                                        <div className="col">
											<h6 className="mega-title">Payments & Bills</h6>
											<ul className="pro-body">
												<li><a href="#!" className="dropdown-item"><i className="feather icon-file-plus"></i>Power</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-file-minus"></i>Credit Card</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-calendar"></i>Internet</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-upload-cloud"></i>House Tax & Water</a></li>
												<li><a href="#!" className="dropdown-item"><i className="feather icon-scissors"></i>Other</a></li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</li>
					</ul>
					<ul className="navbar-nav ml-auto">
						<li>
							<div className="dropdown">
								<a className="dropdown-toggle" href="#" data-toggle="dropdown">
									<i className="icon feather icon-bell"></i>
									<span className="badge badge-pill badge-danger">5</span>
								</a>
								<div className="dropdown-menu dropdown-menu-right notification">
									<div className="noti-head">
										<h6 className="d-inline-block m-b-0">Notifications</h6>
										<div className="float-right">
											<a href="#!" className="m-r-10">mark as read</a>
											<a href="#!">clear all</a>
										</div>
									</div>
									<ul className="noti-body">
										<li className="n-title">
											<p className="m-b-0">NEW</p>
										</li>
										<li className="notification">
											<div className="media">
												<img className="img-radius" src="../public/assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
												<div className="media-body">
													<p><strong>John Doe</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>5 min</span></p>
													<p>New ticket Added</p>
												</div>
											</div>
										</li>
										<li className="n-title">
											<p className="m-b-0">EARLIER</p>
										</li>
										<li className="notification">
											<div className="media">
												<img className="img-radius" src="../public/assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
												<div className="media-body">
													<p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>10 min</span></p>
													<p>Prchace New Theme and make payment</p>
												</div>
											</div>
										</li>
										<li className="notification">
											<div className="media">
												<img className="img-radius" src="../public/assets/images/user/avatar-1.jpg" alt="Generic placeholder image" />
												<div className="media-body">
													<p><strong>Sara Soudein</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>12 min</span></p>
													<p>currently login</p>
												</div>
											</div>
										</li>
										<li className="notification">
											<div className="media">
												<img className="img-radius" src="../public/assets/images/user/avatar-2.jpg" alt="Generic placeholder image" />
												<div className="media-body">
													<p><strong>Joseph William</strong><span className="n-time text-muted"><i className="icon feather icon-clock m-r-10"></i>30 min</span></p>
													<p>Prchace New Theme and make payment</p>
												</div>
											</div>
										</li>
									</ul>
									<div className="noti-footer">
										<a href="#!">show all</a>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="dropdown drp-user">
								<a href="#" className="dropdown-toggle" data-toggle="dropdown">
									<i className="feather icon-user"></i>
								</a>
								<div className="dropdown-menu dropdown-menu-right profile-notification">
									<div className="pro-head">
										<img src="../public/assets/images/user/avatar-1.jpg" className="img-radius" alt="User-Profile-Image" />
										<span>John Doe</span>
										<a href="auth-signin.html" className="dud-logout" title="Logout">
											<i className="feather icon-log-out"></i>
										</a>
									</div>
									<ul className="pro-body">
										<li><a href="user-profile.html" className="dropdown-item"><i className="feather icon-user"></i> Profile</a></li>
										<li><a href="email_inbox.html" className="dropdown-item"><i className="feather icon-mail"></i> My Messages</a></li>
										<li><a href="auth-signin.html" className="dropdown-item"><i className="feather icon-lock"></i> Lock Screen</a></li>
									</ul>
								</div>
							</div>
						</li>
					</ul>
				</div>
	</header>
    )
}

export default Header;