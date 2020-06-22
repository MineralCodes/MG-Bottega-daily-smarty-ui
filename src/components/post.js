import React, { Component } from "react";
import AnimateHeight from "react-animate-height";

export default class Post extends Component {
	constructor(props) {
		super(props);

		this.state = {
			height: 0,
		};
	}

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

	getPostLinkName(url) {
		let n = url.lastIndexOf("/");
		let title = url.substring(n + 1, url.length);

		if (n + 1 == url.length) {
			let trim = url.slice(0, n);
			n = trim.lastIndexOf("/");
			title = url.substring(n + 1, url.length - 1);
		}

		if (title.includes(".")) {
			let trim = title.lastIndexOf(".");
			title = title.slice(0, trim);
		}

		title = title.replace(/-/g, " ");
		title = title.replace(/_/g, " ");

		return title;
	}

	renderUsefulLinks() {
		let links = this.props.post_links.map((post_link, index) => {
			return (
				<div key={index} className="useful-link">
					<div className="useful-link-box"></div>
					<div className="useful-link-link">
						<a href={post_link.link_url} target="_blank">
							{this.getPostLinkName(post_link.link_url)}
						</a>
					</div>
				</div>
			);
		});

		return links;
	}

	render() {
		if (this.props.type === "recent") {
			return (
				<li className="recent-post">
					<div className="recent-post-title">
						<a href={this.props.url_for_post} target="_blank">
							{this.props.title}
						</a>
					</div>
					<div className="recent-post-topics">{this.renderTopics()}</div>
				</li>
			);
		} else if (this.props.type === "result") {
			return (
				<li
					className="result-post"
					onMouseEnter={() => {
						this.setState({ height: 80 });
					}}
					onMouseLeave={() => {
						this.setState({ height: 0 });
					}}
				>
					<div className="result-post-topics">{this.renderTopics()}</div>
					<div className="result-post-title">
						<a href={this.props.url_for_post} target="_blank">
							{this.props.title}
						</a>
					</div>
					<AnimateHeight duration={500} height={this.state.height}>
						<div className="result-post-links">
							{this.props.post_links.length != 0 ? (
								this.renderUsefulLinks()
							) : (
								<div className="no-links">This post has no links to display</div>
							)}
						</div>
					</AnimateHeight>
				</li>
			);
		}
	}
}
