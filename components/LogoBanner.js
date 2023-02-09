import LogoCard from "./Cards/LogoCard";

const LogoBanner = (props) => {
	return (
		<section className="py-20">
			<div className="container px-4 mx-auto">
				<div className="flex flex-row justify-center items-center gap-8">
					{props?.logoBanner.map((keys) => (
						<LogoCard Key={keys?.id} image={keys?.image} />
					))}
				</div>
			</div>
		</section>
	);
};

export default LogoBanner;
