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
							description="Built UI similar to YouTube music web app with carousel displaying various songs and albums."
							livePreview="https://mini2809.github.io/YouTubeMusic-Clone/"
							githubLink="https://github.com/mini2809/YouTubeMusic-Clone"
						/>
						<div className="gap"></div>
						<Projectcard
							className="left"
							title="Portfolio project |"
							description="Built a single page portfolio project which displays work experience, projects and education."
							livePreview="https://mini2809.github.io"
							githubLink="https://github.com/mini2809/mini2809.github.io"
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
							livePreview="https://mini2809.github.io/Mytime/"
							githubLink="https://github.com/mini2809/Mytime"
						/>
						<div className="gap"></div>
						<Projectcard
							className="right"
							title="Word Guessing Game"
							description="Built word guessing game where user gets 6 attempts to guess a word,In each attempt, user will get to know if entered characters are present in the result word also whether entered characters
							are present in correct location."
							livePreview="https://mini2809.github.io/My-Wordle/"
							githubLink="https://github.com/mini2809/My-Wordle"
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
						point1="Learnt HTML,CSS and Javascript from core"
						point2="Learnt Bundling Tools Like Webpack ,service Workers and other frontend Performance optimization through this Program"
						point3="Completed Several Projects Assignments in between the program which was reviewed and approved by Udacity Mentors"
					/>
					<SkillCard
						type="education"
						designation="BE Computer Science at"
						c_name=" Shri Shankaracharya Technical Campus "
						from="August 2020"
						to="Nov 2022"
						timeperiod=" 3 mos"
						point1="Completed B.E. in Computer Science  anf=d Engineering branch "
						point2="Learnt Computer Science Engineering From Basics to Advanced Concepts  "
						point3="Good Grasp in Data Structure and Algorithm , Operating System and Programming Concepts "
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
