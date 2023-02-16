import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../../animations/animations";

const IconTextCard = (props) => {
	return (
		<div className="flex flex-row justify-start sm:justify-center lg:justify-start items-center gap-4">
			<Image
				src={props?.icon}
				className="w-full h-[4px] object-contain"
				alt="Icon"
				width={40}
				height={40}
			/>
			<motion.p
				variants={fadeIn}
				className={`${props?.textColor} text-left text-lg font-[400]`}
			>
				{props?.text}
			</motion.p>
		</div>
	);
};

export default IconTextCard;
