// Custom reusable Animation Properties/variables
export const fadeInUp = {
	initial: {
		y: 60,
		opacity: 0,
	},
	animate: {
		y: 0,
		opacity: 1,
		transition: {duration: 0.5, ease: "easeOut"},
	},
};

export const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 1, delay: 0.5, ease: "easeOut"},
	},
};

export const stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const fadeInTwo = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {duration: 1, delay: 2, ease: "easeOut"},
	},
};

export default fadeInUp;
