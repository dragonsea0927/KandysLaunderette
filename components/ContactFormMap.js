import Link from "next/link";
import {motion} from "framer-motion";
import React, {useState} from "react";
import DOMPurify from "isomorphic-dompurify";
import {useFormik, Formik, Field, Form} from "formik";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";

const ContactFormMap = (props) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent) {
		let contentStyling;
		if (isParagraphContent === null) {
			contentStyling = "hidden text-darkGrey text-base leading-relaxed mb-5";
		} else {
			contentStyling = "block text-darkGrey text-base leading-relaxed mb-5";
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
		if (!values.fullName) {
			errors.fullName = "Required*";
		} else if (values.fullName.length >= 51) {
			errors.fullName = "Must be 50 characters or less";
		}

		if (!values.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
		) {
			errors.email = "Invalid email address";
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
			fullName: "",
			email: "",
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
		<section className="relative text-grey body-font">
			<div className="absolute inset-0 bg-grey">
				<iframe
					title="map"
					width="100%"
					height="100%"
					scrolling="no"
					loading="lazy"
					marginWidth="0"
					frameBorder="0"
					marginHeight="0"
					allowFullScreen={true}
					style={{
						filter: "grayscale(1) contrast(1.2) opacity(0.4)",
					}}
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9907.997021073143!2d-3.9420236!3d51.6232228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x919fb6f2312ca92b!2sKandys%20Launderette%20%26%20Dry%20Cleaner!5e0!3m2!1sen!2suk!4v1637884674092!5m2!1sen!2suk"
				/>
			</div>
			<div className="container flex px-5 py-24 mx-auto">
				<div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
					<h2 className="mb-3 text-xl font-medium text-pink">{props?.title}</h2>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(props?.paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(props?.paragraph)}
					/>
					<Formik>
						<motion.Form variants={stagger}>
							<motion.div variants={fadeInUp} className="relative mb-4">
								{formik.errors.fullName ? (
									<div>
										<p className="py-1 text-left text-tiny text-pink font-[400]">
											{formik.errors.fullName}
										</p>
									</div>
								) : null}
								<label className="text-sm leading-7 text-darkGrey">
									First &amp; last name
								</label>
								<Field
									id="fullName"
									name="fullName"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									value={formik.values.fullName}
									className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="relative mb-4">
								{formik.errors.email ? (
									<div>
										<p className="py-1 text-left text-tiny text-pink font-[400]">
											{formik.errors.email}
										</p>
									</div>
								) : null}
								<label className="text-sm leading-7 text-darkGrey">Email</label>
								<Field
									id="email"
									name="email"
									type="email"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									value={formik.values.email}
									className="px-4 py-3 w-full text-darkGrey font-[400] placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink rounded-lg focus:ring-[1px] focus:ring-pink"
								/>
							</motion.div>
							<motion.div variants={fadeInUp} className="relative mb-4">
								{formik.errors.message ? (
									<div>
										<p className="py-1 text-left text-tiny text-pink font-[400]">
											{formik.errors.message}
										</p>
									</div>
								) : null}
								<label className="text-sm leading-7 text-darkGrey">
									Message
								</label>
								<textarea
									rows={5}
									id="message"
									name="message"
									onBlur={formik.handleBlur}
									onChange={formik.handleChange}
									value={formik.values.message}
									className="p-4 w-full h-48 font-[400] text-darkGrey placeholder-darkGrey bg-white bg-opacity-50 outline-none border-[1px] border-darkGrey active:border-pink focus:border-pink resize-none rounded-lg focus:ring-[1px] focus:ring-pink"
								></textarea>
							</motion.div>
							<motion.button
								variants={fadeInUp}
								className="py-4 px-9 w-full text-white text-medium font-[400] border-[1px] border-pink rounded-xl shadow-4xl focus:ring focus:ring-yellow disabled:bg-opacity-50 disabled:cursor-not-allowed bg-pink hover:border-yellow active:bg-yellow hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
								type="submit"
							>
								Send Message
							</motion.button>
						</motion.Form>
					</Formik>
					<motion.div variants={fadeIn} className="mt-5">
						<div
							className={isParagraphContent(props?.paragraphTwo)}
							dangerouslySetInnerHTML={createParagraphMarkup(
								props?.paragraphTwo
							)}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormMap;
