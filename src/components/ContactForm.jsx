import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const phone = formData.get("phone")?.trim();
    const course = formData.get("course");

  
    if (!/^[A-Za-z\s]{2,50}$/.test(name)) {
      toast.error("Please enter a valid name (letters & spaces only).");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      toast.error("Please enter a valid 10-digit Indian phone number.");
      return;
    }
    if (!course) {
      toast.error("Please select a course.");
      return;
    }

    setIsSubmitting(true);

    try {
      const formSubmitResponse = await fetch(
        "https://formsubmit.co/ajax/awasthishourya55@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      const result = await formSubmitResponse.json();
      console.log("FormSubmit Response:", result); // 👀 Debugging

    
      if (result.success === true || result.success === "true") {
        toast.success("Thank you for reaching us! Our team will contact you soon.");
        e.target.reset();
      } else {
        toast.error("Email send failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please wait a bit and retry.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto p-6 bg-blue-900 text-white space-y-4 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold text-center">Get a Free Demo</h2>

        {/* Hidden inputs for FormSubmit */}
        <input type="hidden" name="_subject" value="New Enquiry from CaddCraft Technologies" />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for contacting CaddCraft. We will reach out shortly!"
        />
        <input type="hidden" name="_captcha" value="false" />

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          pattern="[A-Za-z\s]{2,50}"
          title="Name should only contain letters and spaces"
          className="w-full p-3 rounded-md bg-gray-50 text-black"
          required
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-gray-50 text-black"
          required
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          pattern="^[6-9]\d{9}$"
          title="Enter a valid 10-digit Indian mobile number"
          className="w-full p-3 rounded-md bg-gray-50 text-black"
          required
        />

        {/* Course */}
        <select
          name="course"
          className="w-full p-3 rounded-md text-black bg-gray-50"
          required
        >
          <option value="">Select a Course</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="CS & IT">CS & IT</option>
          <option value="Other Software">Other Softwares</option>
        </select>

        {/* Submit */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full bg-white text-blue-900 font-bold py-3 rounded-md transition ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
          }`}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default ContactForm;
