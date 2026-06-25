import {
  LuPhone,
  LuMail,
  LuMapPin,
  LuClock3,
  LuArrowRight,
} from "react-icons/lu";

const ContactSection = () => {
  return (
    <section className="py-20">
      <div className="mx-auto grid container gap-8 px-4 lg:grid-cols-2 lg:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#C70000]">
            Get In Touch
          </p>

          <h2 className="mt-3 font-logo text-4xl sm:text-5xl text-[#130505]">
            Contact Us
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-500">
            Have questions about blood donation or need urgent
            assistance? Our team is always here to help.
          </p>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                <LuPhone className="text-2xl text-[#C70000]" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Hotline
                </p>

                <p className="text-lg font-medium text-[#130505]">
                  +880 1800-LIFEFLOW
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                <LuMail className="text-2xl text-[#C70000]" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Email
                </p>

                <p className="text-lg font-medium text-[#130505]">
                  support@donora.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                <LuMapPin className="text-2xl text-[#C70000]" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Office
                </p>

                <p className="text-lg font-medium text-[#130505]">
                  Motijheel, Dhaka, Bangladesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50">
                <LuClock3 className="text-2xl text-[#C70000]" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Hours
                </p>

                <p className="text-lg font-medium text-[#130505]">
                  24/7 Emergency Support
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="rounded-3xl bg-gray-50 p-8">

          <div className="grid gap-5 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-medium text-[#130505]">
                Name
              </label>

              <input
                type="text"
                placeholder="John Doe"
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 outline-none focus:border-[#C70000]"
              />
            </div>

            <div>
              <label className="mb-2 block font-medium text-[#130505]">
                Email
              </label>

              <input
                type="email"
                placeholder="john@example.com"
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 outline-none focus:border-[#C70000]"
              />
            </div>

          </div>

          <div className="mt-5">
            <label className="mb-2 block font-medium text-[#130505]">
              Subject
            </label>

            <input
              type="text"
              placeholder="Blood donation inquiry..."
              className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 outline-none focus:border-[#C70000]"
            />
          </div>

          <div className="mt-5">
            <label className="mb-2 block font-medium text-[#130505]">
              Message
            </label>

            <textarea
              rows={4}
              placeholder="Write your message..."
              className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-3 outline-none focus:border-[#C70000]"
            />
          </div>

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#C70000] py-3 text-lg font-semibold text-white transition hover:bg-[#A80000]">
            Send Message
            <LuArrowRight className="transition hover:translate-x-1" />
          </button>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;