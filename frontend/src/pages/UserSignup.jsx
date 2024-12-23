import { set } from "mongoose";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <div className="p-7 h-screen flex flex-col justify-between">
        <div>
          <img
            className="w-16 mb-10"
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="uber logo"
          />
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <h3 className="text-base font-medium mb-2">What's your name</h3>
            <div className="flex gap-4 mb-6">
              <input
                required
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <input
                required
                className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2 text-base placeholder:text-sm"
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <h3 className="text-base font-medium mb-2">What's your email</h3>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="email"
              placeholder="email@example.com"
            />
            <h3 className="text-base font-medium mb-2">Password</h3>

            <input
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm"
              type="password"
              placeholder="Password"
            />

            <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-base placeholder:text-sm">
              Sign Up
            </button>
          </form>
          <p className="text-center">
            Already have an account?
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </div>
        <div>
          <p className="text-[10px] leading-tight">
            By proceeding, you consent to get calls, WhatsApp or SMS messages
            including by automated means, from Uber and its affiliates to the
            email provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
