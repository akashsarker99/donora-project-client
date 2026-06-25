import {
  LuShieldCheck,
  LuActivity,
  LuUsers,
  LuMapPin,
  LuDroplets,
  LuZap,
} from "react-icons/lu";

const features = [
  {
    icon: LuShieldCheck,
    title: "Verified & Safe",
    description:
      "Every donor is verified to ensure secure and reliable blood donations.",
  },
  {
    icon: LuActivity,
    title: "Real-time Updates",
    description:
      "Track donation requests and receive instant status updates.",
  },
  {
    icon: LuUsers,
    title: "Community Driven",
    description:
      "Thousands of donors are helping save lives across Bangladesh.",
  },
  {
    icon: LuMapPin,
    title: "Nationwide Coverage",
    description:
      "Available across districts and upazilas to connect donors quickly.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#4D0606] py-20">
      <div className="mx-auto grid container gap-8 px-4 lg:grid-cols-2 lg:items-center">

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-red-400">
            Why Choose Us
          </p>

          <h2 className="mt-4 font-logo text-4xl leading-tight text-white md:text-5xl">
            Connecting Hearts,
            <br />
            <span className="text-red-300">
              Saving Lives
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-red-100">
            Donora bridges the gap between blood donors and
            recipients with technology, compassion, and a
            nationwide community committed to saving lives.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white">
              <LuDroplets className="text-red-400" />
              All 8 Blood Groups
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white">
              <LuMapPin className="text-red-400" />
              64 Districts
            </div>

            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-white">
              <LuZap className="text-red-400" />
              24/7 Available
            </div>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500/40 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C70000]">
                  <Icon className="text-2xl text-white" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-red-100">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;