import React from "react";

function Card({ children }) {
	return (
		<div className="whole-card">
			<div className="card-header">
				<h1>This is a fancy title</h1>
			</div>
			<div className="card-body">
				<p> Lorem Ipsum bla bla</p>
				<p>{children}</p>

				<form
					action="https://www.google.com/maps/place/Appartement+somewhere+over+the+city/@47.9573328,14.7759824,17z/data=!3m1!4b1!4m6!3m5!1s0x4772317a9f654f51:0x4f3107a82b0cc0fd!8m2!3d47.9573328!4d14.7781711!16s%2Fg%2F11j2x9cy6p?coh=164777&entry=tt"
					target="_blank"
				>
					<button type="submit" value="Go somewhere">
						Click here to go somewhere
					</button>
				</form>
			</div>
		</div>
	);
}

export default Card;
