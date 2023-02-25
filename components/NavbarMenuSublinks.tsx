import Link from "next/link";
import {FunctionComponent} from "react";

interface IProps {
	linkUrl: string;
	linkName: string;
}

const NavbarMenuSublinks: FunctionComponent<IProps> = ({linkUrl, linkName}) => {
	return (
		<Link
			href={`${linkUrl}`}
			className="py-3 px-6 text-white text-base text-left font-[400] tracking-[0.05rem] hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
		>
			{linkName}
		</Link>
	);
};

export default NavbarMenuSublinks;
