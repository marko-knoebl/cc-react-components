import './Badge.css';
import React, { Children } from 'react';

const Badge = ({ children, value }) => {
	return (
		<div className='badge-container'>
			{children}
			{value > 0 && value < 10 ? (
				<div className='bubble'>
					<span id='notification-number'>{value}</span>
				</div>
			) : value > 9 ? (
				<div className='bubble'>
					<span id='notification-number'>9+</span>
				</div>
			) : null}
		</div>
	);
};

export default Badge;
