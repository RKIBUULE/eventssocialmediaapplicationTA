/** @format */

import React from "react";
import "./LandingPage.css";
import landing from "../components/landing.svg";
// import CreateEventPage from "./CreateEventPage";
import { Link } from 'react-router-dom';

function LandingPage() {
	return (

		<section id="landing">
            <header>
				<div className="header">
					<figure className="header__img--wrapper">
						<img src={landing} alt='' className="header__img" />
					</figure>
					<div className="header_description">
						<h1 className="header__title">
							Imagine if <span className="color">Snapchat</span>  had events.
						</h1>
						<p className="header__para">
							Easily host and share events with your friends across any social
							media.
						</p>
						<Link to = "#createeventpage" >
						<button className="btn">🎉 Create my event</button>
						</Link>
					</div>
				</div>
            </header>
		</section>
	);
}

export default LandingPage;
