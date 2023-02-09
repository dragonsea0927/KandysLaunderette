/* eslint-disable @next/next/no-img-element */
const PerformanceBannerCard = (props) => {
	return (
		<div className="overflow-hidden bg-white border border-grey rounded-lg">
			<div className="px-4 py-6">
				<div className="flex items-start">
					<img
						className="flex-shrink-0 w-12 h-12"
						src={`${props?.image?.sourceUrl}`}
						alt={`${props?.image?.altText} Image`}
					/>
					<div className="ml-4">
						<h4 className="text-4xl text-pink font-[600]">{props?.title}</h4>
						<p className="mt-1.5 text-medium flex gap-2 leading-tight text-black">
							{props?.subtitle}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PerformanceBannerCard;
