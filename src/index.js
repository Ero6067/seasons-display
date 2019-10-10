import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import { stat } from "fs";

class App extends React.Component {
	/* same as line 16 */
	//
	// constructor(props) {
	// 	super(props);

	// 	this.state = { lat: null, errorMessage: "" };
	// }

	// State is a JS obj that contains data relevant to a component
	state = { lat: null, errorMessage: "" };

	// this method is called as soon as the component becomes live
	componentDidMount() {
		// get the users current location as soon as the app launches
		window.navigator.geolocation.getCurrentPosition(
			position => this.setState({ lat: position.coords.latitude }),
			err => this.setState({ errorMessage: err.message })
		);
	}

	// component update or prop change
	componentDidUpdate() {
		console.log("My component was just updated - it rerendered!!");
	}

	// React says we have to define render!!
	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <div>Error: {this.state.errorMessage}</div>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <div>Loading!!</div>;
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));
