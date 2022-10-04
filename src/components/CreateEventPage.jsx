/** @format */

import React from "react";
import "./CreateEventPage.css";

function CreateEventPage() {
	return (
		<section id='createeventpage'>
			<div>
				<form>
					<div>
						<p>Host Name:</p>
						<input placeholder='Your Name' />
					</div>
					<div>
						<p>Event Name:</p>
						<input placeholder='Events6 Name' />
					</div>
					<div>
						<p>Start Date:</p>
						<input placeholder='Starting Date' type='date' />
					</div>
					<div>
						<p>End Date:</p>
						<input placeholder='Ending Date' type='date' />
					</div>
					<div>
						<p>Events Location</p>
						<input placeholder='Events Location' />
					</div>
					<div>
						<p>Events Photo/Banner</p>
						<input type='file' placeholder='Events Photo/Banner' />
					</div>
				</form>

				<button>Next</button>
			</div>
		</section>
	);
}

export default CreateEventPage;
