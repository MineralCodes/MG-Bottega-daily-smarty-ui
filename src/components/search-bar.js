import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { withRouter } from "react-router-dom";

class SearchBar extends Component {
	constructor() {
		super();

		this.handleFormSubmit = this.handleFormSubmit.bind(this);
	}

	handleFormSubmit({ query }) {
		console.log("trying to handle submit query", query);
		//navigate to results page
		this.props.history.push(`/results?query=${query}`);
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

SearchBar = withRouter(SearchBar);

export default SearchBar;
