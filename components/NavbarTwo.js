import Link from "next/link";
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

const NavbarTwo = () => {
	return (
		<>
			<div className={styles.NavbarTwo}>
				<div>
					<div className={styles.content}>
						<div className={styles.mainSection}>
							<div className={styles.title}>
								<Link href="/" target="blank">
									<a>Kandys</a>
								</Link>
							</div>
							<ul>
								<Link href="/services" target="blank">
									<a>All Services</a>
								</Link>
							</ul>
						</div>
						{/* // <========== PAGE TITLE ==========> */}
						<div className={styles.ourStory}>
							<div className={styles.pageTitle}>
								<div>
									<div className={styles.content}>
										<motion.div variants={fadeInUp} className={styles.title}>
											<h2>Our Story</h2>
											<h5>The Best Stress Free Dry Cleaning Solutions.</h5>
										</motion.div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
