"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { Field, Label, Switch } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// Mapping of country codes to phone number formats
const countryPhoneFormats = {
  US: "+1 (XXX) XXX-XXXX", // United States
  CA: "+1 (XXX) XXX-XXXX", // Canada
  IN: "+91 (XXXXX) XXXXX", // India
  NP: "+977 (XXX) XXX-XXXX", // Nepal
  CN: "+86 (XXX) XXXX-XXXX", // China
  AU: "+61 (X) XXXX-XXXX", // Australia
  DE: "+49 (XXXX) XXXXXX", // Germany
  FR: "+33 (X) XX XX XX XX", // France
  GB: "+44 (XXXX) XXXXXX", // United Kingdom
  JP: "+81 (XX) XXXX-XXXX", // Japan
  KR: "+82 (XX) XXXX-XXXX", // South Korea
  SG: "+65 (XXXX) XXXX", // Singapore
  NZ: "+64 (X) XXXX XXXX", // New Zealand
  SE: "+46 (XX) XXX XXXX", // Sweden
  CH: "+41 (XX) XXX XXXX", // Switzerland
  NL: "+31 (XX) XXXX XXXX", // Netherlands
  IT: "+39 (XXX) XXXX XXXX", // Italy
  ES: "+34 (XXX) XXX XXX", // Spain
  BR: "+55 (XX) XXXX-XXXX", // Brazil
  MX: "+52 (XXX) XXX XXXX", // Mexico
  ZA: "+27 (XX) XXX XXXX", // South Africa
};

export default function ContactForm() {
  const naviagte = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showError, setShowError] = useState(false); // New state for error message
  const [selectedCountry, setSelectedCountry] = useState("NP"); // Default to Nepal
  const [phoneNumber, setPhoneNumber] = useState("");

  // Handle country change
  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  // Handle phone number change
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  // Handle form submission
  const handleFormSubmission = async (event) => {
    event.preventDefault(); // Prevent default form submission

    if (!agreed) {
      setShowError(true); // Show error message
      return;
    }

    try {
      const formData = {
        firstName: event.target.elements["first-name"].value,
        lastName: event.target.elements["last-name"].value,
        company: event.target.elements["company"].value,
        email: event.target.elements["email"].value,
        phoneNo: phoneNumber,
        message: event.target.elements["message"].value,
      };

      // Send the form data to the backend API
      const response = await axios.post(
        "/api/v1/contact-form/submit-contact-form", // Backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "application/json", // Set the content type
          },
        }
      );

      console.log("Form submitted successfully:", response.data);
      naviagte("/thank-you");

      // Reset form
      event.target.reset();
      setPhoneNumber("");
      setAgreed(false);
    } catch (error) {
      console.error("Form submission error:", error);
      if (error.response) {
        // Server responded with an error status code (e.g., 500, 404)
        setErrorMessage(
          "Something went wrong on our end. Please try again later."
        );
      } else if (error.request) {
        // No response received (e.g., backend is down)
        setErrorMessage(
          "Unable to connect to the server. Please check your connection and try again."
        );
      } else {
        // Other errors (e.g., validation errors)
        setErrorMessage("An unexpected error occurred. Please try again.");
      } // Set error message
      setTimeout(() => setErrorMessage(""), 10000); // Clear error message after 5 seconds
    }
  };

  function ErrorMessage({ message }) {
    return (
      <div className="animate-fade-in bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mb-4 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mr-2"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
            clipRule="evenodd"
          />
        </svg>
        <span>{message}</span>
      </div>
    );
  }
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      {/* Background Blur Effect */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-1155/678 w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>

      {/* Form Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg/8 text-gray-600">
          We'd love to hear from you! Reach out to us for any inquiries or
          collaborations.
        </p>
      </div>

      {/* Contact Form */}
      <form
        onSubmit={handleFormSubmission}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                autoComplete="organization"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Email */}
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Phone number
            </label>
            <div className="mt-2.5">
              <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country"
                    aria-label="Country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  >
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="IN">India</option>
                    <option value="NP">Nepal</option>
                    <option value="CN">China</option>
                    <option value="AU">Australia</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="GB">United Kingdom</option>
                    <option value="JP">Japan</option>
                    <option value="KR">South Korea</option>
                    <option value="SG">Singapore</option>
                    <option value="NZ">New Zealand</option>
                    <option value="SE">Sweden</option>
                    <option value="CH">Switzerland</option>
                    <option value="NL">Netherlands</option>
                    <option value="IT">Italy</option>
                    <option value="ES">Spain</option>
                    <option value="BR">Brazil</option>
                    <option value="MX">Mexico</option>
                    <option value="ZA">South Africa</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                  />
                </div>
                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder={countryPhoneFormats[selectedCountry]}
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-gray-900"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                defaultValue={""}
              />
            </div>
          </div>

          {/* Privacy Policy Agreement */}
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-gray-900/5 transition-colors duration-200 ease-in-out ring-inset focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-checked:bg-indigo-600"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 transform rounded-full bg-white ring-1 shadow-xs ring-gray-900/5 transition duration-200 ease-in-out group-data-checked:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm/6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        {/* Error Message */}
        {showError && (
          <ErrorMessage message="Please agree to the privacy policy before submitting." />
        )}
        {/* Submit Button */}
        <div className="mt-10">
          <button
            disabled={isSubmitting}
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
        {errorMessage && (
          <div className="flex items-center gap-4">
            <ErrorMessage message={errorMessage} />
            <button
              onClick={handleFormSubmission}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Retry
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
