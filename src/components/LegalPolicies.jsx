export default function LegalPolicies() {
  return (
    <section id="policies" className="bg-white text-gray-800 px-4 py-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="text-3xl font-bold text-center mb-4">📄 Legal Policies</h2>

        <div>
          <h3 className="text-xl font-semibold mb-2">Privacy Policy</h3>
          <p className="text-sm leading-relaxed">
            We respect your privacy and are committed to protecting your personal data. We only collect necessary information to provide our services and never share your data with third parties without consent. Your booking details, contact info, and payment methods are encrypted and securely stored.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Terms & Conditions</h3>
          <p className="text-sm leading-relaxed">
            By using our service, you agree to comply with our vehicle rental terms. Cars must be returned in good condition, any damage caused during use will be charged to the user. Booking confirmations are subject to vehicle availability. Misuse of our cars or delay in return may incur penalties.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Refund Policy</h3>
          <p className="text-sm leading-relaxed">
            Cancellations made 24 hours prior to pickup are eligible for a full refund. Same-day cancellations are subject to a 50% refund. Refunds are processed within 5–7 working days. No refunds are given for no-shows or early returns.
          </p>
        </div>
      </div>
    </section>
  );
}