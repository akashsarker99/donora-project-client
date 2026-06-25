

const StatsCard = ({icon: Icon, value, title, subtitle}) => {
  return (
    <div className="rounded-[32px] border border-white/15 bg-white/8 px-9 py-5 text-center backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:bg-white/10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
        <Icon className="text-2xl text-white" />
      </div>

      <h2 className="mt-3 font-logo text-2xl sm:text-3xl font-bold text-white">
        {value}
      </h2>

      <h3 className="mt-3 text-lg sm:text-xl font-semibold text-white">
        {title}
      </h3>

      <p className=" text-[14px] text-red-100">
        {subtitle}
      </p>
    </div>
  );
};

export default StatsCard;