import React, { useEffect, useState } from "react";

import "./AnalogClock.styles.css";

// Optional props => small , dashed
const AnalogClock = ({ small, dashed }) => {
	const [time, setTime] = useState(new Date());
	useEffect(() => {
		const clockInterval = setInterval(() => {
			setTime(new Date());
			return clearInterval(clockInterval);
		}, 100);
	});
	return (
		<div className={`analog-clock ${small ? "small" : null}`}>
			<div
				className="dial seconds"
				style={{
					transform: `rotateZ(${
						(time.getSeconds() + time.getMilliseconds() / 1000) * 6
					}deg)`,
				}}
			/>
			<div
				className="dial minutes"
				style={{
					transform: `rotateZ(${
						(time.getMinutes() + time.getSeconds() / 60) * 6
					}deg)`,
				}}
			/>
			<div
				className="dial hours"
				style={{
					transform: `rotateZ(${
						(time.getHours() + time.getMinutes() / 60) * 30
					}deg)`,
				}}
			/>

			{small ? null : dashed ? (
				<div>
					<span className="twelve dashed">|</span>

					<span className="three dashed">|</span>
					<span className="six dashed">|</span>
					<span className="nine dashed">|</span>
				</div>
			) : (
				<div>
					<span className="twelve">12</span>
					<span className="one">1</span>
					<span className="two">2</span>
					<span className="three">3</span>
					<span className="four">4</span>
					<span className="five">5</span>
					<span className="six">6</span>
					<span className="seven">7</span>
					<span className="eight">8</span>
					<span className="nine">9</span>
					<span className="ten">10</span>
					<span className="eleven">11</span>
				</div>
			)}
		</div>
	);
};

export default AnalogClock;
