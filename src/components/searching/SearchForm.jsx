'use client'
import { searchDonors } from '@/lib/api/user';
import { Button, Form } from '@heroui/react';
import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';
import SearchCard from './SearchCard';
import SearchResults from './SearchResults';

const SearchForm = ({ bloodGroups, allUpazilas, districts }) => {
    const [searchData, setSearchData] = useState({
  bloodGroup: "",
  district: "",
  upazila: "",
});

const [selectedDistrict, setSelectedDistrict] = useState("");
const [upazilas, setUpazilas] = useState([]);
const [donors, setDonors] = useState([]);
const [hasSearched, setHasSearched] = useState(false);

const handleChange = (e) => {
  setSearchData((prev) => ({
    ...prev,
    [e.target.name]: e.target.value,
  }));
};

const handleDistrictChange = (e) => {
  const districtName = e.target.value;
  setSelectedDistrict(districtName);
  setSearchData((prev) => ({
    ...prev,
    district: districtName,
    upazila: "",
  }));

  const district = districts.find((d) => d.name === districtName);
  const filteredUpazilas = allUpazilas.filter((item) => item.district_id === district.id);
  setUpazilas(filteredUpazilas);
};
const handleSearch = async (e) => {
  e.preventDefault();

  try {
    const result = await searchDonors(searchData);
    setDonors(result);
    setHasSearched(true);
  } catch (error) {
    console.error(error);
  }
};

console.log("donors", donors)

    return (
        <div>
            <Form onSubmit={handleSearch}
           className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
  <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-4">

    <div>
      <label className="mb-2 block font-medium">
        Blood Group
      </label>

      <select
        name="bloodGroup"
        value={searchData.bloodGroup}
        onChange={handleChange}
        className="w-full rounded-2xl border border-default-200 bg-transparent px-4 py-3 outline-none">
        <option value="">Select...</option>

        {bloodGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="mb-2 block font-medium">
        District
      </label>

      <select
        name="district"
        value={searchData.district}
        onChange={handleDistrictChange}
        className="w-full rounded-2xl border border-default-200 bg-transparent px-4 py-3 outline-none"
      >
        <option value="">Select...</option>

        {districts.map((district) => (
          <option
            key={district.id}
            value={district.name}
          >
            {district.name}
          </option>
        ))}
      </select>
    </div>

    <div>
      <label className="mb-2 block font-medium">
        Upazila
      </label>

      <select
        name="upazila"
        value={searchData.upazila}
        onChange={handleChange}
        disabled={!selectedDistrict}
        className="w-full rounded-2xl border border-default-200 bg-transparent px-4 py-3 outline-none disabled:bg-gray-100"
      >
        <option value="">Select...</option>

        {upazilas.map((upazila) => (
          <option
            key={upazila.id}
            value={upazila.name}
          >
            {upazila.name}
          </option>
        ))}
      </select>
    </div>

    <div className="flex items-end">
      <Button
        type="submit"
        color="danger"
        className="h-12 w-full"
      >
        <LuSearch size={18} />
        Search
      </Button>
    </div>

  </div>
</Form>

<SearchResults
  donors={donors}
  hasSearched={hasSearched}
/>
        </div>
    );
};

export default SearchForm;