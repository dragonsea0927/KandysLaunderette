import Image from "next/image";
import styles from "../styles/components/FeaturesBanner.module.scss";

const FeaturesBannerCard = (props) => {
	return (
		<div className="w-full lg:w-1/3 p-4 sm:py-8 sm:px-0">
			<div className={styles.iconsWrap}>
				<div className="flex flex-row justify-center items-center m-0 sm:m-3">
					<div className="w-auto p-0 sm:p-3">
						<Image
							alt=""
							width="125px"
							height="125px"
							src={props.icon}
							objectFit="cover"
							objectPosition="center"
						/>
					</div>
					<div className="flex-1 p-3">
						<h3 className="text-base text-center font-[600] lg:text-left">
							{props.title}
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeaturesBannerCard;
