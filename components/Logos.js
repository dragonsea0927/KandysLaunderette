/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import LogoCardTwo from "./Cards/LogoCardTwo";
import {fadeIn, stagger} from "../animations/animations";

const Logos = (props) => {
	/* Sets the Background Color */
	let backgroundColor = props?.backgroundColor;
	if (backgroundColor === "White") {
		backgroundColor = "white";
	} else if (backgroundColor === "LightGrey") {
		backgroundColor = "lightGrey";
	}

	return (
		<section className={`py-20 bg-${backgroundColor}`}>
			<div className="container px-4 mx-auto">
				<motion.h2
					variants={fadeIn}
					className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl mb-24"
				>
					{props?.title}
				</motion.h2>
				<div className="max-w-6xl mx-auto">
					<motion.div
						variants={stagger}
						className="flex flex-col sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-5 justify-center lg:justify-between items-center gap-4 gap-y-8"
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
