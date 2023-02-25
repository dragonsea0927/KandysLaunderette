import Link from "next/link";
import {FunctionComponent} from "react";

interface IProps {
	linkUrl: string;
	linkName: string;
}

const NavbarMenuLinks: FunctionComponent<IProps> = ({linkUrl, linkName}) => {
	return (
		<Link
			href={`${linkUrl}`}
			className="p-3 text-black text-sm text-left font-[400] tracking-[0.05rem] hover:text-fadedPink transition-all ease-in-out duration-[0.5s]"
		>
			{linkName}
		</Link>
	);
};

export default NavbarMenuLinks;
