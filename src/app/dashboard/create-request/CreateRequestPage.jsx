'use client'

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import CreateRequestForm from "@/components/CreateRequestForm";
import BlockedUserMessage from "@/components/BlockedUserMessage";

const CreateRequestPage = ({user}) => {
  const { data: session } = authClient.useSession();
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [locationError, setLocationError] = useState("");

useEffect(() => {
  const loadData = async () => {
    const districtRes = await fetch("/districts.json");
    const districtJson = await districtRes.json();

    const upazilaRes = await fetch("/upazilas.json");
    const upazilaJson = await upazilaRes.json();

    setDistricts(districtJson[2].data);
    setUpazilas(upazilaJson[2].data);
  };

  loadData();
}, []);

  const handleDistrictChange = (e) => {
    const districtId = e.target.value;
    setSelectedDistrict(districtId);

    const matchedUpazilas = upazilas.filter(
      (item) => item.district_id === districtId
    );

    setFilteredUpazilas(matchedUpazilas);
  };

  
   if(user?.status === 'blocked') {
    return <BlockedUserMessage></BlockedUserMessage>
  }
  return (
    <div className="p-4 md:p-6">
      {locationError && (
        <p className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
          {locationError}
        </p>
      )}
      
      <CreateRequestForm
        user={session?.user}
        districts={districts}
        upazilas={filteredUpazilas}
        selectedDistrict={selectedDistrict}
        handleDistrictChange={handleDistrictChange}
      />
    </div>
  );
};

export default CreateRequestPage;
