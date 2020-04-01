import React from "react";

export default function Counter( props ) {
	const { id, label, quantity} = props.counter;

	return (
		<div className="counter">
			<div className="counter-label">
				{label}
			</div>
			<div className="counter-quantity">
				<button onClick={() => props.counterUpdate(id, quantity - 1)}>-</button>
				<span>{quantity}</span>
				<button onClick={() => props.counterUpdate(id, quantity + 1)}>+</button>
			</div>
		</div>
	);
}