'use client'

import { LayoutSideContentLeft } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";

const DashboardMobileSidebar = ({sidebarContent}) => {
   
    return (
        <div>
            <div className="lg:hidden ">
  <Drawer>
    <Button
      isIconOnly
      className="m-3 bg-[#c70000] text-white"
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
        </div>
    );
};

export default DashboardMobileSidebar;