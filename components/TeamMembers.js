import Image from "next/image";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp, fadeInTwo, stagger} from "../animations/animations";
import ProfileCard from "./ProfileCard";

const TeamMembers = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mt-4 mb-20 text-medium text-grey text-center font-[400] md:max-w-xl mx-auto";
		} else {
			contentStyling =
				"block mt-4 mb-20 text-medium text-grey text-center font-[400] md:max-w-xl mx-auto";
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
				<h2 className="text-center font-[600] text-3xl lg:text-5xl py-4 leading-14">
					{props?.title}
				</h2>
				<motion.div
					variants={fadeIn}
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
				<div className="flex flex-wrap max-w-7xl mx-auto -m-3">
					{/* Array Loop */}
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
