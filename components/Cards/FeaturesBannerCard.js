/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unknown-property */
import styles from "../../styles/components/FeaturesBanner.module.scss";

const FeaturesBannerCard = (props) => {
	return (
		<div className="w-full lg:w-1/3 py-4">
			<div className={styles.iconsWrap}>
				<div className="flex flex-row justify-center items-center gap-x-8">
					<img
						src={props.icon?.sourceUrl}
						alt={`${props.icon?.altText} Icon`}
						className="w-[75px] h-[75px] sm:w-[100px] sm:h-[100px] lg:w-[110px] lg:h-[110px] object-contain object-center"
					/>
					<div className="p-3">
						<h3 className="text-base md:text-medium text-center text-black font-[400] lg:text-left">
							{props.title}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesBannerCard;
