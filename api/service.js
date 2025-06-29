const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const {
    service,
    project_name,
    client_name,
    client_email,
    client_mobile,
    project_detail,
  } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'shivamkumar098798@gmail.com',
      pass: 'qaio cnmq ilaf brek', // Replace with your Gmail App Password
    },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
        <div style="background: linear-gradient(to right, #1e3a8a, #06b6d4); padding: 20px; text-align: center;">
          <img src="https://i.ibb.co/s9CJ0nT/STech-logo.png" alt="STech Services" style="height: 50px;" />
          <h2 style="color: white; margin: 0;">New Service Inquiry</h2>
        </div>
        <div style="padding: 20px;">
          <h3>📌 Service: ${service}</h3>
          <p><strong>Project Name:</strong> ${project_name}</p>
          <p><strong>Client Name:</strong> ${client_name}</p>
          <p><strong>Email:</strong> ${client_email}</p>
          <p><strong>Mobile:</strong> ${client_mobile}</p>
          <p><strong>Project Details:</strong><br>${project_detail}</p>
        </div>
        <div style="background-color: #0a192f; color: white; padding: 16px; text-align: center;">
          <small>STech Services • www.stechservices.com</small>
        </div>
      </div>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: '"STech Services" <shivamkumar098798@gmail.com>',
      to: 'shivamkumar098798@gmail.com', // or another receiving email
      subject: `📩 New ${service} Inquiry from ${client_name}`,
      html: htmlContent,
    });

    res.status(200).send('✅ Email Sent');
  } catch (err) {
    console.error('Email Error:', err);
    res.status(500).send('❌ Email Failed');
  }
});

app.listen(5000, () => console.log('🚀 Server running on port 5000'));
