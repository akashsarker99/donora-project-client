'use client'

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import CreateRequestForm from "@/components/CreateRequestForm";

const CreateRequestPage = () => {
  const { data: session } = authClient.useSession();

  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [filteredUpazilas, setFilteredUpazilas] = useState([]);
  const [locationError, setLocationError] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const [districtRes, upazilaRes] = await Promise.all([
          fetch("/districts.json"),
          fetch("/upazilas.json"),
        ]);

        if (!districtRes.ok || !upazilaRes.ok) {
          throw new Error("Location data could not be loaded.");
        }

        const [districtJson, upazilaJson] = await Promise.all([
          districtRes.json(),
          upazilaRes.json(),
        ]);

        setDistricts(districtJson[2]?.data ?? []);
        setUpazilas(upazilaJson[2]?.data ?? []);
      } catch (error) {
        setLocationError(error.message);
      }
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
