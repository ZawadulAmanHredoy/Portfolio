export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
        <p className="mt-2 text-gray-600">
          Reach out directly—responses are typically quick.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900">Direct</h3>
            <div className="mt-4 space-y-2 text-gray-700">
              <p>
                Email:{" "}
                <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="mailto:zawadulamanhredoy11189@gmail.com">
                  zawadulamanhredoy11189@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="tel:+8801874648057">
                  +880 1874-648057
                </a>
              </p>
            </div>
          </div>

          <form
            className="rounded-2xl bg-white p-6 shadow-sm"
            onSubmit={(e) => e.preventDefault()}
          >
            <h3 className="text-lg font-semibold text-gray-900">Message</h3>
            <p className="mt-1 text-sm text-gray-500">
              (Optional form — direct email/phone is the main contact method.)
            </p>

            <div className="mt-4 space-y-3">
              <input className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:border-indigo-300 focus:outline-none" placeholder="Your name" />
              <input className="w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:border-indigo-300 focus:outline-none" placeholder="Your email" />
              <textarea className="h-28 w-full rounded-xl border border-gray-200 px-4 py-2 text-sm focus:border-indigo-300 focus:outline-none" placeholder="Your message" />
              <button className="w-full rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
                Send (UI only)
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
