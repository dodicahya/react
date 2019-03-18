
import React, { Component } from 'react';
// import './App.css';
class Header extends Component {
  render() {
  const {name,address} = this.props
    return (
    <header>
	    <div className="container">
			<div className="heading-wrapper">
				<div className="row">
					<div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-location-outline"></i>
							<div className="right-area">
								<h5>{name}</h5>
								<h5>{address}</h5>
							</div>
						</div>
					</div><div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-location-outline"></i>
							<div className="right-area">
								<h5>{name}</h5>
								<h5>{address}</h5>
							</div>
						</div>
					</div><div className="col-sm-6 col-md-6 col-lg-4">
						<div className="info">
							<i className="icon ion-ios-location-outline"></i>
							<div className="right-area">
								<h5>{name}</h5>
								<h5>{address}</h5>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
    )
  }
}

export default Header;
