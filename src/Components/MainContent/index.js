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
						tech={["JS", "HTML", "CSS"]}
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
							title="Single view calendar dashboard"
							description="Single View Calendar Dashboard consolidates calendars from different sources (Gmail, Exchange, Outlook, iCal) into a
							single view.
							User gets an option to accept or reject meeting requests which can be sent by anyone outside of organisation.
							Dashboard also provides an analysis view of last week’s time spent on meetings in form of charts and graphs."
						/>
						<div className="gap"></div>
						<Projectcard
							className="left"
							title="YouTube music clone "
							description="Built UI similar to YouTube music web app with carousel displaying various songs and albums.
							Integrated music player which allows user to select and play any music with all features (play/pause, volume controls,
							navigation).
							Tech stack: React, HTML, CSS."
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
							title="Word Guessing Game"
							description="Built word guessing game where user gets 6 attempts to guess a word.
							In each attempt, user will get to know if entered characters are present in the result word also whether entered characters
							are present in correct location.
							Tech stack: HTML, CSS, JavaScript."
						/>
						<div className="gap"></div>
						<Projectcard
							className="right"
							title="Portfolio project"
							description="Built a single page portfolio project which displays work experience, projects and education.
							Integrated Jekyll blogging which allows static content to be deployed in github repo and later fetched as blogs in front
							end.
							Tech stack: HTML, CSS, JavaScript."
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
						point1="Learnt Html ,Css and Javascript"
						point2="Learnt Nodejs, built tools such as webpack,Service workers and preformance optimization techniques"
						point3="Completed Challenging Assignments and projects under technical Proficient mentors "
					/>
					<SkillCard
						type="education"
						designation="BE Computer Science at"
						c_name=" Shri Shankaracharya Technical Campus "
						from="August 2020"
						to="Nov 2022"
						timeperiod=" 3 mos"
						point1="Completed Bachelor's in Computer Science of Engineering"
						point2="Learnt Fundamentals of Computer Science"
						point3="Strong grasp in Data Structures , Algorithms , operating System and core subjects"
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
