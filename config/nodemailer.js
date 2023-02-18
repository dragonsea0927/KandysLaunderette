import nodemailer from "nodemailer";

const email = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
	host: "gmail",
	service: "gmail",
	port: 587,
	secure: false,
	auth: {
		user: email,
		pass: pass,
	},
	tls: {rejectUnauthorized: false},
	logger: true,
	debug: true,
});

export const mailOptions = {
	from: email,
	to: email,
};
