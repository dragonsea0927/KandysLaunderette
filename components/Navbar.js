import Link from "next/link";
import styles from "/styles/Home.module.scss";

const Navbar = () => {
	return (
		<div>
			<div className={styles.Navbar}>
				<div className="container">
					<div className={styles.content}>
						<div className={styles.topSection}>
							<ul>
								<Link href="#" target="blank">
									<a>Find Store</a>
								</Link>
								<div> | </div>
								<Link href="#" target="blank">
									<a>Contact Us</a>
								</Link>
								<div> | </div>
								<h2>(Flag) Wales</h2>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
