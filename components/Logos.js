/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import LogoCardTwo from "./Cards/LogoCardTwo";
import {fadeIn, stagger} from "../animations/animations";

const Logos = (props) => {
	return (
		<section className="py-20 bg-lightGrey">
			<div className="container px-4 mx-auto">
				<motion.h2
					variants={fadeIn}
					className="text-black text-center font-[600] text-xl sm:text-4xl lg:text-5xl mb-24"
				>
					{props?.title}
				</motion.h2>
				<div className="max-w-6xl mx-auto">
					<motion.div
						variants={stagger}
						className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-5 justify-center xl:justify-between items-center gap-4 gap-y-8"
					>
						{props?.logoGrid.map((keys) => (
							<LogoCardTwo Key={keys?.id} image={keys?.image} />
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Logos;
