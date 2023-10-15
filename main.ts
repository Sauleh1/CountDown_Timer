#!/usr/bin/env node

import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns"

// Project "Countdown Timer";

// --> Version 1:

// class Time {
// 	constructor(
// 		public Minutes: number,
// 		public Seconds: number
// 	) {
// 		this.Minutes = Minutes
// 		this.Seconds = Seconds
// 	}
// }

// let CountDown = new Time(1, 20)

// setInterval(function() {
// 	if (CountDown.Seconds == 0 && CountDown.Minutes == 0) {
// 		console.log(`CountDown Over!`);
// 		process.exit();
// 	} else {
// 		if (CountDown.Minutes > 0 && CountDown.Seconds == 0) {
// 			console.log(`${CountDown.Minutes}m : ${CountDown.Seconds}s`);
// 			CountDown.Seconds = 60;
// 			CountDown.Seconds--
// 			CountDown.Minutes = CountDown.Minutes - 1;
// 		} else {
// 			console.log(`${CountDown.Minutes}m : ${CountDown.Seconds}s`);
// 			CountDown.Seconds--
// 		}
// 	}
// }, 1000)

//  --> Version 2:

let res = await inquirer.prompt([
	{
		name: "Seconds",
		type: "number",
		message: "How many seconds to Run for?",
		validate: (input: number) => {
			if (isNaN(input)) {
				return "Time is a number"
			}
			else if (input > 60) {
				return "Seconds should return less than or equal to 60" 
			} else {
				return true
			}
		}
	}
])
let input = res.Seconds;

function StartTimer(val: number) {
	console.clear();
	let seconds = new Date().setSeconds(new Date().getSeconds() + val);
	let intTime = new Date(seconds)
	setInterval(() => {
		let currentTime = new Date();
		let timediff = differenceInSeconds(intTime, currentTime)
		if (timediff <= 0) {
			console.log("Timer Has Expired");
			process.exit();
		}
		let minute = Math.floor((timediff % (3600 * 24)) / 3600)
		let seconds = Math.floor(timediff % 60)
			console.log(`${minute}m : ${seconds}s`);
			setTimeout(() => {
				console.clear();
			}, 1000)
		}, 1000)
}

StartTimer(input)

