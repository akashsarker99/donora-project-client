
const StatsCard = ({icon: Icon, value, title, subtitle}) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-red-500/40 hover:bg-white/10 text-center ease-in-out duration-300 hover:-translate-y-2">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 shadow-lg shadow-red-900/30">
        <Icon className="text-2xl text-white" />
      </div>

      <h2 className="mt-4 font-logo text-3xl font-bold text-white">
        {value}
      </h2>

      <h3 className="mt-3 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="text-sm leading-6 text-red-100">
        {subtitle}
      </p>
    </div>
  );
};

export default StatsCard;