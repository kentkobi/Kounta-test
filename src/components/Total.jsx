import React from "react";

export default function Total( props ) {
	const total = props.counters.reduce((sum, counter) => sum + counter.quantity, 0);
  return (
  	<div className="total">
  		<div className="total-label">Total</div>
  		<div className="total-quantity">{total}</div>
  	</div>
  ) 	
}
