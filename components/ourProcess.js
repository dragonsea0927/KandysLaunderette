import Image from "next/image";
import styles from "/styles/Home.module.scss";

const ourProcess = () => {
	return (
		<>
			{/* // <========== OUR PROCESS INFORMATION ==========> */}
			<div className={styles.weddingDressProcess}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.title}>
							<h2>Our Process</h2>
							<h5>From Start to Collection.</h5>
						</div>
						<div className={styles.gridDisplay}>
							<div className={styles.column}>
								<div className={styles.Image}>
									<Image
										src="/img/skubb-storage-case-dark-grey__0940614_pe795076_s5.webp"
										alt="Product Image"
										width={400}
										height={400}
										objectFit="cover"
									></Image>
								</div>
								<div className={styles.description}>
									<h2>Arrival</h2>
									<p>
										Schedule a drop off day. Call us are we can make the best
										time for you to arrive. Be confidence knowing your special
										dress is in good hands. day.
									</p>
								</div>
							</div>
							<div className={styles.column}>
								<div className={styles.Image}>
									<Image
										src="/img/template98.jpg"
										alt="Product Image"
										width={400}
										height={400}
										objectFit="cover"
									></Image>
								</div>
								<div className={styles.description}>
									<h2>We do what we do best</h2>
									<p>
										Schedule a drop off day. Call us are we can make the best
										time for you to arrive. Be confidence knowing your special
										dress is in good hands. day.
									</p>
								</div>
							</div>
							<div className={styles.column}>
								<div className={styles.Image}>
									<Image
										src="/img/cashmere-care-how-to-store-2.webp"
										alt="Product Image"
										width={400}
										height={400}
										objectFit="cover"
									></Image>
								</div>
								<div className={styles.description}>
									<h2>Collection</h2>
									<p>
										Schedule a drop off day. Call us are we can make the best
										time for you to arrive. Be confidence knowing your special
										dress is in good hands. day.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ourProcess;
