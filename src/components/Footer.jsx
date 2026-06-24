import Link from "next/link";
import {FaFacebookF, FaYoutube, FaLocationDot, FaPhone,} from "react-icons/fa6";
import { LuDroplets } from "react-icons/lu";
import { MdEmail } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
    return (
        <footer className="bg-[#130505] text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid gap-10 sm:space-x-15 md:grid-cols-2 lg:grid-cols-4 ">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C70000] shadow-md">
                         <LuDroplets className="text-2xl text-white" />
                       </div>
             
                       <h1
                         className="text-2xl font-bold md:text-3xl"
                         style={{ fontFamily: "var(--font-playfair)" }}>
                         Donora
                       </h1>
            </div>

            <p className="mb-8 leading-7 text-gray-300">
              Connecting blood donors with those in need across Bangladesh.
              Every drop counts, every life matters.
            </p>

          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>

            <div className="flex flex-col gap-2 text-lg text-gray-300">
              <Link href="/" className="hover:text-[#DC2626]">
                Home
              </Link>

              <Link
                href="/donation-requests"
                className="hover:text-[#DC2626]"
              >
                Donation Requests
              </Link>

              <Link href="/search" className="hover:text-[#DC2626]">
                Find Donors
              </Link>

              <Link href="/funding" className="hover:text-[#DC2626]">
                Funding
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Blood Groups</h3>

            <div className="mb-6 grid grid-cols-4 gap-3">
              {[
                "A+",
                "A-",
                "B+",
                "B-",
                "AB+",
                "AB-",
                "O+",
                "O-",
              ].map((group) => (
                <div
                  key={group}
                  className="rounded-lg bg-[#2A0A0A] py-1 text-center font-semibold text-[#DC2626]"
                >
                  {group}
                </div>
              ))}
            </div>

            <p className="leading-7 text-gray-300">
              We connect donors of all blood types with patients in need across
              every district of Bangladesh.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact Us</h3>

            <div>
                <div className="space-y-4 text-gray-300">
              <div className="flex gap-4">
                <FaLocationDot className="mt-1 text-xl text-[#DC2626]" />
                <p>
                  Uttara, 
                  Dhaka, Bangladesh
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-xl text-[#DC2626]" />
                <p>+880 1700 000 000</p>
              </div>

              <div className="flex items-center gap-4">
                <MdEmail className="text-2xl text-[#DC2626]" />
                <p>support@donora.org</p>

                
              </div>
            </div>
              <div className="flex gap-4 mt-6">
              {[FaFacebookF, BsTwitterX, IoLogoInstagram, FaYoutube].map(
                (Icon, idx) => (
                  <button
                    key={idx}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-white/10 text-xl transition hover:bg-[#A60000]"
                  >
                    <Icon />
                  </button>
                )
              )}
            </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 text-gray-400 md:flex-row">
          <p>© 2026 Donora. All rights reserved.</p>

          <p>
           Empowering a stronger blood donation community
          </p>
        </div>
      </div>
    </footer>
    );
};

export default Footer;