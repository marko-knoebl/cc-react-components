import "./Badge.css";
import React from "react";

const Badge = (props) => {
	return (
		<div className="badge-container">
			<span className="cart-icon" role="img" aria-label="cart">
				{props.children ? props.children : "🛒"}
			</span>
			{props.value > 0 && props.value < 10 ? (
				<div className="bubble">
					<span id="notification-number">{props.value}</span>
				</div>
			) : props.value > 9 ? (
				<div className="bubble">
					<span id="notification-number">9+</span>
				</div>
			) : null}
		</div>
	);
};

export default Badge;
