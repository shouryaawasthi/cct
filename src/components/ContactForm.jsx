import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    try {
      // Send form data to FormSubmit.co (email service)
      const formSubmitResponse = await fetch(
        "https://formsubmit.co/ajax/awasthishourya55@gmail.com",
        {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        }
      );

      const formSubmitResult = await formSubmitResponse.json();
      console.log("FormSubmit response:", formSubmitResult);

      // Prepare FormData for Zapier webhook (avoid setting Content-Type header)
      const zapierFormData = new FormData();
      zapierFormData.append("name", formData.get("name"));
      zapierFormData.append("email", formData.get("email"));
      zapierFormData.append("phone", formData.get("phone"));
      zapierFormData.append("course", formData.get("course"));
      zapierFormData.append("submittedAt", new Date().toLocaleString());

      // Send form data to Zapier webhook as FormData (no content-type header)
      await fetch("https://hooks.zapier.com/hooks/catch/23989846/uupyera/", {
        method: "POST",
        body: zapierFormData,
      });

      if (formSubmitResult.success === "true") {
        toast.success("Thankyou for reaching us ! Our team will reach you sson");
        e.target.reset();
      } else {
        toast.error("Email sent failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Something went wrong. Please try again.");
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

        {/* FormSubmit hidden inputs */}
        <input
          type="hidden"
          name="_subject"
          value="New Enquiry from Cad Craft Technology"
        />
        <input type="hidden" name="_template" value="box" />
        <input
          type="hidden"
          name="_autoresponse"
          value="Thanks for contacting Cad Craft. We will reach out shortly!"
        />
        <input type="hidden" name="_captcha" value="false" />

        {/* Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-gray-50 text-black"
          required
        />

        {/* Email Field */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 rounded-md bg-gray-50 text-black"
          required
        />

        {/* Phone Field */}
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          pattern="[0-9]{10}"
          className="w-full p-3 rounded-md bg-gray-50 text-black"
          required
        />

        {/* Course Field */}
        <select
          name="course"
          className="w-full p-3 rounded-md text-black bg-gray-50"
          required
        >
          <option value="">Select a Course</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Electrical Engineering">
            Electrical Engineering
          </option>
          <option value="CS & IT">CS & IT</option>
           <option value="Other Software">
            Other Softwares
          </option>
        </select>

        {/* Submit Button */}
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
