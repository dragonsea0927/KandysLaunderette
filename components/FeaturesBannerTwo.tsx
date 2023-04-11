import {FunctionComponent} from "react";
import styles from "../styles/components/FeaturesBanner.module.scss";
import FeaturesBannerCardTwo from "./Cards/FeaturesBannerCardTwo";

interface IProps {
	title: string;
	gridContent: [
		{
			id: string;
			title: string;
			paragraph: string;
			icon: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const FeaturesBannerTwo: FunctionComponent<IProps> = ({title, gridContent}) => {
	return (
		<section className={styles.featuresBannerTwo}>
			<div className="py-10 overflow-hidden bg-pink">
				<div className="container px-0 mx-auto">
					<div className="px-4 py-16 md:px-8 sm:p-16">
						<h2 className="mb-10 text-white font-[600] text-center lg:text-left text-2xl sm:text-3xl lg:text-5xl">
							{title}
						</h2>
						<div className="flex flex-wrap">
							{gridContent.map((keys) => (
								<FeaturesBannerCardTwo
									key={keys?.id}
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
