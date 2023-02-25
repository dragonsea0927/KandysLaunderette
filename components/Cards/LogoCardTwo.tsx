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
				width={200}
				height={100}
				src={`${image?.sourceUrl}`}
				alt={`${image?.altText} Image`}
				className="w-full h-[200px] object-contain object-center"
			/>
		</motion.div>
	);
};

export default LogoCardTwo;
