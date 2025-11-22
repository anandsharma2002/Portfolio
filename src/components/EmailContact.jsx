import React, { useState } from "react";

export default function EmailContact() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");

  const sendEmail = () => {
    if (!window.Email) {
      alert("SMTP.js not loaded properly!");
      return;
    }

    window.Email.send({
      SecureToken: "YOUR_SECURE_TOKEN_HERE", // generated from smtpjs.com
      To: to,
      From: "your_email@example.com",
      Subject: subject,
      Body: body,
    })
      .then((message) => {
        setStatus(message);
      })
      .catch((err) => {
        console.error(err);
        setStatus("Failed to send email");
      });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-xl shadow">
      <h2 className="text-xl font-semibold mb-4">Send Email (SMTP.js)</h2>
      <input
        type="email"
        placeholder="Recipient Email"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="block w-full mb-3 p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="block w-full mb-3 p-2 border rounded"
      />
      <textarea
        placeholder="Message"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="block w-full mb-3 p-2 border rounded"
      />
      <button
        onClick={sendEmail}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Send
      </button>
      {status && <p className="mt-4 text-center text-sm">{status}</p>}
    </div>
  );
}
