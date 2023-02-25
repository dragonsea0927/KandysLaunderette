import {FunctionComponent} from "react";

interface IProps {
	point: string;
	numberCount: number;
}

const SubscriptionsCardPoints: FunctionComponent<IProps> = ({
	point,
	numberCount,
}) => {
	/* Calculates How many iterations and sets
    the third card to a different color. */
	let textColor: string;
	let svgColor: string;

	switch (numberCount) {
		case 1:
			textColor = "black";
			svgColor = "#dd4577";
			break;
		case 2:
			textColor = "black";
			svgColor = "#dd4577";
			break;
		case 3:
			textColor = "white";
			svgColor = "#fff";
			break;
		case 4:
			textColor = "black";
			svgColor = "#dd4577";
			break;
	}

	return (
		<li className="mb-4 flex items-center">
			<svg
				className="mr-2"
				width="20"
				height="20"
				viewBox="0 0 20 20"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M4.16699 10.8333L7.50033 14.1666L15.8337 5.83325"
					stroke={`${svgColor}`}
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
			<p className={`font-[600] text-${textColor}`}>{point}</p>
		</li>
	);
};

export default SubscriptionsCardPoints;
