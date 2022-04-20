import Lottie from "react-lottie";
import animationData from "../src/public/landingpage-icons/icon.json";

export default function LoadLottie() {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div>
			<Lottie options={defaultOptions} height={400} width={400} />
		</div>
	);
}
