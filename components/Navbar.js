import Link from "next/link";
import Image from "next/image";
import NavbarMenuLinks from "./NavbarMenuLinks";
import styles from "../styles/components/Navbar.module.scss";

const Navbar = (props) => {
	return (
		<>
			<div className={styles.Navbar}>
				<div className="container mx-auto p-0">
					<ul className="flex my-auto gap-4 justify-end">
						<Link href="#findStore">
							<a className="my-auto px-2 text-sm text-black hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
								Find Store
							</a>
						</Link>
						<div> | </div>
						<Link href="/contactUs">
							<a className="my-auto px-2 text-sm text-black hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
								Contact Us
							</a>
						</Link>
						<div> | </div>
						<div className="flex justify-center">
							<Image
								src="/img/Wales Flag.png"
								alt="Product Image"
								width={20}
								height={20}
								objectFit="contain"
							></Image>
							<h2 className="my-auto px-2 text-sm text-black hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
								Wales
							</h2>
						</div>
					</ul>
				</div>
				<div className="my-2 mt-3 p-0 border-b-solid border-b-[0.1rem] border-grey"></div>
				<div className="container mx-auto p-0">
					<div className="flex justify-between">
						<div className="my-auto">
							<Link href="/">
								<a className="uppercase my-auto px-2 text-3xl font-[700] text-fadedPink hover:text-darkPink hover:ease-in-out hover:duration-[0.5s]">
									Kandys
								</a>
							</Link>
						</div>
						<ul className="my-auto py-3 flex justify-center gap-4 text-sm text-black">
							{/* Menu Array from Wordpress */}
							{/* {props.menuLinks.map((keys) => (
								<NavbarMenuLinks
									key={keys?.id}
									linkUrl={keys?.node?.url}
									linkName={keys?.node?.label}
								/>
							))} */}
						</ul>
						{/* <ul className="my-auto py-3 flex justify-center gap-4 text-sm text-black">
							<Link href="/">
								<a className="my-auto px-2 text-sm tracking-[0.05rem] text-black font-[500] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Home
								</a>
							</Link>
							<Link href="/services">
								<a className="my-auto px-2 text-sm tracking-[0.05rem] text-black font-[500] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									All Services
								</a>
							</Link>
							<Link href="/LaundryDryCleaning">
								<a className="my-auto px-2 text-sm tracking-[0.05rem] text-black font-[500] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Laundry & Dry Cleaning
								</a>
							</Link>
							<Link href="/suitsOxfordShirts">
								<a className="my-auto px-2 text-sm tracking-[0.05rem] text-black font-[500] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Suits & Oxford Shirts
								</a>
							</Link>
							<Link href="/WeddingDressesBridal">
								<a className="my-auto px-2 text-sm tracking-[0.05rem] text-black font-[500] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Wedding Dresses
								</a>
							</Link>
							<Link href="/AlterationsRepairs">
								<a className="my-auto px-2 text-sm tracking-[0.05rem] text-black font-[500] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Alterations & Repairs
								</a>
							</Link>
							<Link href="/aboutUs">
								<a className="my-auto px-2 text-sm tracking-[0.05rem] text-black font-[500] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
									Our Story
								</a>
							</Link>
						</ul> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
