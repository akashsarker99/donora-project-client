
const colorVariants = {
  blue: {
    bg: "bg-blue-50",
    border: "border-blue-100",
    text: "text-blue-600",
  },
  green: {
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    text: "text-emerald-600",
  },
  red: {
    bg: "bg-red-50",
    border: "border-red-100",
    text: "text-red-600",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-100",
    text: "text-purple-600",
  },
};

const AdminStatsCard = ({
  title,
  value,
  icon: Icon,
  color,
}) => {
  const style = colorVariants[color];

  return (
    <div className="rounded-3xl border border-gray-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${style.bg} ${style.border}`}
      >
        <Icon className={`text-3xl ${style.text}`} />
      </div>

      <h2 className="mt-5 font-logo text-3xl sm:text-4xl text-[#130505]">
        {value}
      </h2>

      <p className="mt-2 text-lg text-gray-500">
        {title}
      </p>
    </div>
  );
};

export default AdminStatsCard;