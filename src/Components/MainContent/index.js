import "./index.scss";
import { LandingPage } from "../LandingPage";
import { SkillCard } from "../SkillCard";
import { Projectcard } from "../ProjectCard";
import { ContactMe } from "../ContactMe";

export function MainContent() {
	return (
		<div className="main-container">
			<LandingPage id="aboutMe" />
			<div className="sectionGap"></div>
			<div id="workExperienceCards">
				<h2 className="sectionTitle">Work Experience</h2>
				<div className="cards">
					<SkillCard
						type="WorkExp"
						designation="Software Engineer from"
						c_name=" TCS"
						from="Nov 2020"
						to="Feb 2022"
						timeperiod=" 1 yr 4 mos"
						point1="Built front end of an insurance web application which allows users to list insurance products, compare across products."
						point2="User can search for a particular insurance scheme, sort and filter from the returned list."
						point3="Integrated front end with different back end server to complete end-to-end working of insurance portal."
					/>
					<SkillCard
						type="WorkExp"
						designation="React Developer from"
						c_name=" Select Dine"
						from="August 2020"
						to="Nov 2022"
						timeperiod=" 3 mos"
						point1="Built various UI Reusable components in React and unit tested with React-testing-library, used across application and
						quickly built various prototypes with information gathered from the product team."
						point2="Built end to end e-commerce web application with all features including cart page, search, filters, product listings, user
						and vendor accounts, billing integration using react, redux, react-router, web pack and babel."
						point3="Collaborated with back end team to understand and utilize APIs for building front end of e-commerce platform."
					/>
				</div>
			</div>

			<div id="cardsForProjects">
				<div className="sectionGap"></div>
				<h2 className="sectionTitle">Projects</h2>
				<div className="projectsTimeline">
					<div className="leftcards">
						{" "}
						<Projectcard
							className="left"
							title="YouTube music clone"
							description="Built UI similar to YouTube music web app with carousel displaying various songs and albums.
							"
						/>
						<div className="gap"></div>
						<Projectcard
							className="left"
							title="Portfolio project |"
							description="Built a single page portfolio project which displays work experience, projects and education."
						/>
					</div>
					<div className="timeline">
						<div className="timelinediv" id="timelinediv">
							{/* <div className="circle"></div> */}
							{/* {calltoNextCircle()} */}
						</div>
					</div>
					<div className="rightcards">
						<div className="gap"></div>
						<Projectcard
							className="right"
							title="Single view calendar dashboard"
							description="Single View Calendar Dashboard consolidates calendars from different sources (Gmail, Exchange, Outlook, iCal) into a
							single view,User gets an option to accept or reject meeting requests which can be sent by anyone outside of organisation.
							"
						/>
						<div className="gap"></div>
						<Projectcard
							className="right"
							title="Word Guessing Game"
							description="Built word guessing game where user gets 6 attempts to guess a word,In each attempt, user will get to know if entered characters are present in the result word also whether entered characters
							are present in correct location."
						/>
					</div>
				</div>
			</div>
			<div className="sectionGap"></div>
			<div id="educationCards">
				<h2 className="sectionTitle">Education</h2>
				<div className="cards">
					<SkillCard
						type="education"
						designation="Front end Nanodegree Course at"
						c_name=" Udacity"
						from="April 2020"
						to="July 2022"
						timeperiod=" 1yr 3 mos"
						point1="Developed and managed the backend of an e-commerce
                    platform using Flask, MongoDB, and AWS."
						point2="Developed and managed the backend of an e-commerce
                    platform using Flask, MongoDB, and AWS. Worked on three
                    web applications targeting customers, selling vendors,
                    and admin users; built 50+ RESTful APIs with
                    functionalities such as login/sign up, view a product,
                    add a product to cart, checkout the order, etc."
						point3="Improved the response time by 20% by refactoring the
                    codebase and changing database design and queries."
					/>
					<SkillCard
						type="education"
						designation="BE Computer Science at"
						c_name=" Shri Shankaracharya Technical Campus "
						from="August 2020"
						to="Nov 2022"
						timeperiod=" 3 mos"
						point1="Developed and managed the backend of an e-commerce
                    platform using Flask, MongoDB, and AWS."
						point2="Developed and managed the backend of an e-commerce
                    platform using Flask, MongoDB, and AWS. Worked on three
                    web applications targeting customers, selling vendors,
                    and admin users; built 50+ RESTful APIs with
                    functionalities such as login/sign up, view a product,
                    add a product to cart, checkout the order, etc."
						point3="Improved the response time by 20% by refactoring the
                    codebase and changing database design and queries."
					/>
				</div>
			</div>
			<div className="sectionGap"></div>
			<h2 className="sectionTitle">Contact Me</h2>
			<div id="contactMe">
				<ContactMe />
			</div>
			<div className="sectionGap"></div>
		</div>
	);
}
function calltoNextCircle() {
	console.log(window.innerHeight);
	let parentDiv = document.getElementById("timelinediv");
	let height = window.innerHeight;

	for (let i = 0; i < 3; i++) {
		height = 400 + height;
		console.log(height);
		let child = document.createElement("div");
		child.classList.add("circle");
		child.style.height = height;
		parentDiv.append(child);
	}
}
