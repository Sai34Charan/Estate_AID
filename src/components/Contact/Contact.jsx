import React, { useRef, useState } from 'react';
import './Contact.css';
//import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus('Email service is not configured. Please add VITE_EMAILJS_* keys to your .env file.');
      return;
    }

    setSending(true);
    setStatus('Sending...');
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus('Message sent successfully!');
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('Failed to send message. Please try again.');
    } finally {
      setSending(false);
      setTimeout(() => setStatus(''), 4000);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Have a question or proposal? I’d love to hear from you.</p>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="user_name" placeholder="Your Name" required className="input" />
          <input type="email" name="user_email" placeholder="Your Email" required className="input" />
          <textarea name="message" placeholder="Your Message" required className="textarea"></textarea>
          <button type="submit" className="button" disabled={sending}>{sending ? 'Sending...' : 'Send Message'}</button>
        </form>
        {status && <p className="contact-status">{status}</p>}
      </div>
    </section>
  );
};

export default Contact;


