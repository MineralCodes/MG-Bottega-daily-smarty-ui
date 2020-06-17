import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class SearchBar extends Component {
	constructor() {
		super();

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit({ query }) {
		console.log("trying to handle submit query", query);
		//navigate to results page
	}

	renderInput(field) {
		return <input type="text" placeholder="Search DailySmarty" {...field.input} />;
	}

	render() {
		const { handleSubmit } = this.props;
		return (
			<form className="search-bar" onSubmit={handleSubmit(this.handleFormSubmit)}>
				<Field name="query" component={this.renderInput} />
			</form>
		);
	}
}

SearchBar = reduxForm({
	form: "searchBar",
})(SearchBar);

export default SearchBar;
