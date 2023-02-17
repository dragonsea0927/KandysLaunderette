// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	const body = JSON.parse(req.body);
	console.log(body);

	res.status(200).json({status: "Ok"});
}
