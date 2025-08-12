import React from "react";
import { useParams } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import illustrator from "../assets/images/illustrator.svg";
import { Helmet } from 'react-helmet'

const LoginPage = () => {
  const { userType } = useParams();

  return (
    <>
     <Helmet>
                      <title>Login | CaddCraft Technologies</title>
                      <meta name="description" content="CaddCraft the best company in Himachal Pradesh" />
                      <meta name="keywords" content="autocad , digital marketing , Web devlopment" />
                </Helmet>
   
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-blue-50 to-white">
      {/* Left Illustration */}
      <div className="hidden md:flex items-center justify-center bg-blue-100">
        <img
          src={illustrator}
          alt="Login Illustration"
          className="max-w-md w-full p-10 animate-fade-in"
        />
      </div>

      {/* Right Form */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8 md:p-10 transition-all duration-300">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">
            {userType === "partner" ? "Partner" : "Student"} Login
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Welcome back! Please enter your credentials.
          </p>
          <LoginForm userType={userType} />
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginPage;
