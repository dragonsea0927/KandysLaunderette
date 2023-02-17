/* eslint-disable @next/next/link-passhref */
import {motion} from "framer-motion";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/FourGridContent.module.scss";
import FourGridContentCard from "./FourGridContentCard";

const FourGridContent = (props) => {
	return (
		<section className={styles.fourGridContent}>
			<div className="py-24 bg-fadedPinkThree overflow-hidden">
				<div className="container mx-auto p-4 sm:p-0">
					<div className="flex flex-col justify-center items-center">
						<span className="inline-block mb-3 text-tiny text-white text-center mx-auto font-[600] uppercase tracking-widest">
							{props?.subtitle}
						</span>
						<motion.h2
							variants={fadeIn}
							className="my-12 text-5xl lg:text-6xl text-white text-center tracking-tight font-[700] leading-[3.5rem]"
						>
							{props?.title}
						</motion.h2>
					</div>
					<div className="flex flex-col sm:grid sm:grid-cols-2 justify-between items-center gap-5 lg:gap-8 m-4 p-4 xl:py-8 xl:px-28">
						{props?.gridContent.map((keys) => (
							<FourGridContentCard
								Key={keys?.id}
								image={keys?.image}
								title={keys?.title}
								paragraph={keys?.paragraph}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FourGridContent;
