import React, { Component } from "react";

import Logo from "./logo";
import SearchBar from "./search-bar";
import RecentPosts from "./recent-posts";

export default class Home extends Component {
	handleSearchbarSubmit(query) {
		console.log("trying to handle submit query", query);
		//navigate to results page
		this.props.history.push(`/results?query=${query}`);
	}

	render() {
		return (
			<div className="app">
				<Logo />
				<SearchBar onSubmit={(query) => this.handleSearchbarSubmit(query)} />
				<RecentPosts />
			</div>
		);
	}
}
