import LogoCard from "./Cards/LogoCard";

const LogoBanner = (props) => {
	return (
		<section className="py-20 px-4">
			<div className="container mx-auto px-0">
				<div className="grid grid-cols-2 lg:flex lg:flex-row justify-center items-center gap-8">
					{props?.logoBanner.map((keys) => (
						<LogoCard Key={keys?.id} image={keys?.image} />
					))}
				</div>
			</div>
		</section>
	);
};

export default LogoBanner;
