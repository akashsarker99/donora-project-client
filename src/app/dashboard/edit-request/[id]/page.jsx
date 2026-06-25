import { notFound } from "next/navigation";
import { getDonationRequestById } from "@/lib/api/donationRequest";
import EditRequestForm from "@/components/EditRequestForm";


const EditRequestPage = async ({ params }) => {
  const { id } = await params;

  const request = await getDonationRequestById(id);
    console.log("request: ", request);
  if (!request?._id) {
    notFound();
  }

  if (request.requestStatus !== "pending") {
    notFound();
  }

  return (
    <section className="mx-auto my-8 max-w-6xl px-4 md:px-6">
      <EditRequestForm request={request} />
    </section>
  );
};

export default EditRequestPage;