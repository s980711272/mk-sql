const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function send(sendInfo) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.qq.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: '980711272@qq.com', // generated ethereal user
      pass: 'hrjqhcuvicqibeba', // generated ethereal password(授权码)
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"认证邮件" <980711272@qq.com>', // sender address
    to: sendInfo.email, // list of receivers
    subject: sendInfo.user !== '' ? sendInfo.user :  `你好主宰者，这是来自合爱谷的问候`, // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  return "Message sent: %s"+ info.messageId;
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

// main().catch(console.error);
export default send