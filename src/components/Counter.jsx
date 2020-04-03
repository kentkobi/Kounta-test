import React from "react";

export default function Counter( props ) {
	const { id, label, quantity} = props.counter;
	const { counterUpdate } = props.counterUpdate;

	return (
		<div className="counter">
			<div className="counter-label">
				{label}
			</div>
			<div className="counter-quantity">
				<button onClick={() => counterUpdate(id, quantity - 1)}>-</button>
				<span>{quantity}</span>
				<button onClick={() => counterUpdate(id, quantity + 1)}>+</button>
			</div>
		</div>
	);
}