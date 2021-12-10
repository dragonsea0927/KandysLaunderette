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

const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 1, delay: 0.5, ease: "easeOut"},
	},
};

const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};
const ContactInfo = () => {
	return (
		<>
			{/* <!--===== INFORMATION SECTION =====--> */}
			<div className={styles.backgroundImageLaundryDryCleaning}>
				<div className="container">
					<motion.div variants={stagger} className={styles.content}>
						<motion.div variants={fadeInUp} className={styles.title}>
							<h2>Contact our specialist Team to discuss your request.</h2>
							<Link href="mailto:KandysLaunderette@gmail.com" target="blank">
								<a>
									Email: <span>KandysLaunderette@gmail.com</span>
								</a>
							</Link>
							<Link href="tel:01792 461111" target="blank">
								<a className={styles.telLinks}>
									Tel: <span>+44 (0) 1792 46 11 11</span> |
									<span> 07478 212165</span>
								</a>
							</Link>
							<h5>
								Opening hours: 8.30am–7pm Monday to Saturday (9am-5pm Sunday)
							</h5>
						</motion.div>
						<motion.div variants={fadeIn} className={styles.button}>
							<newButton>
								<Link href="#email" target="blank">
									<a>Terms & Conditions</a>
								</Link>
							</newButton>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ContactInfo;
