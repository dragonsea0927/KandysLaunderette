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
const LogoCardTwo: FunctionComponent<IProps> = ({image}) => {
	return (
		<motion.div variants={fadeIn} className="mx-auto">
			<Image
				width={550}
				height={550}
				src={`${image?.sourceUrl}`}
				alt={`${image?.altText} Image`}
				className="w-full h-[75px] sm:h-[200px] object-contain object center"
			/>
		</motion.div>
	);
};

export default LogoCardTwo;
