const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/send', (req, res) => {
  const { fullname, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ashleylove408@gmail.com', // replace with your email
      pass: 'your-email-password' // replace with your email password
    }
  });

  const mailOptions = {
    from: email,
    to: 'ashleylove408@gmail.com',
    subject: `Message from ${fullname}`,
    text: message
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Message sent successfully');
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});