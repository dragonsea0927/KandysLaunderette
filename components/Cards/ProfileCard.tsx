/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {FunctionComponent} from "react";
import {fadeInUp, stagger} from "../../animations/animations";

interface IProps {
	title: string;
	jobPosition: string;
	twitter: string;
	facebook: string;
	instagram: string;
	image: {
		altText: string;
		sourceUrl: string;
	};
}
const ProfileCard: FunctionComponent<IProps> = ({
	title,
	image,
	twitter,
	facebook,
	instagram,
	jobPosition,
}) => {
	return (
		<div className="w-full lg:w-1/4">
			<div className="relative h-full mx-auto overflow-hidden rounded-lg max-w-max">
				<Image
					width={550}
					height={550}
					src={`${image?.sourceUrl}`}
					alt={`${image?.altText} Image`}
					className="w-[650px] h-[500px] object-cover object-center transition duration-1000 ease-in-out transform hover:scale-105"
				/>
				<div className="absolute bottom-0 left-0 w-full p-2">
					<div
						className="w-full px-5 py-4 rounded-lg bg-pureBlack bg-opacity-40"
						style={{backdropFilter: "blur(3px)"}}
					>
						<div className="pb-3 mb-4 border-b border-grey">
							<h3 className="mb-1 text-lg text-white font-[600] leading-snug">
								{title}
							</h3>
							<p className="text-white text-base font-[400]">{jobPosition}</p>
						</div>
						<motion.div
							variants={stagger}
							className="flex wrap items-center -m-2.5"
						>
							<motion.div variants={fadeInUp} className="w-auto p-2.5">
								<Link
									href={`${twitter}`}
									className="text-white hover:text-pink transition-all ease-in-out duration-[0.5s]"
								>
									<svg
										width="13"
										height="11"
										viewBox="0 0 13 11"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M12.7345 1.28185C12.257 1.4941 11.7529 1.62675 11.2223 1.70634C11.7529 1.38797 12.1774 0.883899 12.3631 0.273702C11.859 0.565535 11.3019 0.777778 10.6917 0.910429C10.2142 0.406353 9.52438 0.0879898 8.78153 0.0879898C7.34889 0.0879898 6.18156 1.25532 6.18156 2.68796C6.18156 2.9002 6.20809 3.08591 6.26115 3.27163C4.1122 3.1655 2.17548 2.13082 0.8755 0.539005C0.663258 0.936959 0.530606 1.36144 0.530606 1.83899C0.530606 2.74102 0.981621 3.53693 1.69794 4.01447C1.27345 3.98794 0.8755 3.88182 0.504076 3.69611V3.72264C0.504076 4.99609 1.40611 6.05731 2.59997 6.29608C2.38773 6.34914 2.14895 6.37567 1.91018 6.37567C1.751 6.37567 1.56529 6.34914 1.40611 6.32261C1.751 7.35729 2.70609 8.12667 3.84689 8.12667C2.94486 8.81646 1.83059 9.24094 0.610197 9.24094C0.397954 9.24094 0.185712 9.24094 0 9.21441C1.16733 9.95726 2.52038 10.3817 4.00608 10.3817C8.80806 10.3817 11.4346 6.4022 11.4346 2.95326C11.4346 2.84714 11.4346 2.71449 11.4346 2.60837C11.9386 2.26347 12.3897 1.81246 12.7345 1.28185Z"
											fill="currentColor"
										></path>
									</svg>
								</Link>
							</motion.div>
							<motion.div variants={fadeInUp} className="w-auto p-2.5">
								<Link
									href={`${facebook}`}
									className="text-white hover:text-pink transition-all ease-in-out duration-[0.5s]"
								>
									<svg
										width="8"
										height="14"
										viewBox="0 0 8 14"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.86428 13.9048V7.57563H0.734375V5.10902H2.86428V3.28997C2.86428 1.17897 4.1536 0.0294952 6.03676 0.0294952C6.93881 0.0294952 7.71407 0.0966549 7.94001 0.126673V2.33279L6.63394 2.33338C5.60977 2.33338 5.41147 2.82005 5.41147 3.5342V5.10902H7.85401L7.53598 7.57563H5.41147V13.9048H2.86428Z"
											fill="currentColor"
										></path>
									</svg>
								</Link>
							</motion.div>
							<motion.div variants={fadeInUp} className="w-auto p-2.5">
								<Link
									href={`${instagram}`}
									className="text-white hover:text-pink transition-all ease-in-out duration-[0.5s]"
								>
									<svg
										width="17"
										height="16"
										viewBox="0 0 17 16"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M8.66026 1.39113C10.7216 1.39113 10.9657 1.39885 11.78 1.43598C12.2696 1.44197 12.7546 1.53187 13.2138 1.70178C13.5468 1.83021 13.8492 2.02695 14.1016 2.27933C14.354 2.53171 14.5507 2.83415 14.6792 3.16717C14.8491 3.62638 14.939 4.11134 14.945 4.60094C14.9817 5.41525 14.9898 5.65936 14.9898 7.72068C14.9898 9.78201 14.9821 10.0261 14.945 10.8404C14.939 11.33 14.8491 11.815 14.6792 12.2742C14.5507 12.6072 14.354 12.9097 14.1016 13.162C13.8492 13.4144 13.5468 13.6112 13.2138 13.7396C12.7546 13.9095 12.2696 13.9994 11.78 14.0054C10.9661 14.0422 10.722 14.0502 8.66026 14.0502C6.59857 14.0502 6.35446 14.0425 5.54052 14.0054C5.05091 13.9994 4.56596 13.9095 4.10674 13.7396C3.77372 13.6112 3.47129 13.4144 3.21891 13.162C2.96652 12.9097 2.76978 12.6072 2.64135 12.2742C2.47145 11.815 2.38154 11.33 2.37555 10.8404C2.33879 10.0261 2.3307 9.78201 2.3307 7.72068C2.3307 5.65936 2.33842 5.41525 2.37555 4.60094C2.38154 4.11134 2.47145 3.62638 2.64135 3.16717C2.76978 2.83415 2.96652 2.53171 3.21891 2.27933C3.47129 2.02695 3.77372 1.83021 4.10674 1.70178C4.56596 1.53187 5.05091 1.44197 5.54052 1.43598C6.35483 1.39922 6.59893 1.39113 8.66026 1.39113V1.39113ZM8.66026 0C6.56474 0 6.30078 0.00882319 5.47728 0.0463219C4.83651 0.059067 4.20255 0.180391 3.60235 0.405133C3.08747 0.599121 2.62113 0.903117 2.23585 1.29591C1.8427 1.68133 1.53845 2.14794 1.34434 2.66314C1.1196 3.26334 0.998273 3.89731 0.985528 4.53808C0.948765 5.36084 0.939941 5.6248 0.939941 7.72032C0.939941 9.81583 0.948765 10.0798 0.986263 10.9033C0.999008 11.5441 1.12033 12.178 1.34507 12.7782C1.53897 13.2934 1.84297 13.76 2.23585 14.1455C2.62134 14.5383 3.08795 14.8423 3.60308 15.0362C4.20328 15.261 4.83725 15.3823 5.47802 15.395C6.30152 15.4318 6.56438 15.4414 8.66099 15.4414C10.7576 15.4414 11.0205 15.4325 11.844 15.395C12.4847 15.3823 13.1187 15.261 13.7189 15.0362C14.2316 14.8375 14.6972 14.534 15.0859 14.145C15.4745 13.7561 15.7778 13.2903 15.9762 12.7775C16.2009 12.1773 16.3222 11.5433 16.335 10.9026C16.3718 10.0798 16.3806 9.81583 16.3806 7.72032C16.3806 5.6248 16.3718 5.36084 16.3343 4.53734C16.3215 3.89657 16.2002 3.2626 15.9754 2.66241C15.7816 2.14727 15.4775 1.68067 15.0847 1.29517C14.6992 0.902292 14.2326 0.598291 13.7174 0.404397C13.1172 0.179656 12.4833 0.0583318 11.8425 0.0455867C11.0197 0.00882324 10.7558 0 8.66026 0Z"
											fill="currentColor"
										></path>
										<path
											d="M8.65842 3.75616C7.8743 3.75616 7.10779 3.98868 6.45582 4.42431C5.80385 4.85995 5.2957 5.47913 4.99563 6.20356C4.69557 6.92799 4.61705 7.72513 4.77003 8.49418C4.923 9.26323 5.30059 9.96965 5.85504 10.5241C6.4095 11.0786 7.11592 11.4561 7.88497 11.6091C8.65402 11.7621 9.45116 11.6836 10.1756 11.3835C10.9 11.0834 11.5192 10.5753 11.9548 9.92333C12.3905 9.27136 12.623 8.50485 12.623 7.72073C12.623 6.66926 12.2053 5.66086 11.4618 4.91736C10.7183 4.17386 9.70989 3.75616 8.65842 3.75616ZM8.65842 10.2942C8.14944 10.2942 7.65189 10.1432 7.22869 9.86047C6.80549 9.57769 6.47565 9.17578 6.28087 8.70554C6.08609 8.23531 6.03513 7.71788 6.13442 7.21868C6.23372 6.71948 6.47882 6.26094 6.83872 5.90104C7.19862 5.54113 7.65716 5.29604 8.15636 5.19674C8.65556 5.09744 9.17299 5.14841 9.64323 5.34318C10.1135 5.53796 10.5154 5.8678 10.7982 6.291C11.0809 6.7142 11.2319 7.21175 11.2319 7.72073C11.2319 8.40325 10.9607 9.05781 10.4781 9.54043C9.9955 10.023 9.34094 10.2942 8.65842 10.2942V10.2942Z"
											fill="currentColor"
										></path>
										<path
											d="M12.7829 4.52561C13.2945 4.52561 13.7093 4.11083 13.7093 3.59917C13.7093 3.08751 13.2945 2.67273 12.7829 2.67273C12.2712 2.67273 11.8564 3.08751 11.8564 3.59917C11.8564 4.11083 12.2712 4.52561 12.7829 4.52561Z"
											fill="currentColor"
										></path>
									</svg>
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
