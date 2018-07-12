import React, { Component } from "react"
import TruncateProps from "../components/Truncateprops"
import Header from "../components/Header"

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<TruncateProps title="The props of the future need to be long on this component" />
			</div>
		)
	}
}

export default App
