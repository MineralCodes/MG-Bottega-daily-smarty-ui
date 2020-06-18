import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./search-bar";
import PostSearchResults from "./post-search-results";

export default class Results extends Component {
	render() {
		return (
			<div>
				<Logo size={55} />
				<SearchBar />
				<PostSearchResults />
			</div>
		);
	}
}
