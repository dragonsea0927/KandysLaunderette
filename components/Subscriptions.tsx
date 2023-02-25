import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import SubscriptionsCard from "./Cards/SubscriptionsCard";

interface IProps {
	title: string;
	paragraph: string;
	subscriptionsGrid: [
		{
			card: {
				id: string;
				tier: string;
				title: string;
				price: string;
				paragraph: string;
				billingInfo: string;
				buttonLink: {
					url: string;
					target: string;
					title: string;
				};
				points: [
					{
						id: string;
						point: string;
					}
				];
			};
		}
	];
}

const Subscriptions: FunctionComponent<IProps> = ({
	title,
	paragraph,
	subscriptionsGrid,
}) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden text-center text-darkGrey text-medium";
		} else {
			contentStyling = "block text-center text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Calculates How many iterations and sets
     the third card to a different color. */
	let iterationCount: number = 1;

	return (
		<section className="pt-24 pb-32 bg-lightGrey overflow-hidden">
			<div className="container mx-auto px-0">
				<div className="max-w-[75rem] mx-auto mb-28 flex flex-col justify-between m-4">
					<h2 className="font-[600] text-black text-center text-2xl sm:text-3xl lg:text-5xl py-8">
						{title}
					</h2>
					<div
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>
				</div>
				<div className="flex flex-col md:grid md:grid-cols-2 mt-10 xl:flex xl:flex-row gap-8 overflow-hidden rounded-lg">
					{subscriptionsGrid.map((keys) => (
						<SubscriptionsCard
							key={keys?.card?.id}
							tier={keys?.card?.tier}
							title={keys?.card?.title}
							price={keys?.card?.price}
							points={keys?.card?.points}
							buttonLink={keys?.card?.buttonLink}
							paragraph={keys?.card?.paragraph}
							billingInfo={keys?.card?.billingInfo}
							numberCount={iterationCount++}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Subscriptions;
