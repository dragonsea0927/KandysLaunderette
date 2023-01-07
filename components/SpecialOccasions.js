/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import {motion} from "framer-motion";
import DOMPurify from "isomorphic-dompurify";
import {fadeInUp, stagger} from "../animations/animations";
import styles from "../styles/components/SpecialOccasions.module.scss";

const SpecialOccasions = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden mt-4 text-black text-center text-base";
		} else {
			contentStyling = "block mt-4 text-black text-center text-base";
		}
		return contentStyling;
	}

	function createParagraphMarkup() {
		return {
			__html: DOMPurify.sanitize(`${props?.paragraph}`),
		};
	}

	return (
		<section className={styles.specialOccasions}>
			<div className="container mx-auto">
				<div className={styles.content}>
					<motion.div variants={fadeInUp} className="py-9">
						<h2 className="text-black text-center text-2xl md:text-4xl">
							{props?.title}
						</h2>
						<div
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup()}
						/>
					</motion.div>
					<div className={styles.innerContent}>
						<div className={styles.productDisplay}>
							<Link href="/suitsOxfordShirts">
								<a target="blank">
									<img
										src="/img/2f7f5644b96ce5f477f1522efa614d32.jpg"
										alt="Product Image"
										width={300}
										height={400}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<motion.div variants={stagger} className={styles.content}>
								<motion.h2 variants={fadeInUp}>
									Dress & Dinner Suits, Oxford Shirts
								</motion.h2>
								<button className={styles.shopButton}>
									<Link href="/suitsOxfordShirts">
										<a target="blank">More Info</a>
									</Link>
								</button>
							</motion.div>
						</div>
						<div className={styles.productDisplay}>
							<Link href="/WeddingDressesBridal">
								<a target="blank">
									<img
										src="/img/2dadbbf0777ed8a16b24ccde6a6f90dd.jpg"
										alt="Product Image"
										width={300}
										height={400}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<motion.div variants={stagger} className={styles.content}>
								<motion.h2 variants={fadeInUp}>
									Wedding, Bridesmaids & Evening Dresses
								</motion.h2>
								<button className={styles.shopButton}>
									<Link href="/WeddingDressesBridal">
										<a target="blank">More Info</a>
									</Link>
								</button>
							</motion.div>
						</div>
					</div>
					{/* <div className={styles.innerContent}>
						<div className={styles.productDisplay}>
							<Link href="/suitsOxfordShirts">
								<a target="blank">
									<img
										src="/img/2f7f5644b96ce5f477f1522efa614d32.jpg"
										alt="Product Image"
										width={300}
										height={400}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<motion.div variants={stagger} className={styles.content}>
								<motion.h2 variants={fadeInUp}>
									Dress & Dinner Suits, Oxford Shirts
								</motion.h2>
								<button className={styles.shopButton}>
									<Link href="/suitsOxfordShirts">
										<a target="blank">More Info</a>
									</Link>
								</button>
							</motion.div>
						</div>
						<div className={styles.productDisplay}>
							<Link href="/WeddingDressesBridal">
								<a target="blank">
									<img
										src="/img/2dadbbf0777ed8a16b24ccde6a6f90dd.jpg"
										alt="Product Image"
										width={300}
										height={400}
										layout="responsive"
										objectFit="cover"
									/>
								</a>
							</Link>
							<motion.div variants={stagger} className={styles.content}>
								<motion.h2 variants={fadeInUp}>
									Wedding, Bridesmaids & Evening Dresses
								</motion.h2>
								<button className={styles.shopButton}>
									<Link href="/WeddingDressesBridal">
										<a target="blank">More Info</a>
									</Link>
								</button>
							</motion.div>
						</div>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default SpecialOccasions;
