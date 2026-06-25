
const DashboardSidebar = ({sidebarContent}) => {

return (
  <>
   <aside className="sticky top-0 hidden h-screen w-80 shrink-0 lg:block">
      {sidebarContent}
    </aside>

  </>
);
};

export default DashboardSidebar;