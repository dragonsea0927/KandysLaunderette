import Link from "next/link";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";

interface IProps {
	title: string;
	backgroundImage: string;
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
	themesOptions: {
		email: string;
		phoneNumber: string;
		openingHours: string;
		phoneNumberOptionTwo: string;
	};
}

const ContactBannerTwo: FunctionComponent<IProps> = ({
	title,
	buttonLink,
	themesOptions,
	backgroundImage,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden text-white text-center text-medium leading-8";
		} else {
			contentStyling = "block text-white text-center text-medium leading-8";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	/* Check if Button Link content is null
	 And Displays content if it isn't null */
	function isButtonLink(isButtonLink: string) {
		let contentStyling: string;
		if (isButtonLink === null || isButtonLink === undefined) {
			contentStyling = `hidden`;
		} else {
			contentStyling = `block`;
		}
		return contentStyling;
	}

	return (
		<section
			id="#contactBannerTwo"
			className="px-4 py-20 bg-white lg:px-0"
			style={{
				backgroundSize: "cover",
				backgroundPosition: "center",
				backgroundRepeat: "no-repeat",
				backgroundImage: `linear-gradient(
							0deg,
							rgba(221, 69, 119, 0.45),
							rgba(221, 69, 119, 0.45)
						),url("${backgroundImage}"`,
			}}
		>
			<div className="container p-0 mx-auto">
				<motion.div
					variants={stagger}
					className="flex flex-col items-center justify-between px-8 py-8 lg:flex-row gap-y-28 lg:gap-10"
				>
					<motion.div variants={fadeInUp}>
						<h2 className="pb-10 text-2xl text-center text-white sm:text-3xl lg:text-4xl">
							{title}
						</h2>
						<span className="flex flex-row items-center justify-center gap-2 text-white text-medium">
							Email:
							<Link
								href={`mailto:${themesOptions?.email}`}
								className="text-white text-medium text-center hover:text-pink transition-all ease-in-out duration-[0.5s]"
							>
								{themesOptions?.email}
							</Link>
						</span>

						<div className="flex flex-row items-center justify-center gap-2 py-4 text-white">
							<span className="text-center text-white text-medium">
								Tel:
								<Link
									href={`tel:${themesOptions?.phoneNumberOptionTwo}`}
									className="text-white text-medium hover:text-pink transition-all ease-in-out duration-[0.5s]"
								>
									{themesOptions?.phoneNumberOptionTwo}
								</Link>
							</span>
							|
							<span className="text-center text-white text-medium">
								<Link
									href={`tel:${themesOptions?.phoneNumber}`}
									className="text-white text-medium hover:text-pink transition-all ease-in-out duration-[0.5s]"
								>
									{themesOptions?.phoneNumber}
								</Link>
							</span>
						</div>
						<div
							className={isParagraphContent(themesOptions?.openingHours)}
							dangerouslySetInnerHTML={createParagraphMarkup(
								themesOptions?.openingHours
							)}
						/>
					</motion.div>
					<motion.div
						variants={fadeIn}
						className={isButtonLink(buttonLink?.url)}
					>
						<Link
							href={`${buttonLink?.url}`}
							target={`${buttonLink?.target}`}
							className="py-4 px-12 md:py-6 xl:px-20 font-[700] text-white text-base bg-pink rounded-lg hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
						>
							{buttonLink?.title}
						</Link>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactBannerTwo;
