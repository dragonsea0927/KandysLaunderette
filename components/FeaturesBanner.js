/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/FeaturesBanner.module.scss";
import FeaturesBannerCard from "./FeaturesBannerCard";

const FeaturesBanner = (props) => {
	return (
		<section className={styles.featuresBanner}>
			<div className="container px-0 mx-auto">
				<div className="flex flex-col px-4">
					<motion.div variants={fadeInUp} className="py-8 px-4">
						<h2 className="w-full lg:w-[45rem] mx-auto leading-[2.5rem] sm:leading-[3rem] text-black text-center font-[600] text-3xl lg:text-5xl">
							{props?.title}
						</h2>
					</motion.div>
					<div className="flex flex-col sm:flex-row justify-between items-center">
						{/* Array Loop */}
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
