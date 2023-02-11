import styles from "../styles/components/FeaturesBanner.module.scss";
import FeaturesBannerCardTwo from "./Cards/FeaturesBannerCardTwo";

const FeaturesBannerTwo = (props) => {
	return (
		<section className={styles.featuresBannerTwo}>
			<div className="py-10 bg-pink overflow-hidden">
				<div className="container mx-auto px-0">
					<div className="py-16 px-4 md:px-8 sm:p-16">
						<h2 className="mb-10 text-white font-[600] text-center lg:text-left text-xl sm:text-5xl">
							{props?.title}
						</h2>
						<div className="flex flex-wrap">
							{props.gridContent.map((keys) => (
								<FeaturesBannerCardTwo
									Key={keys?.id}
									icon={keys?.icon}
									title={keys?.title}
									paragraph={keys?.paragraph}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturesBannerTwo;
