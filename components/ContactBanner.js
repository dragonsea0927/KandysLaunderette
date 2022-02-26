import Link from "next/link";
import styles from "/styles/Home.module.scss";

const ContactBanner = () => {
	return (
		<>
			<div className={styles.contactBanner}>
				<div className="container">
					<div className={styles.content}>
						<div className="text">
							<h2>
								<strong>Kandys Launderette</strong>
							</h2>
							<p>
								Discuss your needs with our team of experts! Contact us today.
								And If you book with Kandys Launderette, you can be sure that we
								work towards making your day an enjoyable and stress free
								occasion.
							</p>
						</div>
						<div className={styles.contactBannerButton}>
							<Link href="/">
								<a>
									<button>
										<strong>Get A Free Quote</strong>
									</button>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactBanner;
