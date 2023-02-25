import Image from "next/image";
import {FunctionComponent} from "react";
import FAQCard from "../components/Cards/FAQCard";

interface IProps {
	title: string;
	subtitle: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
	faqContent: [
		{
			id: string;
			title: string;
			paragraph: string;
		}
	];
}

const FAQ: FunctionComponent<IProps> = ({
	title,
	image,
	subtitle,
	faqContent,
}) => {
	let iterationCount: number = 1;

	return (
		<section>
			<div className="relative flex flex-col-reverse py-20 overflow-hidden bg-white lg:flex-row">
				<div className="hidden w-full my-auto lg:block lg:w-1/2">
					<Image
						width={750}
						height={750}
						src={`${image?.sourceUrl}`}
						alt={`${image?.altText} image`}
						className="absolute top-0 left-0 z-10 object-cover w-2/6 h-full rounded-r-lg"
					/>
				</div>
				<div className="relative w-full px-4 pt-20 lg:w-1/2 lg:pl-24">
					<div className="mb-20">
						<span className="text-lg font-[500] text-pink">{subtitle}</span>
						<h2 className="mt-8 text-5xl font-[600] font-heading">{title}</h2>
					</div>
					<div className="max-w-4xl">
						<ul>
							{faqContent.map((keys) => (
								<FAQCard
									key={keys?.id}
									title={keys?.title}
									paragraph={keys?.paragraph}
									numberCount={iterationCount++}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQ;
