import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";
import ProfileCard from "./Cards/ProfileCard";

const TeamMembers = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-darkGrey text-center text-medium";
		} else {
			contentStyling =
				"block mt-4 w-full lg:max-w-[75rem] mx-auto py-8 px-4 text-darkGrey text-center text-medium";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="pt-24 pb-36 bg-white overflow-hidden">
			<div className="container px-4 mx-auto">
				<h2 className="text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-4">
					{props?.title}
				</h2>
				<motion.div
					variants={fadeIn}
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
				<div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row gap-x-8 mt-8 m-3">
					{props?.profileGrid.map((keys) => (
						<ProfileCard
							Key={props?.id}
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
