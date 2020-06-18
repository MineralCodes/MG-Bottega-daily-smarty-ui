import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./search-bar";
import PostSearchResults from "./post-search-results";

export default class Results extends Component {
	handleSearchbarSubmit(query) {
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
