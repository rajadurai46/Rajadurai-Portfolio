const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

exports.sendAutoReply = async (to, name) => {
  await transporter.sendMail({
    from: `"Rajadurai" <${process.env.EMAIL_USER}>`,
    to,
    subject: "Thanks for contacting me!",
    html: `
      <p>Hi <b>${name}</b>,</p>
      <p>Thank you for reaching out. I’ve received your message and will get back to you shortly.</p>
      <br/>
      <p>Regards,<br/>Rajadurai</p>
    `,
  });
};

exports.sendAdminNotification = async (name, email, phone, message) => {
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "New Contact Form Message",
    html: `
      <h3>New Message Received</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Message:</b><br/>${message}</p>
    `,
  });
};
