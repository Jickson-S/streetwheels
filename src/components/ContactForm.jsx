import emailjs from 'emailjs-com';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('your_service_id', 'your_template_id', e.target, 'your_user_id')
      .then(() => alert('Message sent!'))
      .catch(() => alert('Failed to send message'));
    e.target.reset();
  };

  return (
    <section id="contact" className="py-20 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 bg-gray-800 p-6 rounded-lg">
        <input name="name" type="text" placeholder="Full Name" className="w-full p-3 rounded bg-gray-700 text-white" required />
        <input name="email" type="email" placeholder="Email Address" className="w-full p-3 rounded bg-gray-700 text-white" required />
        <input name="phone" type="tel" placeholder="Phone Number" className="w-full p-3 rounded bg-gray-700 text-white" required />
        <textarea name="message" placeholder="Your Message" className="w-full p-3 rounded bg-gray-700 text-white" rows="4" required></textarea>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 p-3 w-full rounded font-semibold">Submit</button>
      </form>
    </section>
  );
}