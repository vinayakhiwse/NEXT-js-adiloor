import { transporter } from "@/configs/mailConfig";
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const fs = require("fs");

const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("./mail-template/"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./mail-template/"),
};

export default function handler(req, res) {
  try {
    const { name, email, help, comment, mailto } = req.body;
    transporter.use("compile", hbs(handlebarOptions));

    const logoImagePath = path.join(process.cwd(), "public/asset/hlogo.png");
    const logoImage = fs.readFileSync(logoImagePath);

    const mailData = {
      from: process.env.NEXT_PUBLIC_SMTP_USER_NAME,
      to: mailto,
      subject: "Contact Form Submission",
      template: "contactUs-mail-template",
      context: {
        name: name, // replace {{name}} with Adebola
        email: email, // replace {{email}} with My Company
        help: help, // replace {{help}} with My Company
        comment: comment, // replace {{comment}} with My Company
      },
      attachments: [
        {
          filename: "hlogo.png",
          content: logoImage,
          cid: "logo", // Content-ID for the logo image
        },
      ],
    };

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        res
          .status(500)
          .send({ error: "An error occurred while sending the email" });
      } else {
        res.status(200).send({ message: "Mail Sending Successfully" });
      }
    });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while sending the email" });
  }
}
