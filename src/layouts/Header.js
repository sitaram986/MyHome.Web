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
							<div className="dropdown">
								<a className="dropdown-toggle h-drop" href="#" data-toggle="dropdown">
									Documents
								</a>
								<div className="dropdown-menu profile-notification ">
									<ul className="pro-body">
										<li><a href="user-profile.html" className="dropdown-item"><i className="fas fa-circle"></i>Experience</a></li>
										<li><a href="email_inbox.html" className="dropdown-item"><i className="fas fa-circle"></i>Education</a></li>
										<li><a href="auth-signin.html" className="dropdown-item"><i className="fas fa-circle"></i>Address/ID Proofs</a></li>
										<li><a href="auth-signin.html" className="dropdown-item"><i className="fas fa-circle"></i>Properties/Sale Deed</a></li>
										<li><a href="auth-signin.html" className="dropdown-item"><i className="fas fa-circle"></i>Receipts/Payments</a></li>
										<li><a href="auth-signin.html" className="dropdown-item"><i className="fas fa-circle"></i>Bank/Loans</a></li>
                                        <li><a href="auth-signin.html" className="dropdown-item"><i className="fas fa-circle"></i>Invistments/Insurance</a></li>
									</ul>
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
					</ul>
				</div>
	</header>
    )
}

export default Header;