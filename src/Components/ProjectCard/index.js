import "./index.scss";
import projectImage from "../../public/project-card/project-image.svg";
import Vector from "../../public/project-card/Vector.svg";
import css from "../../public/skillcard-icons/css.svg";
import git from "../../public/skillcard-icons/git.svg";
import jira from "../../public/skillcard-icons/jira.svg";
import js from "../../public/skillcard-icons/js.svg";
import html from "../../public/skillcard-icons/html.svg";
import react from "../../public/skillcard-icons/react.svg";
import redux from "../../public/skillcard-icons/redux.svg";

export function Projectcard(props) {
	return (
		<div className="projectcard-container">
			<img
				className="projectImage"
				src={projectImage}
				alt="project-image"
			/>

			<div className="project-description">
				<div className="heading">
					<div className="title">{props.title}</div>
					<div>
						<button className="livepreview">Live Preview</button>
					</div>
				</div>
				<div className="description">{props.description}</div>
				<div className="footer">
					<div className="gitrepo">
						<img src={Vector} alt="Vector" />
					</div>
					<div className="techUsed">
						<img src={html} alt="html" />
						<img src={css} alt="html" />
						<img src={git} alt="html" />
						<img src={jira} alt="html" />
						<img src={js} alt="html" />
						<img src={react} alt="html" />
						<img src={redux} alt="html" />
					</div>
				</div>
			</div>
		</div>
	);
}
