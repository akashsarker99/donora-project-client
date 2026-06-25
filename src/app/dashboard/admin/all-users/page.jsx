
import AllUsersPage from "@/components/admin/AllUsersPage";
import { getAllUsers } from "@/lib/api/user";


export const metadata = {
  title: "All Users | Donora",
};

const Page = async () => {
  const users = await getAllUsers();

  return (
    <div className="p-4 md:p-6">
      <AllUsersPage users={users || []} />
    </div>
  );
};

export default Page;