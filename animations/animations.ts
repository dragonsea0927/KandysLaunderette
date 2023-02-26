// Custom reusable Animation Properties/variables
interface fadeInUp {
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

interface fadeIn {
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

interface stagger {
	animate: {
		transition: {
			staggerChildren: number;
		};
	};
}

interface fadeInTwo {
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

export const fadeInUp: fadeInUp = {
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

export const fadeIn: fadeIn = {
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

export const stagger: stagger = {
	animate: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export const fadeInTwo: fadeInTwo = {
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
