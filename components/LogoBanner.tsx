import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import LogoCard from "./Cards/LogoCard";
import {fadeIn, stagger} from "../animations/animations";

interface IProps {
	title: string;
	logoBanner: [
		{
			id: string;
			image: {
				altText: string;
				sourceUrl: string;
			};
		}
	];
}

const LogoBanner: FunctionComponent<IProps> = ({title, logoBanner}) => {
	return (
		<section className="px-4 py-20 lg:px-0">
			<div className="container px-0 mx-auto">
				<motion.h2
					variants={fadeIn}
					className="text-black text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl mb-24"
				>
					{title}
				</motion.h2>
				<motion.div
					variants={stagger}
					className="grid items-center justify-center grid-cols-2 gap-8 lg:flex lg:flex-row"
				>
					{logoBanner.map((keys) => (
						<LogoCard key={keys?.id} image={keys?.image} />
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default LogoBanner;
