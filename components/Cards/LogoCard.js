/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../../animations/animations";

const LogoCard = (props) => {
	return (
		<motion.div
			variants={fadeIn}
			className="w-full md:w-1/2 lg:w-1/6 mx-auto lg:mx-0"
		>
			<Image
				width={400}
				height={400}
				objectFit="contain"
				objectPosition="center"
				alt={props?.image?.altText}
				src={`${props?.image?.sourceUrl}`}
				className="w-full h-[400] object-contain object center"
			/>
		</motion.div>
	);
};

export default LogoCard;
