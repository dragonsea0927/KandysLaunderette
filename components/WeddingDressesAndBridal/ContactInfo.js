import Link from "next/link";
import styles from "/styles/Home.module.scss";

const ContactInfo = () => {
	return (
		<>
			{/* <!--===== INFORMATION SECTION =====--> */}
			<div className={styles.backgroundImageContactInfoWDAB}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
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
						</div>
						<div className={styles.button}>
							<newButton>
								<Link href="#email" target="blank">
									<a>Terms & Conditions</a>
								</Link>
							</newButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactInfo;
