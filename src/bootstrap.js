import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import thunk from "redux-thunk";

import reducers from "./reducers";

import Home from "./components/home";
import Results from "./components/results";
import NoMatch from "./components/no-match";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

import "./style/main.scss";

function main() {
	ReactDOM.render(
		<Provider store={createStoreWithMiddleware(reducers)}>
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/results" component={Results} />
					<Route component={NoMatch} />
				</Switch>
			</BrowserRouter>
		</Provider>,
		document.querySelector(".app-wrapper")
	);
}

document.addEventListener("DOMContentLoaded", main);
