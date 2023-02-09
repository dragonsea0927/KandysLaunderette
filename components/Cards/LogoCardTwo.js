import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../../animations/animations";

const LogoCardTwo = (props) => {
	return (
		<motion.div variants={fadeIn}>
			<Image
				className="w-full h-[200px] object-contain object center"
				width={200}
				height={100}
				objectFit="contain"
				objectPosition="center"
				alt={props?.image?.altText}
				src={`${props?.image?.sourceUrl}`}
			/>
		</motion.div>
	);
};

export default LogoCardTwo;
