import {motion} from "framer-motion";
import styles from "/styles/Home.module.scss";

const testimonialQuotes = () => {
	return (
		<>
			<section className={styles.testimonialQuotes}>
				<div className="container mx-auto flex flex-col">
					<div className="content">
						<div className="topSection">
							<h5>Customer Testimonial</h5>
							<div className="titleSection">
								<div className="borderLine"></div>
								<h2>Hear from our happy customers</h2>
								<div className="borderLine"></div>
							</div>
						</div>
						<div className="bottomSection">
							<div className={styles.images}></div>
							<div className="testimonialContentSlide">
								<div className="details flex flex-col">
									<p id="slide-content" className="text-center">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua. Ut enim ad minim veniam, quis nostrud exercitation
										ullamco laboris nisi ut aliquip ex ea commodo consequat.
									</p>
									<h2 id="testimonialTitle" className="title">
										John smith location or Business name
									</h2>
								</div>
							</div>
							<div className={styles.images}></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default testimonialQuotes;
