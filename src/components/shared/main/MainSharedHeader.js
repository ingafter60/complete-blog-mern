import React from 'react';
import SubSharedHeaderNavbar from '../sub/SubSharedHeaderNavbar';

const MainSharedHeader = () => {
	return(
		<header className="clearfix header-style5">
			<div className="logo-place">
				<div className="container">
					<div className="inner-logo-place">
						<a className="navbar-brand" href="index.html">
							<img src="images/logo.png" alt="" />
						</a>
					</div>
				</div>
			</div>

			<SubSharedHeaderNavbar />
		</header>
	)
}

export default MainSharedHeader;