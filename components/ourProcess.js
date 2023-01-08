import Image from "next/image";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";

// Custom reusable Animation Properties/variables
const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {duration: 0.5, ease: "easeOut"},
	},
};

const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 1, delay: 0.5, ease: "easeOut"},
	},
};

const fadeIn2 = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 1, delay: 0.85, ease: "easeOut"},
	},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const ourProcess = () => {
	return (
		<>
			{/* // <========== OUR PROCESS INFORMATION ==========> */}
			<div className={styles.ourProcess}>
				<div>
					<div className={styles.content}>
						<motion.div variants={fadeInUp} className={styles.title}>
							<h2>Our Process</h2>
							<h5>From Start to Collection.</h5>
						</motion.div>
						<div className={styles.gridDisplay}>
							<div className={styles.column}>
								<motion.div variants={fadeIn} className={styles.Image}>
									<Image
										src="/img/skubb-storage-case-dark-grey__0940614_pe795076_s5.webp"
										alt="Product Image"
										width={400}
										height={400}
										objectFit="cover"
									></Image>
								</motion.div>
								<motion.div variants={stagger} className={styles.description}>
									<motion.h2 variants={fadeInUp}>Arrival</motion.h2>
									<motion.p variants={fadeIn2}>
										Schedule a drop off day. Call us are we can make the best
										time for you to arrive. Be confidence knowing your special
										dress is in good hands. day.
									</motion.p>
								</motion.div>
							</div>
							<div className={styles.column}>
								<motion.div variants={fadeIn} className={styles.Image}>
									<Image
										src="/img/template98.jpg"
										alt="Product Image"
										width={400}
										height={400}
										objectFit="cover"
									></Image>
								</motion.div>
								<motion.div variants={stagger} className={styles.description}>
									<motion.h2 variants={fadeInUp}>
										We do what we do best
									</motion.h2>
									<motion.p variants={fadeIn2}>
										Schedule a drop off day. Call us are we can make the best
										time for you to arrive. Be confidence knowing your special
										dress is in good hands. day.
									</motion.p>
								</motion.div>
							</div>
							<div className={styles.column}>
								<motion.div variants={fadeIn} className={styles.Image}>
									<Image
										src="/img/cashmere-care-how-to-store-2.webp"
										alt="Product Image"
										width={400}
										height={400}
										objectFit="cover"
									></Image>
								</motion.div>
								<motion.div variants={stagger} className={styles.description}>
									<motion.h2 variants={fadeInUp}>Collection</motion.h2>
									<motion.p variants={fadeIn2}>
										Schedule a drop off day. Call us are we can make the best
										time for you to arrive. Be confidence knowing your special
										dress is in good hands. day.
									</motion.p>
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ourProcess;
