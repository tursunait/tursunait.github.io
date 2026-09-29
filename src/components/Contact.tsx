import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || '';
const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || '';
const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || '';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);
  const [isSending, setIsSending] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    const hasNameError = trimmedName === '';
    const hasEmailError = trimmedEmail === '';
    const hasMessageError = trimmedMessage === '';

    setNameError(hasNameError);
    setEmailError(hasEmailError);
    setMessageError(hasMessageError);

    if (hasNameError || hasEmailError || hasMessageError) {
      setSubmitStatus('Please fill in all required fields.');
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus('The email service is not configured yet. Add your EmailJS credentials to the environment variables.');
      return;
    }

    try {
      setIsSending(true);
      setSubmitStatus('');

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: trimmedName,
          email_phone: trimmedEmail,
          message: trimmedMessage,
          reply_to: trimmedEmail,
        },
        publicKey,
      );

      setName('');
      setEmail('');
      setMessage('');
      setNameError(false);
      setEmailError(false);
      setMessageError(false);
      setSubmitStatus('Your message has been sent successfully.');
    } catch (error) {
      console.error('EmailJS submission failed:', error);
      setSubmitStatus('Something went wrong while sending your message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Interested in collaborating on data science, ML, or evaluation work? Send a note and
            I will get back to you.
          </p>
          <p>
            San Francisco Bay Area, CA · (650)269-5878 ·{" "}
            <a href="mailto:tursunai.tu@gmail.com">
              tursunai.tu@gmail.com
            </a>{" "}
            ·{" "}
            <a href="https://www.linkedin.com/in/tursunait/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>{" "}
            ·{" "}
            <a href="https://github.com/tursunait" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </p>
          <Box
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
            onSubmit={handleSubmit}
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
            />
            {submitStatus ? (
              <p style={{ color: submitStatus.includes('successfully') ? '#1db954' : '#d32f2f', margin: '12px 0' }}>
                {submitStatus}
              </p>
            ) : null}
            <Button type="submit" variant="contained" endIcon={<SendIcon />} disabled={isSending}>
              {isSending ? 'Sending...' : 'Send'}
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;
