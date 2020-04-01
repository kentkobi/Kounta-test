import React, { useState } from "react";

export default function Counter( props ) {
	const { id, label } = props.counter;
	const [quantity, setQuantity] = useState(props.counter.quantity);

	return (
		<div className="counter">
			<div className="counter-label">
				{label}
			</div>
			<div className="counter-quantity">
				<button onClick={() => setQuantity(quantity - 1)}>-</button>
				<span>{quantity}</span>
				<button onClick={() => setQuantity(quantity + 1)}>+</button>
			</div>
		</div>
	);
}