/** @format */

import React from "react";
import "./EventPage.css";
// import { IconName } from "react-icons/im";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCalendarDays,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import birthday from "../components/birthdaycake.png";

function EventPage() {
	return (
		<div>
			<header>
				<h1>Birthday Bash</h1>
				<p>Hosted by Elysia</p>
			</header>
			<div>
				<div>
					<FontAwesomeIcon icon={faCalendarDays} />
					<p>18 August 6:00PM </p>
					<p> to 19 August 1:00PM UTC +10</p>
				</div>
				<div>
					<FontAwesomeIcon icon={faLocationDot} />
					<p>Street name</p>
					<p>Surburb, State, Postcode</p>
				</div>
			</div>
			<img src={birthday} alt='' />
		</div>
	);
}

export default EventPage;
