'use client'

import { Button, Drawer } from "@heroui/react";
import { RiSideBarFill } from "react-icons/ri";

const DashboardMobileSidebar = ({sidebarContent}) => {
   
    return (
        <div>
            <div className="lg:hidden">
  <Drawer>
    <Button
      isIconOnly
      variant="ghost"
      className="mr-2 text-red-600 hover:bg-red-500 hover:text-white text-5xl"
    >
      <RiSideBarFill />
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
        </div>
    );
};

export default DashboardMobileSidebar;