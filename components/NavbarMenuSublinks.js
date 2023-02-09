import Link from "next/link";

const NavbarMenuSublinks = (props) => {
	return (
		<Link href={`${props?.linkUrl}`}>
			<a className="py-3 px-6 text-white text-base text-left font-[400] tracking-[0.05rem] hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]">
				{props?.linkName}
			</a>
		</Link>
	);
};

export default NavbarMenuSublinks;
