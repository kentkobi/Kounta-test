import React from "react";

export default function Total( props ) {
	const total = props.counters.reduce((sum, counter) => sum + counter.quantity, 0);
  return (
  	<div class="total">
  		<div class="total-label">Total</div>
  		<div class="total-quantity">{total}</div>
  	</div>
  ) 	
}
