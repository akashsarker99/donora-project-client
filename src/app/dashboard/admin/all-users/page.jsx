
import AllUsersPage from "@/components/admin/AllUsersPage";
import { getAllUsersByPage } from "@/lib/api/user";



export const metadata = {
  title: "All Users | Donora",
};

const Page = async ({searchParams}) => {
  const {page = 1} = await searchParams;
  const usersData = await getAllUsersByPage(page);
  const users = usersData.data;
  const pageNumber = usersData.pageNumber;
  const totalPages = usersData.totalPages;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="p-4 md:p-6">
      <AllUsersPage users={users}
        pageNumber={pageNumber}
        totalPages={totalPages} pages={pages}
      />
    </div>
  );
};

export default Page;