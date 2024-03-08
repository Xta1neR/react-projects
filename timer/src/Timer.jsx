	import React from "react";
	import { useState, useEffect} from "react";
	import './Timer.css';

	const Timer = () => {
			const [days, setDays] = useState(0);
			const [hours, setHours] = useState(0);
			const [min, setMin] = useState(0);
			const [sec, setSec] = useState(0);

			const endDate = "March, 15, 2024";

			const getTime = () => {
				const time = Date.parse(endDate)-Date.now();

				setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
				setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
				setMin(Math.floor((time / 1000 / 60) % 60));
				setSec(Math.floor((time / 1000) % 60));
			};

			useEffect (() =>{
				const interval = setInterval(() => getTime(endDate),1000);
				return() => clearInterval(interval);
			},[]);

			return(
				<div className="timer">
					<h1>Name : Rituraj Goswami</h1>
					<h1>Registration Number : 12101798</h1>
					<br />
					<br />
					<h2>Timer</h2>
					<h2>The Quiz start in : 
						<p>{days.toString().padStart(2, '0')} : {hours.toString().padStart(2, '0')} : {min.toString().padStart(2, '0')} : {sec.toString().padStart(2, '0')}</p>
					</h2>
				</div>
			);
	};

	export default Timer;