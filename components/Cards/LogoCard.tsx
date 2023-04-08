/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeIn} from "../../animations/animations";

interface IProps {
	image: {
		altText: string;
		sourceUrl: string;
	};
}

const LogoCard: FunctionComponent<IProps> = ({image}) => {
	return (
		<motion.div
			variants={fadeIn}
			className="w-full mx-auto md:w-1/2 lg:w-1/6 lg:mx-0"
		>
			<Image
				width={550}
				height={550}
				alt={`${image?.altText}`}
				src={`${image?.sourceUrl}`}
				className="w-full h-[75px] sm:h-[200px] object-contain object center"
			/>
		</motion.div>
	);
};

export default LogoCard;
