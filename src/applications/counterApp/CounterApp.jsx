import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	increment,
	decrement,
	incrementByAmount,
	multiplyByAmount,
} from "../../redux/slices/counterSlice";
import "./counterApp.style.css";

const CounterApp = () => {
	const {
		count,
		name,
		address: { city },
	} = useSelector((state) => state.counter);

	const dispatch = useDispatch();

	const onMinusClick = () => {
		console.log("minus");
		dispatch(decrement());
	};
	const onPlusClick = () => {
		console.log("plus");
		dispatch(increment());
	};
	const onPlusTenClick = () => {
		dispatch(incrementByAmount(10));
	};
	const onMulpitlyByTen = () => {
		dispatch(multiplyByAmount(10));
	};

	return (
		<div className="counter-container">
			<h3>
				{name} at <em>{city}</em>
			</h3>
			<button className="counter-button" onClick={onMinusClick}>
				-
			</button>
			<span className="counter-display">{count}</span>
			<button className="counter-button" onClick={onPlusClick}>
				+
			</button>
			<button onClick={onPlusTenClick}>+10</button>
			<button onClick={onMulpitlyByTen}>*10</button>
		</div>
	);
};

export default CounterApp;
