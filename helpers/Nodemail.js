import nodemailer from 'nodemailer'
const sendMail=async function sendMail(otp,email){
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
       secure: true,
        auth: {
          user: 'hk5738058@gmail.com',
          pass: 'ftmdkpssmubhnqun'
        }  
      });
        var Osubject=`Otp For Reset Password`
        var Ohtml=`<h3>Hey user with email ${email} Your OTP is : ${otp}<h3>            `
      let info=await transporter.sendMail({
        from:'E-Shop',
        to:email,
        subject:Osubject,
        html:Ohtml
      })
      console.log('message sent',info.messageId);
 }
 export default sendMail;