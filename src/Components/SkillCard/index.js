import "./index.scss";
import css from "../../public/skillcard-icons/css.svg";
import git from "../../public/skillcard-icons/git.svg";
import jira from "../../public/skillcard-icons/jira.svg";
import js from "../../public/skillcard-icons/js.svg";
import html from "../../public/skillcard-icons/html.svg";
import react from "../../public/skillcard-icons/react.svg";
import redux from "../../public/skillcard-icons/redux.svg";

const propsToSvgs = {
	JS: js,
	HTML: html,
	CSS: css,
	JIRA: jira,
	GIT: git,
	REACT: react,
	REDUX: redux,
};
export function SkillCard(props) {
	console.log(props);
	return (
		<div className="workExpContainer">
			<div className="WEheading">
				<div>
					<div className="designation">
						{props.designation}
						<b>{props.c_name}</b>
					</div>
				</div>
				<div className="timeperiod">
					{props.from} - {props.to} |{props.timeperiod}
				</div>
			</div>
			<div className="matter">
				<ul>
					<li>{props.point1}</li>
					<li>{props.point2}</li>
					<li>{props.point3}</li>
				</ul>
			</div>
			<div className="techUsed">
				{props.tech((t) => {
					// <img src={props.svgs(t).value} alt="html" />
					console.log(props.svgs(t).value);
				})}

				{/* <img src={css} alt="html" />
				<img src={git} alt="html" />
				<img src={jira} alt="html" />
				<img src={js} alt="html" />
				<img src={react} alt="html" />
				<img src={redux} alt="html" /> */}
			</div>
		</div>
	);
}
