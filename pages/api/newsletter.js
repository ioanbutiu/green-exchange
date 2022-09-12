export default function (req, res) {
	console.log(req.body.email);

	let nodemailer = require('nodemailer');
	const transporter = nodemailer.createTransport({
		port: 465,
		host: 'smtp.gmail.com',
		auth: {
			user: 'ioan@team.design',
			pass: 'rvqccpffttxdympx',
		},
		secure: true,
	});
	const mailData = {
		from: 'ioan@team.design',
		to: 'ioan.butiu@gmail.com',
		subject: `Message From text`,
		text: req.body.email + ' | Sent from: ',
		html: <div>{req.body.email}</div>,
	};
	transporter.sendMail(mailData, function (err, info) {
		if (err) console.log(err);
		else console.log(info);
	});
	res.status(200);
}
