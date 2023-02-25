/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import {motion} from "framer-motion";
import React, {useState} from "react";
import {FunctionComponent} from "react";
import {sendContactForm} from "../lib/api";
import DOMPurify from "isomorphic-dompurify";
import {useFormik, Formik, Field, Form} from "formik";
import {fadeIn, fadeInUp, stagger} from "../animations/animations";

interface IProps {
	title: string;
	paragraph: string;
	paragraphBottom: string;
}

const ContactFormMap: FunctionComponent<IProps> = ({
	title,
	paragraph,
	paragraphBottom,
}) => {
	/* Check if paragraph content is null
	 And Displays content if it null */
	function isParagraphContent(isParagraphContent: string) {
		let contentStyling: string;
		if (isParagraphContent === null || isParagraphContent === undefined) {
			contentStyling = "hidden text-darkGrey text-base leading-relaxed mb-5";
		} else {
			contentStyling = "block text-darkGrey text-base leading-relaxed mb-5";
		}
		return contentStyling;
	}

	function createParagraphMarkup(paragraphContent: string) {
		return {
			__html: DOMPurify.sanitize(paragraphContent),
		};
	}

	const initState: {
		error: string;
		isLoading: boolean;
	} = {isLoading: false, error: ""};
	const [state, setState]: any = useState(initState);
	const {
		isLoading,
		error,
	}: {
		error: string;
		isLoading: boolean;
	} = state;

	// A custom validation function. This must return an object
	// which keys are symmetrical to our values/initialValues
	const validate: any = (values: any) => {
		const errors: any = {};
		if (!values?.fullName) {
			errors.fullName = "Required*";
		} else if (values?.fullName.length >= 16) {
			errors.fullName = "Must be 15 characters or less";
		}

		if (!values?.email) {
			errors.email = "Required*";
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values?.email)
		) {
			errors.email = "Invalid email address";
		}

		if (!values?.message) {
			errors.message = "Required*";
		} else if (values?.message.length <= 0) {
			errors.message = "Please tell us about your enquiry.";
		}

		return errors;
	};

	/* Contact Form Fields
	And Initial Values */
	const formik: any = useFormik({
		initialValues: {
			fullName: "",
			email: "",
			message: "",
		},
		validate,
		onSubmit: async (values) => {
			setState((prev) => ({
				...prev,
				isLoading: true,
			}));
			try {
				await sendContactForm(values);
				setState(initState);
			} catch (error) {
				setState((prev) => ({
					...prev,
					isLoading: false,
					error: error.message,
				}));
			}
		},
	});

	return (
		<section className="relative text-grey body-font">
			<div className="absolute inset-0 bg-grey">
				<iframe
					title="map"
					width="100%"
					height="100%"
					loading="lazy"
					allowFullScreen={true}
					style={{
						filter: "grayscale(1) contrast(1.2) opacity(0.4)",
					}}
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9907.997021073143!2d-3.9420236!3d51.6232228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x919fb6f2312ca92b!2sKandys%20Launderette%20%26%20Dry%20Cleaner!5e0!3m2!1sen!2suk!4v1637884674092!5m2!1sen!2suk"
				/>
			</div>
			<div className="container flex px-5 py-24 mx-auto">
				<div className="relative z-10 flex flex-col w-full p-8 mt-10 bg-white rounded-lg shadow-md lg:w-1/3 md:w-1/2 md:ml-auto md:mt-0">
					<h2 className="mb-3 text-xl font-medium text-pink">{title}</h2>
					<motion.div
						variants={fadeIn}
						className={isParagraphContent(paragraph)}
						dangerouslySetInnerHTML={createParagraphMarkup(paragraph)}
					/>

					{isLoading ? (
						<motion.div
							variants={fadeIn}
							className="flex items-center justify-center my-4 mb-8 gap-x-2"
						>
							<h4 className="text-lg font-semibold text-center uppercase text-brightGreen">
								Message sent
							</h4>
							<Image
								src={`/img/icons/checkMarkGreen.png`}
								alt={`Message Sent verification Icon`}
								className="w-[22px] h-[22px] object-contain object-center"
							/>
						</motion.div>
					) : null}

					<Formik>
						<motion.div variants={stagger}>
							<motion.div variants={fadeInUp} className="relative mb-4">
								{formik.touched.fullName && formik.errors.fullName ? (
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
								{formik.touched.email && formik.errors.email ? (
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
								{formik.touched.message && formik.errors.message ? (
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
								isLoading={isLoading}
								onClick={formik.handleSubmit}
								disabled={
									!formik.values.fullName ||
									!formik.values.email ||
									!formik.values.message
								}
								className="py-4 px-9 w-full text-white text-medium font-[400] rounded-xl shadow-4xl disabled:bg-opacity-50 disabled:cursor-not-allowed bg-pink hover:border-yellow active:bg-yellow hover:bg-yellow transition-all ease-in-out duration-[0.5s]"
								type="submit"
							>
								Send Message
							</motion.button>
						</motion.div>
					</Formik>
					<motion.div variants={fadeIn} className="mt-5">
						<div
							className={isParagraphContent(paragraphBottom)}
							dangerouslySetInnerHTML={createParagraphMarkup(paragraphBottom)}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactFormMap;
