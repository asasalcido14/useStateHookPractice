import React, { useState } from "react";

function App() {
	setInterval(updateTime, 1000);

	const now = new Date().toLocaleTimeString();
	//change continously so we need useState hook

	const [time, setTime] = useState(now);
	// first parameter is custom the other is from React library
	function updateTime() {
		// we want to update time which is the "value"
		const newTime = new Date().toLocaleDateString();
		setTime(newTime);
	}

	return (
		<div className="container">
			<h1>{time}</h1>
			<button onClick={updateTime}>Get Time</button>
		</div>
	);
}

export default App;
