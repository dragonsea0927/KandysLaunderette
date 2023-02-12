/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {stagger} from "../animations/animations";
import PerformanceBannerCard from "./Cards/PerformanceBannerCard";

const PerformanceBanner = (props) => {
	return (
		<section className="py-10 bg-white sm:py-16 lg:py-24">
			<div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div className="text-center">
					<h2 className="w-full lg:w-[45rem] mx-auto text-black text-center leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
						{props?.title}
					</h2>
				</div>

				<motion.div
					variants={stagger}
					className="grid grid-cols-1 gap-6 px-6 mt-8 sm:px-0 lg:mt-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-12"
				>
					{props.gridContent.map((keys) => (
						<PerformanceBannerCard
							key={keys.id}
							image={keys?.card?.icon}
							title={keys?.card?.title}
							subtitle={keys?.card?.subtitle}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default PerformanceBanner;
