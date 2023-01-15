import Link from "next/link";

const NavbarMenuLinks = (props) => {
	return (
		<Link href={`${props?.linkUrl}`}>
			<a className="p-2 text-white text-tiny text-left font-[400] tracking-[0.05rem] hover:bg-fadedPink hover:text-white hover:ease-in-out hover:duration-[0.5s]">
				{props?.linkName}
			</a>
		</Link>
	);
};

export default NavbarMenuLinks;
