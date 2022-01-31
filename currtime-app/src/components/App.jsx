import React, { useState } from "react";

function App() {
	const now = new Date().toLocaleTimeString();
	//change continously so we need useState hook

	const [time, setTime] = useState(now);
	// first parameter is custom the other is from React library
	console.log(now);
	return (
		<div className="container">
			<h1>{time}</h1>
			<button>Get Time</button>
		</div>
	);
}

export default App;
