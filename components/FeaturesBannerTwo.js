import styles from "../styles/components/FeaturesBanner.module.scss";
import FeaturesBannerCardTwo from "./Cards/FeaturesBannerCardTwo";

const FeaturesBannerTwo = (props) => {
	return (
		<section className={styles.featuresBannerTwo}>
			<div className="py-10 bg-pink overflow-hidden">
				<div className="container mx-auto px-4">
					<div className="py-16 px-8 sm:p-16">
						<h2 className="mb-10 text-4xl md:text-5xl text-white tracking-tight font-[600]">
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
