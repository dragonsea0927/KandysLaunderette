import Image from "next/image";
import FAQCard from "./FAQCard";

const FAQ = (props) => {
	let iterationCount = 1;
	return (
		<section>
			<div className="flex flex-col-reverse lg:flex-row relative py-20 bg-white overflow-hidden">
				<div className="hidden lg:block w-full lg:w-1/2 my-auto">
					<Image
						width={750}
						height={750}
						objectFit="cover"
						objectPosition="center"
						src={`http://kandyslaunderette.local/wp-content/uploads/2023/01/pexels-shvets-production-7176319-min-scaled.jpg`}
						alt={`Image`}
						className="absolute z-10 rounded-r-lg top-0 left-0 w-2/6 h-full object-cover"
					/>
				</div>
				<div className="relative w-full lg:w-1/2 px-4 lg:pl-24 pt-20">
					<div className="mb-20">
						<span className="text-lg font-[500] text-pink">
							{props?.subtitle}
						</span>
						<h2 className="mt-8 text-5xl font-bold font-heading">
							{props?.title}
						</h2>
					</div>
					<div className="max-w-4xl">
						<ul>
							{props?.faqContent.map((keys) => (
								<FAQCard
									Key={keys?.id}
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
