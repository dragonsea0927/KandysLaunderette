/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import {motion} from "framer-motion";
import {fadeInUp} from "../animations/animations";
import styles from "../styles/components/SingleCard.module.scss";

const SingleCard = (props) => {
	return (
		<motion.div variants={fadeInUp} className={styles.singleCard}>
			{/* hover:ease-in-out hover:duration-[0.5s] */}
			<Link
				href={`${props?.buttonLink?.url}`}
				target={`${props?.buttonLink?.target}`}
			>
				<img
					className="w-full h-[386px] object-cover object-center"
					style={{
						width: "100%",
						height: "386px",
						objectFit: "cover",
						objectPosition: "center",
					}}
					objectFit="cover"
					src={`${props?.image}`}
					alt={props?.image?.altText}
					width={props?.mediaDetails?.width}
					height={props?.mediaDetails?.height}
				/>
			</Link>
			<div
				className="my-4 text-black text-center text-medium"
				style={{
					margin: "1rem 0rem",
					fontSize: "1.15rem",
					textAlign: "center",
					padding: "0.25rem 0",
				}}
			>
				<Link href={`${props?.url}`} target={`${props?.target}`}>
					{props?.title}
				</Link>
			</div>
		</motion.div>
	);
};

export default SingleCard;
