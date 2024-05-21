const nodemailer = require("nodemailer");

export const transporter = nodemailer.createTransport({
  port: process.env.NEXT_PUBLIC_SMTP_PORT,
  host: process.env.NEXT_PUBLIC_SMTP_HOST,
  auth: {
    user: process.env.NEXT_PUBLIC_SMTP_USER_NAME,
    pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
  },
  secure: true,
});
