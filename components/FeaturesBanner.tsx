/* eslint-disable @next/next/no-img-element */
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/FeaturesBanner.module.scss";
import FeaturesBannerCard from "./Cards/FeaturesBannerCard";

interface IProps {
	title: string;
	content: [
		{
			id: string;
			title: string;
			icon: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const FeaturesBanner: FunctionComponent<IProps> = ({title, content}) => {
	return (
		<section className={styles.featuresBanner}>
			<div className="container px-0 mx-auto bg-white">
				<div className="flex flex-col items-center justify-center px-4">
					<motion.div variants={fadeInUp} className="px-4 py-8 mb-8">
						<h2 className="w-full lg:w-[45rem] mx-auto text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
					</motion.div>
					<div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
						{content.map((keys) => (
							<FeaturesBannerCard
								key={keys?.id}
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
