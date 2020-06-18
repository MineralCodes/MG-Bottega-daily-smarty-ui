import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

import Logo from "./logo";
import SearchBar from "./search-bar";
import PostSearchResults from "./post-search-results";

class Results extends Component {
	handleSearchbarSubmit(query) {
		this.props.fetchPostSearchResults(query);
		console.log(query);
	}

	render() {
		return (
			<div>
				<Logo size={55} />
				<SearchBar onSubmit={(query) => this.handleSearchbarSubmit(query)} />
				<PostSearchResults />
			</div>
		);
	}
}

export default connect(null, actions)(Results);
