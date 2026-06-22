import { LuDroplets } from "react-icons/lu";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <div className="flex flex-col items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#DC2626]/10 animate-pulse">
          <LuDroplets className="text-5xl text-[#DC2626] animate-bounce" />
        </div>

        <div className="text-center">
          <h2
            className="text-3xl font-bold text-[#130505] font-logo"
          >
            Donora
          </h2>

        </div>

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#DC2626] animate-bounce"></span>
          <span
            className="h-3 w-3 rounded-full bg-[#DC2626] animate-bounce"
            style={{ animationDelay: "0.15s" }}
          ></span>
          <span
            className="h-3 w-3 rounded-full bg-[#DC2626] animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></span>
        </div>
      </div>
    </div>
  );
}