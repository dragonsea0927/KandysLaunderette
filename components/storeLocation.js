import styles from "/styles/Home.module.scss";

const storeLocation = () => {
	return (
		<>
			{/* <!--===== OUT STORE LOCATION =====--> */}
			<div className={styles.storeLocation}>
				<div className="container">
					<div className={styles.title}>
						<h2>Our Location</h2>
						<h5>We hope to see you soon</h5>
					</div>
				</div>
				<div className={styles.storeMap}>
					{/* <iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9907.997021073143!2d-3.9420236!3d51.6232228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x919fb6f2312ca92b!2sKandys%20Launderette%20%26%20Dry%20Cleaner!5e0!3m2!1sen!2suk!4v1637884674092!5m2!1sen!2suk"
						width="600"
						height="450"
						style="border:0;"
						allowfullscreen="true"
						loading="lazy"
					></iframe> */}
				</div>
			</div>
		</>
	);
};

export default storeLocation;
