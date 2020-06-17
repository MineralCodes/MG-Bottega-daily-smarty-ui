import React, { Component } from "react";

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="logo"></div>
					<div className="search-bar"></div>
					<div className="recent">
						<ul>
							<li>Recent Post</li>
							<li>Recent Post</li>
							<li>Recent Post</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
