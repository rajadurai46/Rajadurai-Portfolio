const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

exports.sendAutoReply = async (to, name) => {
<<<<<<< HEAD
  await transporter.sendMail({
    from: `"Rajadurai" <${process.env.EMAIL_USER}>`,
=======
  await resend.emails.send({
    from: "Rajadurai <rj46jr@gmail.com>",
>>>>>>> c927b3c (third)
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
<<<<<<< HEAD
  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
=======
  await resend.emails.send({
    from: "Rajadurai <rj46jr@gmail.com>",
    to: "rj46jr@gmail.com",
>>>>>>> c927b3c (third)
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

