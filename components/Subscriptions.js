import Link from "next/link";
import {useState} from "react";
import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";
import NavbarMenuSublinks from "./NavbarMenuSublinks";
import SubscriptionsCard from "./Cards/SubscriptionsCard";

const Subscriptions = (props) => {
	/* Check if Paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-darkGrey text-center text-medium";
		} else {
			contentStyling = "block text-darkGrey text-center text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Calculates How many iterations and sets
     the third card to a different color. */
	let iterationCount = 1;

	return (
		<section className="pt-24 pb-32 bg-lightGrey overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="max-w-[75rem] mx-auto mb-28 flex flex-col justify-between m-4">
					<h2 className="font-[600] text-black text-center text-xl sm:text-5xl py-8">
						{props?.title}
					</h2>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</div>
				<div className="flex flex-col md:grid md:grid-cols-2 mt-10 xl:flex xl:flex-row gap-8 overflow-hidden rounded-lg">
					{props?.subscriptionsGrid.map((keys) => (
						<SubscriptionsCard
							Key={keys?.id}
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
