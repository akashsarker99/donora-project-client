import { LuSearchX } from "react-icons/lu";
import SearchCard from "./SearchCard";


const SearchResults = ({ donors, hasSearched }) => {
  if (!hasSearched) return null;

  if (donors.length === 0) {
    return (
<div className="mt-12 overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm">
  <div className="flex flex-col items-center px-8 py-16 text-center">

    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-50">
      <LuSearchX className="text-5xl text-[#DC2626]" />
    </div>

    <h2 className="mt-6 font-logo text-4xl text-[#130505]">
      No Donors Found
    </h2>

    <p className="mt-4 max-w-md leading-7 text-gray-500">
      We couldn't find any active donors matching your search.
      Try selecting a different blood group, district, or upazila.
    </p>

    <div className="mt-8 flex flex-wrap justify-center gap-3">

      <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-[#DC2626]">
        Change Blood Group
      </span>

      <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-[#DC2626]">
        Try Another District
      </span>

      <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-medium text-[#DC2626]">
        Search Again
      </span>

    </div>

  </div>
</div>
    );
  }

  return (
    <section className="mt-12">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h2 className="font-logo text-3xl text-[#130505]">
            Search Results
          </h2>

          <p className="mt-1 text-gray-500">
            Found {donors.length} donor{donors.length > 1 ? "s" : ""}.
          </p>
        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {donors.map((donor) => (
          <SearchCard
            key={donor._id}
            donor={donor}
          />
        ))}
      </div>

    </section>
  );
};

export default SearchResults;