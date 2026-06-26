import SearchForm from "@/components/searching/SearchForm";
import districts from "@/data/districts";
import upazilas from "@/data/upazilas";

const SearchPage = () => {
    const bloodGroups = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
];
   
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-12 text-center">

          <p className="font-semibold uppercase tracking-[0.3em] text-[#DC2626]">
            Find Donors
          </p>

          <h1 className="mt-4 font-logo text-4xl sm:text-5xl text-[#130505]">
            Search Blood Donors
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-500">
            Search verified blood donors by blood group,
            district and upazila.
          </p>

        </div>

        <SearchForm 
        bloodGroups={bloodGroups} 
        allUpazilas={upazilas[2].data} 
        districts={districts[2].data}></SearchForm>

      </div>
    </section>
  );
};

export default SearchPage;