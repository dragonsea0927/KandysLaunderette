import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../animations/animations";

const IconTextCard = (props) => {
	return (
		<div className="flex flex-row justify-start items-center gap-4">
			<Image
				src={props?.icon}
				className="w-full h-[50px] object-contain"
				alt="Icon"
				width={35}
				height={35}
			/>
			<motion.p
				variants={fadeIn}
				className="text-blue text-left text-base font-[600]"
			>
				{props?.text}
			</motion.p>
		</div>
	);
};

export default IconTextCard;
