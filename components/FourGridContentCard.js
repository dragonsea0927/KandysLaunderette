import Image from "next/image";
import styles from "../styles/components/FourGridContent.module.scss";

const FourGridContentCard = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden mb-10 text-base text-center font-[400] text-black";
		} else {
			contentStyling =
				"block mb-10 text-base text-center font-[400] text-black";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	return (
		<div className={styles.fourGridContentCard}>
			<div className="w-full md:w-1/2 p-4">
				<div className="p-8 md:p-16 text-center h-full bg-white rounded-3xl hover:ease-in-out hover:duration-[0.5s]">
					<Image
						className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
						width={1000}
						height={650}
						objectFit="cover"
						objectPosition="center"
						src={props?.Image?.sourceUrl}
						alt={`${props?.Image?.altText} Image`}
					/>
					<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
						Schedule your collection
					</h3>
					<p className="mb-10 text-base text-center font-[400] text-black">
						Plan your day with ease. Choose a collection and delivery time at
						your convenience.
					</p>
					<div
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
				</div>
			</div>
		</div>
	);
};

export default FourGridContentCard;
