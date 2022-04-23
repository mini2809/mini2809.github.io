import Lottie from "react-lottie";
import animationData from "../../public/landingpage-icons/icon.json";

export function LoadLottie() {
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
			<Lottie options={defaultOptions} width={600} />
		</div>
	);
}
