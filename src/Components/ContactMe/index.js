import linkedin from "../../public/landingpage-icons/linkedin.svg";
import "./index.scss";
export function ContactMe() {
	return (
		<div className="contactmeContainer">
			<p>
				If you are looking to get ahold of me, you can send me an email
				at <b>minijain928@gmail.com </b>
			</p>
			<p>
				You can also reach me on
				<a
					target="_blank"
					href="https://www.linkedin.com/in/mini-jain928"
				>
					<img
						src={linkedin}
						alt="linkedin-icon"
						className="icon-dimension"
					/>
				</a>
			</p>
		</div>
	);
}
