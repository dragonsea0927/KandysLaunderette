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
			<div className="p-8 lg:p-16 text-center h-full bg-white rounded-3xl hover:ease-in-out hover:duration-[0.5s]">
				<Image
					className="mb-8 mx-auto w-full h-[650px] rounded-lg object-cover object-center"
					width={650}
					height={450}
					objectFit="cover"
					objectPosition="center"
					src={props?.image?.sourceUrl}
					alt={`${props?.image?.altText} Image`}
				/>
				<h3 className="my-5 text-2xl lg:text-4xl text-black font-[600] tracking-tight">
					{props?.title}
				</h3>
				<div
					className={isParagraphContent(props?.paragraph)}
					dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
				/>
			</div>
		</div>
	);
};

export default FourGridContentCard;
