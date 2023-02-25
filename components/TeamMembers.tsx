import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";
import ProfileCard from "./Cards/ProfileCard";

interface IProps {
	title: string;
	paragraph: string;
	profileGrid: [
		{
			profileCard: {
				id: string;
				title: string;
				jobPosition: string;
				twitter: string;
				facebook: string;
				instagram: string;
				image: {
					altText: string;
					sourceUrl: string;
				};
			};
		}
	];
}

const TeamMembers: FunctionComponent<IProps> = ({
	title,
	paragraph,
	profileGrid,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-center text-darkGrey text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-center text-darkGrey text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="pt-24 overflow-hidden bg-white pb-36">
			<div className="container px-0 mx-auto">
				<h2 className="text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-4">
					{title}
				</h2>
				<motion.div
					variants={fadeIn}
					className={isParagraphContent(paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
				/>
				<div className="flex flex-col m-3 mt-8 md:grid md:grid-cols-2 lg:flex lg:flex-row gap-x-8">
					{profileGrid.map((keys) => (
						<ProfileCard
							key={keys?.profileCard?.id}
							title={keys?.profileCard?.title}
							jobPosition={keys?.profileCard?.jobPosition}
							twitter={keys?.profileCard?.twitter}
							facebook={keys?.profileCard?.facebook}
							instagram={keys?.profileCard?.instagram}
							image={keys?.profileCard?.image}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamMembers;
