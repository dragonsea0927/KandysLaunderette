import Link from "next/link";
import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";

const ContactInfo = () => {
	return (
		<>
			{/* <!--===== INFORMATION SECTION =====--> */}
			<div className={styles.contactInfo}>
				<div className="container mx-auto p-0">
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
							<Link href="mailto:KandysLaunderette@gmail.com" target="blank">
								<a>
									<button>Get In Touch</button>
								</a>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</>
	);
};

export default ContactInfo;
