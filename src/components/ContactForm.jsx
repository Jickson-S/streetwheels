import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        'service_zrlwvrr', 
        'template_31g7o9r',
        form.current,
        'BuB1h2yR3S-Y5CXoo' 
      )
      .then(() => {
        alert('✅ Your message has been sent!');
        form.current.reset();
      })
      .catch(() => {
        alert('❌ Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 bg-gray-800 p-6 rounded-lg shadow-lg"
      >
        <input
          name="name"
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 p-3 w-full rounded font-semibold transition duration-300"
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
