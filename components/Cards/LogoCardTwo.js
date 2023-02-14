import Image from "next/image";
import {motion} from "framer-motion";
import {fadeIn} from "../../animations/animations";

const LogoCardTwo = (props) => {
	return (
		<motion.div variants={fadeIn} className="mx-auto">
			<Image
				width={200}
				height={100}
				objectFit="contain"
				objectPosition="center"
				src={`${props?.image?.sourceUrl}`}
				alt={`${props?.image?.altText} Image`}
				className="w-full h-[200px] object-contain object-center"
			/>
		</motion.div>
	);
};

export default LogoCardTwo;
