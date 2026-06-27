'use client';

import Link from "next/link";
import {
  Form,
  Input,
  Button,
  FieldError,
  TextField,
  Label,
  Description,
} from "@heroui/react";
import { LuHeartHandshake } from "react-icons/lu";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter()
  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
      const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (data) {
            toast.success("Login Successful");
            router.push("/")
    }
        if (error) {
            toast.error(error.message);
          }
  };

  return (
    <div className="grid my-10 sm:my-0 sm:min-h-screen lg:grid-cols-[40%_60%]">
      
      <div className="hidden lg:flex flex-col justify-center items-center bg-linear-to-br from-[#320c0c] to-[#8f0000] text-white px-12 relative overflow-hidden">
  <div className="relative z-10 max-w-md">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#c70000] mx-auto mb-8">
      <LuHeartHandshake className="text-3xl" />
    </div>

    <h2 className="text-5xl font-bold mb-6 leading-tight text-center font-logo">
      Welcome Back,
      <br />
      Life-Saver
    </h2>

    <p className="text-lg text-gray-300 text-center">
      Your donation has the power to give someone a second chance at life.
      Sign in to continue your journey.
    </p>
  </div>
</div>

      <div className="flex items-center bg-white px-8 lg:px-16 py-12">
        <div className="w-full max-w-xl">
          <h1
            className="text-5xl font-bold text-[#130505] font-logo"
          >
            Login
          </h1>

          <p className="mt-2 text-gray-500">
            No account?
            <Link
              href="/register"
              className="ml-2 font-semibold text-[#DC2626]"
            >
              Register here
            </Link>
          </p>

          <Form
            className="mt-10 space-y-6"
            onSubmit={handleLogin}
          >
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                    value
                  )
                ) {
                  return "Please enter a valid email address";
                }

                return null;
              }}
            >
              <Label>Email Address</Label>

              <Input
                className="w-full rounded-xl"
                placeholder="your@email.com"
              />

              <FieldError />
            </TextField>

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
            <Button
              type="submit"
              className="h-14 w-full bg-[#DC2626] text-lg font-semibold text-white hover:bg-[#B91C1C]"
            >
              Login →
            </Button>
          </Form>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;