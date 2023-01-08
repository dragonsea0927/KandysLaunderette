/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/SingleCard.module.scss";

const SingleCard = (props) => {
	return (
		<motion.div variants={fadeInUp} className={styles.singleCard}>
			<Link
				href={`${props?.buttonLink?.url}`}
				target={`${props?.buttonLink?.target}`}
			>
				<a>
					<Image
						width={400}
						height={400}
						objectFit="cover"
						alt={props?.image?.altText}
						src={`${props?.image?.sourceUrl}`}
						className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] object-cover object-center"
					/>
				</a>
			</Link>
			<div className="my-4 text-black text-center text-medium">
				<Link href={`${props?.buttonLink?.url}`} target={`${props?.target}`}>
					{props?.title}
				</Link>
			</div>
		</motion.div>
	);
};

export default SingleCard;

// kandyslaunderette.local;
