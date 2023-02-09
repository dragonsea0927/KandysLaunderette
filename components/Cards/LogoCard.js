/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

const LogoCard = (props) => {
	return (
		<div className="w-1/2 md:w-1/3 xl:w-1/6">
			<Image
				className="w-full h-[200px] object-contain object center"
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
