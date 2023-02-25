/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {FunctionComponent} from "react";

interface IProps {
	title: string;
	subtitle: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}
const PerformanceBannerCard: FunctionComponent<IProps> = ({
	title,
	image,
	subtitle,
}) => {
	return (
		<div className="overflow-hidden bg-white border border-grey rounded-lg">
			<div className="px-4 py-6">
				<div className="flex items-start">
					<Image
						width={550}
						height={550}
						src={`${image?.sourceUrl}`}
						alt={`${image?.altText} Image`}
						className="flex-shrink-0 w-12 h-12"
					/>
					<div className="ml-4">
						<h4 className="text-4xl text-pink font-[600]">{title}</h4>
						<p className="mt-1.5 text-medium flex gap-2 leading-tight text-black">
							{subtitle}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PerformanceBannerCard;
