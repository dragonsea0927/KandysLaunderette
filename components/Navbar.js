import Link from "next/link";
import Image from "next/image";
import NavbarMenuLinks from "./NavbarMenuLinks";
import styles from "../styles/components/Navbar.module.scss";

const Navbar = (props) => {
	return (
		<section className={styles.Navbar}>
			<div className="container mx-auto p-0">
				<ul className="flex my-auto gap-4 justify-end">
					<Link href="#findStore">
						<a className="my-auto px-2 text-xs font-[300] text-black hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
							Find Store
						</a>
					</Link>
					<div> | </div>
					<Link href="/contactUs">
						<a className="my-auto px-2 text-xs font-[300] text-black hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
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
						<h2 className="my-auto px-2 text-xs font-[300] text-black hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
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
							<a className="uppercase my-auto px-2 text-3xl font-[500] text-fadedPink hover:text-darkPink hover:ease-in-out hover:duration-[0.5s]">
								Kandys
							</a>
						</Link>
					</div>
					<ul className="my-auto py-3 flex justify-center gap-4 text-sm text-black">
						<Link href="/services">
							<a className="p-3 text-black text-sm text-left font-[300] tracking-[0.05rem] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
								All Services
							</a>
						</Link>
						{/* {Menu Array from Wordpress } */}
						{props.serviceMenuLinks?.map((keys) => (
							<NavbarMenuLinks
								key={keys?.id}
								linkUrl={keys?.node?.url}
								linkName={keys?.node?.label}
							/>
						))}
						<Link href="/aboutUs">
							<a className="p-3 text-black text-sm text-left font-[300] tracking-[0.05rem] hover:text-fadedPink hover:ease-in-out hover:duration-[0.5s]">
								About Us
							</a>
						</Link>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
