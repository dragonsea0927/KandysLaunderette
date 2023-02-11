/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const LogoCard = (props) => {
	return (
		<div className="w-full md:w-1/2 lg:w-1/6">
			<Image
				className="w-full h-[400] object-contain object center"
				width={400}
				height={400}
				objectFit="contain"
				objectPosition="center"
				alt={props?.image?.altText}
				src={`${props?.image?.sourceUrl}`}
			/>
		</div>
	);
};

export default LogoCard;
