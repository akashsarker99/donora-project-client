
import RequestDetails from "@/components/donation-request/RequestDetails";
import { getDonationRequestById } from "@/lib/api/donationRequest";
import { getUserSession } from "@/lib/core/session";

const RequestDetailsPage = async ({params}) => {
    const { id } = await params;
  const request =await getDonationRequestById(id);

  const user = await getUserSession();

  return (
    <div className="container mx-auto px-4 py-10">
      <RequestDetails
        request={request}
        user={user}
      />
    </div>
  );
};

export default RequestDetailsPage;