import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeIn} from "../../animations/animations";

interface IProps {
	text: string;
	textColor: string;
	icon: {
		altText: string;
		sourceUrl: string;
	};
}

const IconTextCard: FunctionComponent<IProps> = ({icon, text, textColor}) => {
	return (
		<div className="flex flex-row justify-start sm:justify-center lg:justify-start items-center gap-4">
			<Image
				width={40}
				height={40}
				src={icon?.sourceUrl}
				alt={`${icon?.altText} Icon`}
				className="w-[40px] h-[40px] object-contain object-center"
			/>
			<motion.p
				variants={fadeIn}
				className={`${textColor} text-left text-lg font-[400]`}
			>
				{text}
			</motion.p>
		</div>
	);
};

export default IconTextCard;
