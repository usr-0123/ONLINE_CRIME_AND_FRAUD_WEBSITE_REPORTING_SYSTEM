// Email upon registration
export const sendMail = async (Email_address, First_name, Last_name, Password) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.Email,
      pass: process.env.Password,
    },
  });
   
  // Generate HTML string for the email content
  const emailTemp = `
  <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
      <title>THANK YOU FOR REGISTERING TO ONLINE REPORTING SYSTEM!</title>
  </head>
  <body>
      <p>Dear ${First_name} ${Last_name},</p>
      <p>We're excited to have you as a member!</p>
      <p>Report any of the online issues that you encounter, to us anytime and get a confirmation email for your report with a reference number to track the progress</p>
  </body>
  </html>
`;
   
  const mailOptions = {
    from: process.env.Email_address,
    to: Email_address,
    subject: "",
    html: emailTemp,
  };
   
  try {
    logger.info("Sending mail....");
    await transporter.sendMail(mailOptions);
    logger.info("Email sent successfully!");
  } catch (error) {
    logger.error(error);
  }
  };


/////////////////////////////////////////
// Email upon registration
export const sendMail = async (CrimeID) => {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.Email,
      pass: process.env.Password,
    },
  });
   
  // Generate HTML string for the email content
  const crimeEmailTemp = `
  <!DOCTYPE html>
  <html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" lang="en">
  <head>
      <title>CRIME ACKNOWLEDGEMENT</title>
  </head>
  <body>
      <p>Dear ${First_name} ${Last_name},</p>
      <p>We have recieved your case and we are working on it to resolve it as fast as possible</p>
      <p>You can track the stage of your case using the tracking number {CrimeID} </p>
  </body>
  </html>
`;
   
  const mailOptions = {
    from: process.env.Email_address,
    to: Email_address,
    subject: "Crime report acknowledgement and tracking number",
    html: crimeEmailTemp,
  };
   
  try {
    logger.info("Sending mail....");
    await transporter.sendMail(mailOptions);
    logger.info("Email sent successfully!");
  } catch (error) {
    logger.error(error);
  }
  };

    const crimes = [
    "Phishing",
    "Identity Theft",
    "Credit Card Fraud",
    "Online Scams",
    "Malware Attacks",
    "Cyberbullying",
    "Cyberstalking",
    "Data Breaches",
    "Online Extortion",
    "Online Child Exploitation",
    "Hacking",
    "Fraudulent Investment Schemes",
    "Fake Websites and Phony Offers",
    "Social Engineering",
    "Online Auction Fraud"
  ];

  Check on the order of hooks
  Add a component to fetch the crime entry, display its progress
  Now add progress column in the crime entry