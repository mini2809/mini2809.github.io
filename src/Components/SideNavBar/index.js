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
						<img src={profile} alt="profile" />
						<div
							className="tag"
							onClick={() => ScrollElementToView("aboutMe")}
						>
							{" "}
							About Me
						</div>
					</li>
					<li>
						<img src={experience} alt="experience" />
						<div
							className="tag"
							onClick={() =>
								ScrollElementToView("workExperienceCards")
							}
						>
							{" "}
							Work Experience
						</div>
					</li>
					<li>
						<img src={projects} alt="projects" />
						<div
							className="tag"
							onClick={() =>
								ScrollElementToView("cardsForProjects")
							}
						>
							{" "}
							Projects
						</div>
					</li>
					<li>
						<img src={education} alt="education" />
						<div
							className="tag"
							onClick={() =>
								ScrollElementToView("educationCards")
							}
						>
							{" "}
							Education
						</div>
					</li>
					<li>
						<img src={contact} alt="contact" />
						<div
							className="tag"
							onClick={() => ScrollElementToView("contactMe")}
						>
							{" "}
							Contact
						</div>
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

function ScrollElementToView(id) {
	let element = document.getElementById(id);
	element.scrollIntoView({
		behavior: "smooth",
		block: "end",
		inline: "nearest",
	});
}
