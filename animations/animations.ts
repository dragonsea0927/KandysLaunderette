// Custom reusable Animation Properties/variables
interface fadeInUpTs {
	initial: {
		y: number;
		opacity: number;
	};
	animate: {
		y: number;
		opacity: number;
		transition: {
			duration: number;
			ease: string;
		};
	};
}

interface fadeInTs {
	initial: {
		opacity: number;
	};
	animate: {
		opacity: number;
		transition: {
			duration: number;
			delay: number;
			ease: string;
		};
	};
}

interface staggerTs {
	animate: {
		transition: {
			staggerChildren: number;
		};
	};
}

interface fadeInTwoTs {
	initial: {
		opacity: number;
	};
	animate: {
		opacity: number;
		transition: {
			duration: number;
			delay: number;
			ease: string;
		};
	};
}

export const fadeInUp: fadeInUpTs = {
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

export const fadeIn: fadeInTs = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 0.5,
			ease: "easeOut",
		},
	},
};

export const stagger: staggerTs = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const fadeInTwo: fadeInTwoTs = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			duration: 1,
			delay: 2,
			ease: "easeOut",
		},
	},
};

export default fadeInUp;
