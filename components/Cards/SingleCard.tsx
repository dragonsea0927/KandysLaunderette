import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import fadeInUp from "../../animations/animations";
import styles from "../../styles/components/SingleCard.module.scss";

interface IProps {
	title: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
	buttonLink: {
		url: string;
		title: string;
		target: string;
	};
}

const SingleCard: FunctionComponent<IProps> = ({buttonLink, image, title}) => {
	return (
		<motion.div variants={fadeInUp} className={styles.singleCard}>
			<Link href={`${buttonLink?.url}`} target={`${buttonLink?.target}`}>
				<Image
					width={500}
					height={550}
					alt={image?.altText}
					src={`${image?.sourceUrl}`}
					className="w-full h-[200px] sm:h-[350px] rounded-lg object-cover object-center"
				/>
			</Link>
			<div className="my-4 text-black text-center text-base font-[400]">
				<Link href={`${buttonLink?.url}`} target={`${buttonLink?.target}`}>
					{title}
				</Link>
			</div>
		</motion.div>
	);
};

export default SingleCard;
