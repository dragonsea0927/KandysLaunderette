const SubscriptionsCardPoints = (props) => {
	/* Calculates How many iterations and sets
    the third card to a different color. */
	let textColor;

	switch (props?.numberCount) {
		case 1:
			textColor = "black";
			break;
		case 2:
			textColor = "black";
			break;
		case 3:
			textColor = "white";
			break;
		case 4:
			textColor = "black";
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
					stroke="#dd4577"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				></path>
			</svg>
			<p className={`font-semibold text-${textColor} leading-normal`}>
				{props?.point}
			</p>
		</li>
	);
};

export default SubscriptionsCardPoints;
