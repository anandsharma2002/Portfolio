import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('Sending...');

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          setStatus('Your message has been sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          setStatus(`Error: Failed to send message. ${error.text}`);
        }
      );
  };

  return (
    <section className=" mainCard mt-4 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90rem] mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          Contact Me 📬
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="internalCard p-8 rounded-lg shadow-lg space-y-6"
        >
          {/* Name Input */}
          <div>
            <label htmlFor="user_name" className="block text-lg font-medium text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              required
              className="mainCard w-full text-white border-0 rounded-md p-3 focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="user_email" className="block text-lg font-medium text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              required
              className="w-full mainCard text-white border-0 rounded-md p-3 focus:ring-2 focus:ring-blue-500 transition duration-200"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full mainCard text-white border-0 rounded-md p-3 focus:ring-2 focus:ring-blue-500 transition duration-200"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'Sending...'}
              className="bg-[#ffda24] hover:bg-[#e2c227] text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'Sending...' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>

        {/* Status Message Display */}
        {status && (
          <p className={`text-center mt-6 text-lg ${status.includes('Error') ? 'text-red-400' : 'text-green-400'}`}>
            {status}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;