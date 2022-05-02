import "./index.scss";
import contact from "../../public/nav-icons/contact.svg";
import education from "../../public/nav-icons/education.svg";
import experience from "../../public/nav-icons/experience.svg";
import profile from "../../public/nav-icons/profile.svg";
import projects from "../../public/nav-icons/projects.svg";
import resume from "../../public/nav-icons/resume.svg";
import profilepic from "../../public/nav-icons/profile-pic.jpeg";

export function SideNavBar() {
	return (
		<div className="nav-container">
			<div className="profilephotodiv">
				<img src={profilepic} alt="profile-pic" className="ppic" />
			</div>
			<div>
				<ul className="list">
					<li>
						<a href="#aboutMe">
							<img src={profile} alt="profile" />
							<div className="tag"> About Me</div>
						</a>
					</li>
					<li>
						<a href="#workExperienceCards">
							<img src={experience} alt="experience" />
							<div className="tag"> Work Experience</div>
						</a>
					</li>
					<li>
						<img src={projects} alt="projects" />
						<a href="#cardsForProjects">
							<div className="tag"> Projects</div>
						</a>
					</li>
					<li>
						<a href="#educationCards">
							<img src={education} alt="education" />
							<div className="tag"> Education</div>
						</a>
					</li>
					<li>
						<a href="#contactMe">
							<img src={contact} alt="contact" />
							<div className="tag"> Contact</div>
						</a>
					</li>
					<li>
						<img src={resume} alt="resume" />
						<a
							className="resumetab"
							href="https://drive.google.com/file/d/1NhL0VQwg6Ht9kCTwx4xDaKOe9a497FCp/view?usp=sharing"
							target="_blank"
						>
							<div className="tag">Resume</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
