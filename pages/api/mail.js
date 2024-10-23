// import nodemailer from 'nodemailer';
const nodemailer = require('nodemailer');




const sendWelcomeEmail = async (req, res) => {
    try {
        const host = process.env.NEXT_PUBLIC_HOST;
  
         console.log(host);
        if (req.method == "POST") {
            const {username, useremail, usersubject, usermessage } = req.body;
            // console.log(useremail);
            const emailTemplate = `
                <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                    <h2>Hello ${username},</h2>
                    <p>Thank you for reaching out to us!</p>
                    <p><strong>Your email:</strong> ${useremail}</p>
                    <p><strong>Subject:</strong> ${usersubject}</p>
                    <p><strong>Message:</strong></p>
                    <blockquote style="border-left: 2px solid #ccc; padding-left: 10px;">
                    ${usermessage}
                    </blockquote>
                </div>
            `;

            const transporter = nodemailer.createTransport({
                host: process.env.SMTP_HOST,
                port: process.env.SMTP_PORT,
                auth: {
                    user: process.env.SMTP_USERNAME,
                    pass: process.env.SMTP_PASSWORD
                }
            });
            // console.log(transporter);
            const info = await transporter.sendMail({
                from: '"Wohnungs Guru" <tremayne.koss49@ethereal.email>',
                to: useremail,
                subject: usersubject,
                html: emailTemplate,
                
                
            });
            // console.log(info);
        }
        
        res.status(200).json({ status:"success", msg: "Your Email has been sent!" });
    } catch (error) {
        res.status(500).json({ status: 'error', msg: error });
    }
};
export default sendWelcomeEmail;
