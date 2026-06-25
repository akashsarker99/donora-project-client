'use client'
import Link from "next/link";
import Image from "next/image";
import { LuLayoutDashboard, LuList, LuLogOut, LuPlus, LuDroplets, LuBadgeDollarSign, LuGlobe, LuUsers } from "react-icons/lu";
import { FaUser } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import { Button, Drawer } from "@heroui/react";
import { LayoutSideContentLeft } from "@gravity-ui/icons";
import { handleLogout } from "@/lib/core/logout";
import { useRouter } from "next/navigation";

const DashboardSidebar = () => {
  const router = useRouter();
 const {data: session} = authClient.useSession()
  const user = session?.user;

  const donorLinks = [
    {
      icon: LuLayoutDashboard,
      label: "Dashboard",
      href: `/dashboard/donor`,
    },
    {
      icon: FaUser,
      label: "My Profile",
      href: "/dashboard/profile",
    },
    {
      icon: LuList,
      label: "My Requests",
      href: "/dashboard/requests",
    },
    {
      icon: LuPlus,
      label: "Create Request",
      href: "/dashboard/create-request",
    },
  ];
  const volunteerLinks = [
  {
    icon: LuLayoutDashboard,
    label: "Dashboard",
    href: "/dashboard/volunteer",
  },
  {
    icon: FaUser,
    label: "My Profile",
    href: "/dashboard/profile",
  },
  {
    icon: LuList,
    label: "My Requests",
    href: "/dashboard/requests",
  },
  {
    icon: LuPlus,
    label: "Create Request",
    href: "/dashboard/create-request",
  },
  {
    icon: LuGlobe,
    label: "Public Requests",
    href: "/donation-requests",
  },
  {
    icon: LuDroplets,
    label: "All Blood Requests",
    href: "/dashboard/volunteer/all-blood-requests",
  },
];
const adminLinks = [
  {
    icon: LuLayoutDashboard,
    label: "Dashboard",
    href: "/dashboard/admin",
  },
  {
    icon: FaUser,
    label: "My Profile",
    href: "/dashboard/profile",
  },
  {
    icon: LuList,
    label: "My Requests",
    href: "/dashboard//requests",
  },
  {
    icon: LuPlus,
    label: "Create Request",
    href: "/dashboard/create-request",
  },
  {
    icon: LuUsers,
    label: "All Users",
    href: "/dashboard/admin/all-users",
  },
  {
    icon: LuGlobe,
    label: "Public Requests",
    href: "/donation-requests",
  },
];

  const navMap = {
    donor: donorLinks,
    volunteer: volunteerLinks,
    admin: adminLinks,
  };

  const navItems = navMap[user?.role] || donorLinks;
  
const sidebarContent = (
  <div className="flex min-h-screen flex-col bg-[#3e0000] text-white">
    <div className="border-b border-white/10 px-6 py-6">
      <Link href="/" className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E00000]">
          <LuDroplets className="text-xl text-white" />
        </div>

        <h2 className="font-logo text-2xl font-bold text-white">
          Donora
        </h2>
      </Link>
    </div>

    <div className="flex-1 px-4 py-5">
      <nav className="space-y-2">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={`flex items-center gap-3 rounded-2xl px-5 py-3 text-base font-medium transition-all duration-200 ${
              index === 0
                ? "bg-[#E00000] text-white"
                : "text-white/90 hover:bg-[#730000]"
            }`}
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>

    <div className="border-t border-white/10 p-4">
      <Link
        href="/dashboard/profile"
        className="mb-4 flex items-center gap-3 rounded-2xl bg-[#730000] p-3 transition-all duration-200 hover:bg-[#850000]"
      >
        {user?.image ? (
          <div className="relative h-10 w-10 overflow-hidden rounded-full">
            <Image
              src={user.image}
              alt={user.name}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E00000] text-sm font-bold">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
        )}

        <div>
          <h4 className="text-sm font-semibold text-white">
            {user?.name}
          </h4>

          <p className="text-xs capitalize text-[#FF7A7A]">
            {user?.role || "donor"}
          </p>
        </div>
      </Link>

      <button onClick={()=>handleLogout(router)} className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-base text-[#FF7A7A] transition-all duration-200 hover:bg-[#730000] hover:text-white">
        <LuLogOut size={18} />
        Logout
      </button>
    </div>
  </div>
);

return (
  <>
   <aside className="sticky top-0 hidden h-screen w-80 shrink-0 lg:block">
      {sidebarContent}
    </aside>
<div className="lg:hidden">
  <Drawer>
    <Button
      isIconOnly
      className="m-4 bg-[#E00000] text-white"
    >
      <LayoutSideContentLeft />
    </Button>

    <Drawer.Backdrop>
      <Drawer.Content
        placement="left"
        className="m-0 w-64 max-w-none rounded-none bg-[#5B0000] p-0"
      >
        <Drawer.Dialog className="m-0 h-screen rounded-none bg-[#5B0000] p-0">
          <Drawer.CloseTrigger />
            {sidebarContent}
        </Drawer.Dialog>
      </Drawer.Content>
    </Drawer.Backdrop>
  </Drawer>
</div>
  </>
);
};

export default DashboardSidebar;