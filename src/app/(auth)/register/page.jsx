'use client'

import Link from "next/link";
import {Form, Input, Button, FieldError, Description, TextField, Label} from "@heroui/react";
import { LuCircleCheckBig, LuDroplets } from "react-icons/lu";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { imageUpload } from "@/lib/imgUpload";
import { FaUser } from "react-icons/fa6";
import Image from "next/image";
import { createUser } from "@/lib/actions/user";



const bloodGroups = ["A+","A-","B+","B-","AB+","AB-","O+","O-"];

const RegisterPage = () => {
  const router = useRouter();
const [districts, setDistricts] = useState([]);
const [upazilas, setUpazilas] = useState([]);

const [selectedDistrict, setSelectedDistrict] = useState("");
const [filteredUpazilas, setFilteredUpazilas] = useState([]);


const [preview, setPreview] = useState(null);
const [imageFile, setImageFile] = useState(null);

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

const handleRegister = async (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const user = Object.fromEntries(formData.entries());
const districtName = districts.find(
  (district) => district.id === user.district
)?.name;
  if (!imageFile) {
  toast.error("Please select a profile photo");
  return;
}

  if (user.password !== user.confirmPassword) {
  toast.error("Passwords do not match");
  return;
}

  try {
    const image = await imageUpload(imageFile);

    const userInfo = {
        name: user.name,
        email: user.email,
        image,
        bloodGroup: user.bloodGroup,
        district: districtName,
        upazila: user.upazila,
        role: 'donor',
        status: 'active',
        createdAt: new Date(),
    };
    const {data, error} = await authClient.signUp.email({
      name: user.name,
       email: user.email,
        image,
        password: user.password,
    })

    if(data){
      await createUser(userInfo);
      toast.success('Registration Successful');
      router.push('/login')
    }
    if(error){
      toast.error(`${error.message}`)
    }
  } catch (error) {
    toast.error(error.message || "Image upload failed");
  }
}

const handleImageChange = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  setImageFile(file);
  setPreview(URL.createObjectURL(file));
};


    return (
    <div className="grid lg:grid-cols-[40%_60%] gap-6">
      <div className="hidden lg:flex flex-col justify-center items-center bg-[#130505] text-white px-12 relative overflow-hidden ">
        <div className="absolute inset-0 opacity-20 bg-linear-to-br from-[#580000] to-[#930101] " />

        <div className="relative z-10 max-w-md">
          <div className="text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DC2626] mb-8 mx-auto">
            <LuDroplets className="text-3xl" />
          </div>
          <h2
            className="text-5xl font-bold mb-6 font-logo"
          >
            Become a Hero
          </h2>
           <p className="text-lg text-gray-300 mb-8">
            Register as a donor today and become part of Bangladesh's largest
            blood donation network.
          </p>

          </div>
         

          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-2.5 items-center"><LuCircleCheckBig  className="text-red-500"/> Free to register & donate</li>
            <li className="flex gap-2.5 items-center"><LuCircleCheckBig className="text-red-500"></LuCircleCheckBig> Connect with those in need</li>
            <li className="flex gap-2.5 items-center"><LuCircleCheckBig className="text-red-500"></LuCircleCheckBig> Save up to 3 lives per donation</li>
            <li className="flex gap-2.5 items-center"><LuCircleCheckBig className="text-red-500"></LuCircleCheckBig> Earn recognition badges</li>
          </ul>
        </div>
      </div>

     <div className="flex items-center px-8 lg:px-12 py-12 bg-white">
        <div>
        <div className="flex flex-col sm:flex-row items-center justify-between">
           <div>
           <h1
            className="text-5xl font-bold text-[#130505]"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Create Account
          </h1>

          <p className="mt-2 text-gray-500 text-center sm:text-left">
            Already have an account?
            <Link
              href="/login"
              className="ml-2 font-semibold text-[#DC2626]"
            >
              Login
            </Link>
          </p>
         </div>
         <div className="my-4 sm:mr-10">
  <div className="relative">
    <div className="h-24 w-24 overflow-hidden rounded-full border-4 border-[#DC2626]/20 bg-gray-100">
      {preview ? (
        <Image
        height={120}
        width={120}
          src={preview}
          alt="Profile Preview"
          className="h-full w-full object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#F5F5F5]">
          <FaUser className="text-4xl text-[#DC2626]" />
        </div>
      )}
    </div>

    <label
      htmlFor="profile-photo"
      className="absolute -bottom-1 -right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-[#DC2626] text-white shadow-md"
    >
      +
    </label>

    <input
      id="profile-photo"
      type="file"
      accept="image/*"
      onChange={handleImageChange}
      className="hidden"
    />
  </div>
</div>
        </div>
          
<Form className="mt-8 space-y-5" onSubmit={handleRegister}>
  <TextField isRequired name="name">
    <Label>Full Name</Label>
    <Input
      className="w-full rounded-xl"
      placeholder="Enter your full name"
    />
    <FieldError />
  </TextField>

  <TextField
    isRequired
    name="email"
    type="email"
    validate={(value) => {
      if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
      ) {
        return "Please enter a valid email address";
      }

      return null;
    }}
  >
    <Label>Email Address</Label>

    <Input
      className="w-full rounded-xl"
      placeholder="Enter your email address"
    />

    <FieldError />
  </TextField>

  <div className="grid gap-4 md:grid-cols-2">
    <div className="space-y-2">
      <label className="text-sm font-medium">
        Blood Group
      </label>

      <select
        name="bloodGroup"
        required
        className="w-full rounded-xl border border-default-200 bg-transparent px-4 py-3 outline-none"
      >
        <option value="">Select Blood Group</option>

        {bloodGroups.map((group) => (
          <option key={group} value={group}>
            {group}
          </option>
        ))}
      </select>
    </div>

    <div className="space-y-2">
      <label className="text-sm font-medium">
        District
      </label>

      <select
        name="district"
        value={selectedDistrict}
        onChange={handleDistrictChange}
        required
        className="w-full rounded-xl border border-default-200 bg-transparent px-4 py-3 outline-none"
      >
        <option value="">Select District</option>

        {districts.map((district) => (
          <option
            key={district.id}
            value={district.id}
          >
            {district.name}
          </option>
        ))}
      </select>
    </div>
  </div>

  <div className="space-y-2">
    <label className="text-sm font-medium">
      Upazila
    </label>

    <select
      name="upazila"
      required
      className="w-full rounded-xl border border-default-200 bg-transparent px-4 py-3 outline-none"
    >
      <option value="">Select Upazila</option>

      {filteredUpazilas.map((upazila) => (
        <option
          key={upazila.id}
          value={upazila.name}
        >
          {upazila.name}
        </option>
      ))}
    </select>
  </div>

  <div className="grid gap-4 md:grid-cols-2">
    <TextField
      isRequired
      minLength={6}
      name="password"
      type="password"
      validate={(value) => {
        if (value.length < 6) {
          return "Password must be at least 6 characters";
        }

        if (!/[A-Z]/.test(value)) {
          return "Password must contain at least one uppercase letter";
        }

        if (!/[a-z]/.test(value)) {
          return "Password must contain at least one lowercase letter";
        }

        return null;
      }}
    >
      <Label>Password</Label>

      <Input
        className="w-full rounded-xl"
        placeholder="Enter password"
      />

      <Description>
        Must contain at least 6 characters,
        one uppercase and one lowercase letter.
      </Description>

      <FieldError />
    </TextField>

    <TextField
      isRequired
      name="confirmPassword"
      type="password"
    >
      <Label>Confirm Password</Label>

      <Input
        className="w-full rounded-xl"
        placeholder="Repeat password"
      />

      <FieldError />
    </TextField>
  </div>

  <Button
    type="submit"
    className="h-12 w-full bg-[#DC2626] text-base font-semibold text-white hover:bg-[#B91C1C]">
    Create Account
  </Button>
</Form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
