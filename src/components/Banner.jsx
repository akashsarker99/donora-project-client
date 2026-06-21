import { FaDroplet, FaMagnifyingGlass } from "react-icons/fa6";
import { MdBloodtype } from "react-icons/md";

const Banner = () =>{
  return (
    <section className="relative overflow-hidden">

     <div className="relative bg-cover bg-center bg-no-repeat"
      style={{backgroundImage: "url('/hero.png')"}}>

         <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center sm:text-left">

            <div className="mb-3 inline-flex gap-2 rounded-full border border-red-400/20 bg-white/5 px-5 py-2 text-white backdrop-blur">
             <MdBloodtype className="text-2xl" ></MdBloodtype>
              <span>Bangladesh's Blood Donation Network</span>
            </div>

            <h1 className="font-logo text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl text-center sm:text-left">
              Every Drop
              <br />
              <span className="text-red-300">Saves</span><span> a Life.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-red-50">
              Connect with verified blood donors across Bangladesh.
              One donation can save up to three lives.
              Join thousands of life-savers today.
            </p>

            <div className="mt-10 flex flex-wrap gap-5 justify-center sm:justify-start">
              <button className="flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-semibold text-[#DC2626] transition-all ease-in-out duration-300 hover:scale-105">
                <FaDroplet />
                Join as a Donor
              </button>

              <button className="flex items-center gap-3 rounded-2xl border border-white/30 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-[#A60000] hover:text-white hover:border-[#A60000]">
                <FaMagnifyingGlass />
                Search Donors
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 text-white justify-center sm:justify-start">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Verified Donors
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                64 Districts Covered
              </div>

              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Free Service
              </div>
            </div>
          </div>
        </div>
      </div>
     </div>
    </section>
  );
}

export default Banner;