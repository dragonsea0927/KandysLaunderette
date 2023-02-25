import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, fadeIn, stagger} from "../animations/animations";
import styles from "../styles/components/FourGridContent.module.scss";
import FourGridContentCard from "../components/Cards/FourGridContentCard";

interface IProps {
	title: string;
	subtitle: string;
	gridContent: [
		{
			id: string;
			title: string;
			paragraph: string;
			image: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const FourGridContent: FunctionComponent<IProps> = ({
	title,
	subtitle,
	gridContent,
}) => {
	return (
		<section className={styles.fourGridContent}>
			<div className="py-24 overflow-hidden bg-fadedPinkThree">
				<div className="container p-4 mx-auto sm:p-0">
					<div className="flex flex-col items-center justify-center">
						<span className="inline-block mb-3 text-tiny text-white text-center mx-auto font-[600] uppercase tracking-widest">
							{subtitle}
						</span>
						<motion.h2
							variants={fadeIn}
							className="my-12 text-5xl lg:text-6xl text-white text-center tracking-tight font-[700] leading-[3.5rem]"
						>
							{title}
						</motion.h2>
					</div>
					<div className="flex flex-col items-center justify-between gap-5 p-4 m-4 sm:grid sm:grid-cols-2 lg:gap-8 xl:py-8 xl:px-28">
						{gridContent.map((keys) => (
							<FourGridContentCard
								key={keys?.id}
								image={keys?.image}
								title={keys?.title}
								paragraph={keys?.paragraph}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FourGridContent;
