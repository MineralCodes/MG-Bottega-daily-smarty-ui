import React, { Component } from "react";

export default class Post extends Component {
	renderTopics() {
		let topics = this.props.associated_topics.map((topic, index) => {
			return (
				<span key={index} className="post-topic">
					{topic}
				</span>
			);
		});

		return topics;
	}

	render() {
		return (
			<li className="recent-post">
				<div className="recent-post-title">{this.props.title}</div>
				<div className="recent-post-topics">{this.renderTopics()}</div>
			</li>
		);
	}
}
