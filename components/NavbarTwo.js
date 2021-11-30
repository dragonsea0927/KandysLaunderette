import Link from "next/link";
import Image from "next/image";
import styles from "/styles/Home.module.scss";

const NavbarTwo = () => {
	return (
		<>
			<div className={styles.NavbarTwo}>
				<div className="container">
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
					</div>
				</div>
			</div>
		</>
	);
};

export default NavbarTwo;
