import React, { Component } from "react";
import { connect } from "react-redux";

class PostSearchResults extends Component {
	render() {
		return (
			<div className="results-posts">
				<div className="results-posts-wrapper">
					<ul className="results-posts-posts">RESULTS GO HERE</ul>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return state;
}

export default connect(mapStateToProps)(PostSearchResults);
