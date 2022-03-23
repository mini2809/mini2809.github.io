import "./index.scss";
import linkedin from "../../public/landingpage-icons/linkedin.svg";
import gmail from "../../public/landingpage-icons/gmail.svg";
import github from "../../public/landingpage-icons/github.svg";

export function LandingPage() {
	return (
		<div className="landing-container">
			<div className="intro">
				<div>
					<div className="name">
						Hi, I’m <b>Mini Jain!</b>
					</div>
					<div className="designation">
						Frontend Javascript Developer
					</div>
				</div>
				<div className="contact-icons">
					<a
						target="_blank"
						href="https://www.linkedin.com/in/mini-jain928"
					>
						<img src={linkedin} alt="linkedin-icon" />
					</a>
					<a target="_blank" href="mailto:minijain928@gmail.com">
						<img src={gmail} alt="gmail-icon" />
					</a>
					<a target="_blank" href="https://github.com/mini2809">
						<img src={github} alt="github-icon" />
					</a>
				</div>
			</div>
			<div className="my-icon"></div>
		</div>
	);
}
