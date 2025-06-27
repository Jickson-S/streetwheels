export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <form className="max-w-xl mx-auto space-y-4 bg-gray-800 p-6 rounded-lg">
        <input type="text" placeholder="Full Name" className="w-full p-3 rounded bg-gray-700 text-white" required />
        <input type="email" placeholder="Email Address" className="w-full p-3 rounded bg-gray-700 text-white" required />
        <input type="tel" placeholder="Phone Number" className="w-full p-3 rounded bg-gray-700 text-white" required />
        <textarea placeholder="Your Message" className="w-full p-3 rounded bg-gray-700 text-white" rows="4" required></textarea>
        <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 p-3 w-full rounded font-semibold">Submit</button>
      </form>
    </section>
  );
}
