import Link from "next/link";
import {motion} from "framer-motion";
import FAQCardTwo from "./Cards/FAQCardTwo";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn} from "../animations/animations";

const FAQTwo = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mb-11 text-center lg:text-left text-medium text-darkGrey font-[400]";
		} else {
			contentStyling =
				"block mb-11 text-center lg:text-left text-medium text-darkGrey font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<section className="py-16 lg:py-32 bg-white overflow-hidden">
			<div className="container px-4 mx-auto">
				<div className="flex flex-col lg:flex-row justify-center items-center">
					<div className="w-full lg:w-1/2 p-8">
						<motion.h2
							variants={fadeIn}
							className="mb-5 text-center lg:text-left leading-[2.75rem] font-[800] text-2xl sm:text-3xl lg:text-5xl"
						>
							{props?.title}
						</motion.h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
						<div className="lg:inline-block w-[fit-content] mx-auto lg:mx-0">
							<button
								className="py-4 px-6 w-full text-white font-[600] rounded-lg shadow-4xl focus:ring focus:ring-pink bg-pink hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
								type="button"
							>
								<Link
									href={`${props?.buttonLink?.url}`}
									target={`${props?.buttonLink?.target}`}
								>
									<a>{props?.buttonLink?.title}</a>
								</Link>
							</button>
						</div>
					</div>
					<div className="w-full lg:w-1/2 p-8">
						<div className="md:max-w-2xl ml-auto">
							<div className="flex flex-col">
								{props?.faqContent.map((keys) => (
									<FAQCardTwo
										Key={props?.id}
										title={keys?.title}
										paragraph={keys?.paragraph}
									/>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQTwo;
