import React, { Component } from "react";

export default class Logo extends Component {
	render() {
		const size = {
			width: this.props.size ? this.props.size : 105,
			height: this.props.size ? this.props.size : 105,
		};

		return (
			<div className="logo-wrapper-main">
				<img src="/assets/ds_circle_logo.png" alt="dailysmarty logo" style={size} />
			</div>
		);
	}
}
