const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

async function sendEmail(email, newPassword, nama) {
  await transporter.sendMail({
    from: '"Expression" fazrul.anugrah17@gmail.com',
    to: email,
    subject: "Password Generate.",
    text: "Halo! Ini Adalah Email Untuk Generate Password Anda di Situs Expression",
    html: `
    
    
    <!DOCTYPE html>
<html>
<head>
	<title>OTP Verification Email Template</title>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
		body {
			font-family: Arial, sans-serif;
			font-size: 16px;
			line-height: 1.5;
			color: #333333;
		}
		h1 {
			font-size: 24px;
			font-weight: bold;
			margin-top: 0;
			margin-bottom: 20px;
		}
		p {
			margin-bottom: 20px;
		}
		.container {
			max-width: 600px;
			margin: 0 auto;
		}
		.otp-code {
			background-color: #f2f2f2;
			font-size: 24px;
			font-weight: bold;
			padding: 10px;
			display: inline-block;
		}
		.button {
			background-color: #007bff;
			border: none;
			color: #ffffff;
			padding: 10px 20px;
			font-size: 16px;
			font-weight: bold;
			cursor: pointer;
			text-decoration: none;
			display: inline-block;
			margin-top: 20px;
		}
		.button:hover {
			background-color: #0056b3;
		}
	</style>
</head>
<body>
	<div class="container">
		<h1>Password Baru</h1>
		<p>Halo, ${nama}</p>
		<p>Terimakasih Telah Menggunakan Expression, Berikut adalah password yang bisa anda gunakan :</p>
		<div class="otp-code">${newPassword}</div>
		<p>Salam Hangat,</p>
		<p>Fazrul Sahi</p>
	</div>
</body>
</html> 
    `,
  });
}

module.exports = sendEmail;
