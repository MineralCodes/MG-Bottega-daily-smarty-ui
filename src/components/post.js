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
		if (this.props.type === "recent") {
			return (
				<li className="recent-post">
					<div className="recent-post-title">{this.props.title}</div>
					<div className="recent-post-topics">{this.renderTopics()}</div>
				</li>
			);
		} else if (this.props.type === "result") {
			return (
				<li className="recent-post">
					<div className="recent-post-title">{this.props.title}</div>
					<div className="recent-post-topics">{this.renderTopics()}</div>
				</li>
			);
		}
	}
}
