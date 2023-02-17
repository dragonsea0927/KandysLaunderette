import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {useFormik, Formik, Field, Form} from "formik";
import DOMPurify from "isomorphic-dompurify";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";

const ContactForm = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling =
				"hidden w-full lg:max-w-[75rem] mx-auto py-8 text-medium text-darkGrey text-center font-[400]";
		} else {
			contentStyling =
				"block w-full lg:max-w-[75rem] mx-auto py-8 text-medium text-darkGrey text-center font-[400]";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate = (values) => {
		const errors = {};
		if (!values.firstName) {
			errors.firstName = "Required*";
		} else if (values.firstName.length >= 16) {
			errors.firstName = "Must be 15 characters or less";
		}

		if (!values.lastName) {
			errors.lastName = "Required*";
		} else if (values.lastName.length >= 21) {
			errors.lastName = "Must be 20 characters or less";
		}

		if (!values.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values.subject) {
			errors.subject = "Required*";
		} else if (values.subject.length <= 0) {
			errors.subject = "Please inform us about the topic.";
		}

		if (!values.message) {
			errors.message = "Required*";
		} else if (values.message.length <= 0) {
			errors.message = "Please tell us about your enquiry.";
		}

		return errors;
	};

	const [values, setValues] = useState({});
	const handleChange = (event) => {
		setValues((prevValues) => ({
			...prevValues,
			[event.target.name]: event.target.value,
		}));
	};

	/* Contact Form Fields
	And Initial Values */
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			subject: "",
			message: "",
		},
		validate,
		onSubmit: (values) => {
			alert(JSON.stringify(values, null, 2));
		},
	});

	// /* Contact Form Field */
	// const [fullName, setFullName] = useState("");
	// const [email, setEmail] = useState("");
	// const [subject, setSubject] = useState("");
	// const [message, setMessage] = useState("");
	// const [errors, setErrors] = useState({});

	// useEffect(() => {
	// 	const errors = {};

	// 	if (!fullName.trim()) {
	// 		errors.name = "Name is required";
	// 	}

	// 	if (!email.trim()) {
	// 		errors.email = "Email is required";
	// 	} else if (!/\S+@\S+\.\S+/.test(email)) {
	// 		errors.email = "Email is invalid";
	// 	}

	// 	if (!subject.trim()) {
	// 		errors.name = "Subject is required";
	// 	}

	// 	if (!message.trim()) {
	// 		errors.name = "Please add a message.";
	// 	}

	// 	setErrors(errors);
	// }, [fullName, email, subject, message]);

	// /* Contact Form Data Handing */
	// const handleSubmit = async (event) => {
	// 	event.preventDefault();

	// 	const formData = {};

	// 	Array.from(event.currentTarget.elements).forEach((field) => {
	// 		if (!field.name) return;
	// 		formData[field.name] = field.value;
	// 	});

	// 	// console.log(formData);

	// 	fetch("/api/mail", {
	// 		method: "post",
	// 		body: JSON.stringify(formData),
	// 	});
	// };

	return (
		<section className="relative overflow-hidden">
			<div className="container px-4 mx-auto lg:px-0">
				<div className="overflow-hidden bg-white pt-28 mb-28">
					<div className="mx-auto mb-20 text-center">
						<h2 className="text-center tracking-normal leading-[2.75rem] font-[600] text-2xl sm:text-3xl lg:text-5xl py-4">
							{props?.title}
						</h2>
						<motion.div
							variants={fadeIn}
							className={isParagraphContent(props?.paragraph)}
							dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
						/>
					</div>
					<div className="flex flex-col justify-center gap-4 lg:flex-row lg:items-center">
						<div className="w-full p-0 lg:w-1/2 lg:p-8">
							<div className="mx-auto overflow-hidden max-w-max rounded-3xl">
								<Image
									width={1000}
									height={600}
									objectFit="cover"
									objectPosition="center"
									src={`${props?.image?.sourceUrl}`}
									alt={`${props?.image?.altText} Image`}
									className="transition duration-1000 ease-in-out transform hover:scale-105"
								/>
							</div>
						</div>
						<motion.div
							variants={stagger}
							className="flex flex-col items-center justify-center w-full p-0 pt-8 lg:w-1/2 lg:p-8 lg:items-start"
						>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Email
								</p>
								<ul className="mb-12">
									<li className="text-medium text-darkGrey font-[400]">
										<Link href={`mailto:${props?.email}`}>
											<a>{props?.email}</a>
										</Link>
									</li>
								</ul>
							</motion.div>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Phone
								</p>
								<ul className="mb-14">
									<li className="text-medium text-darkGrey font-[400]">
										<Link href={`tel:${props?.phoneNumber}`}>
											<a>{props?.phoneNumber}</a>
										</Link>
									</li>
								</ul>
							</motion.div>
							<motion.div variants={fadeIn}>
								<p className="text-center lg:text-left mb-4 text-sm font-[600] uppercase tracking-px">
									Address
								</p>
								<ul>
									<li className="text-medium text-darkGrey font-[400]">
										High St, Swansea,
									</li>
									<li className="text-medium text-darkGrey font-[400]">
										SA1 1NW, Wales
									</li>
								</ul>
							</motion.div>
						</motion.div>
					</div>
				</div>
			</div>
			<div
				style={{
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage: `linear-gradient(
							0deg,
							rgba(221, 69, 119, 0.65),
							rgba(221, 69, 119, 0.15)
						),url("${props.backgroundImage}")`,
				}}
			>
				<div className="container relative z-10 px-4 py-20 mx-auto lg:px-0">
					<Formik>
						<Form
							className="mx-auto bg-white rounded-lg px-11 pt-9 pb-11 bg-opacity-90 transition-all ease-in-out duration-[0.5s] md:max-w-xl shadow-12xl"
							style={{backdropFilter: "blur(5px)"}}
						>
							<motion.h3
								variants={fadeIn}
								className="mx-auto mb-8 text-xl font-semibold leading-normal text-center uppercase md:max-w-sm"
							>
								{props?.formText}
							</motion.h3>

							<motion.div variants={stagger} className="flex flex-col gap-4">
								<motion.div variants={fadeInUp}>
									{formik.errors.firstName ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik.errors.firstName}
											</p>
										</div>
									) : null}
									<Field
										id="firstName"
										name="firstName"
										placeholder="First Name"
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										value={formik.values.firstName}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik.errors.lastName ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik.errors.lastName}
											</p>
										</div>
									) : null}
									<Field
										id="lastName"
										name="lastName"
										placeholder="Last Name"
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										value={formik.values.lastName}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik.errors.email ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik.errors.email}
											</p>
										</div>
									) : null}
									<Field
										id="email"
										name="email"
										type="email"
										placeholder="Email Address"
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										value={formik.values.email}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik.errors.subject ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik.errors.subject}
											</p>
										</div>
									) : null}
									<Field
										id="subject"
										name="subject"
										type="text"
										placeholder="Subject"
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										value={formik.values.subject}
										className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
									/>
								</motion.div>
								<motion.div variants={fadeInUp}>
									{formik.errors.message ? (
										<div>
											<p className="py-1 text-left text-tiny text-pink font-[400]">
												{formik.errors.message}
											</p>
										</div>
									) : null}
									<textarea
										rows={5}
										id="message"
										name="message"
										placeholder="Your message"
										onBlur={formik.handleBlur}
										onChange={formik.handleChange}
										value={formik.values.message}
										className="p-4 w-full h-48 font-[400] text-darkGrey placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink resize-none rounded-lg focus:ring-[1px] focus:ring-pink"
									></textarea>
								</motion.div>
								<motion.button
									variants={fadeInUp}
									type="submit"
									className="py-4 px-9 w-full text-white text-medium font-[400] rounded-lg shadow-4xl focus:outline-none focus:ring focus:ring-fadedPinkThree active:ring-fadedPinkThree focus-visible:ring-pink disabled:bg-opacity-50 disabled:cursor-not-allowed bg-pink active:bg-pink hover:bg-fadedPinkThree transition-all ease-in-out duration-[0.5s]"
								>
									Send Message
								</motion.button>
							</motion.div>
						</Form>
					</Formik>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
