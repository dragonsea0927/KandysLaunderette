/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/FeaturesBanner.module.scss";
import FeaturesBannerCard from "./Cards/FeaturesBannerCard";

const FeaturesBanner = (props) => {
	return (
		<section className={styles.featuresBanner}>
			<div className="container px-0 mx-auto">
				<div className="flex flex-col justify-center items-center px-4">
					<motion.div variants={fadeInUp} className="py-8 px-4 mb-8">
						<h2 className="w-full lg:w-[45rem] mx-auto text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{props?.title}
						</h2>
					</motion.div>
					<div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center">
						{props.content.map((keys) => (
							<FeaturesBannerCard
								Key={keys?.id}
								title={keys?.title}
								icon={keys?.icon}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesBanner;
