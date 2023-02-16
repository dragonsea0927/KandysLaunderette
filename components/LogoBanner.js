import {motion} from "framer-motion";
import LogoCard from "./Cards/LogoCard";
import {fadeIn, stagger} from "../animations/animations";

const LogoBanner = (props) => {
	return (
		<section className="py-20 px-4 lg:px-0">
			<div className="container mx-auto px-0">
				<motion.h2
					variants={fadeIn}
					className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl mb-24"
				>
					{props?.title}
				</motion.h2>
				<motion.div
					variants={stagger}
					className="grid grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-8"
				>
					{props?.logoBanner.map((keys) => (
						<LogoCard Key={keys?.id} image={keys?.image} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default LogoBanner;
