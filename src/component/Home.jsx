// TuitionMantraLandingPage.jsx
import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";
import logo from "/TMlogo.jpg"; // Make sure this path matches your folder structure

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    studentClass: "",
    subject: "",
    location: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzu4onmIk1mqhgVLE0yHo1UGOAJgLTgvYCHR2oZyWfqfccoYZ4_CAPAopxkI2suPre0dA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      setSubmitted(true);
    } catch (err) {
      alert("Error submitting form");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 z-10">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Tuition Mantra Logo" className="h-12 w-auto" />
          <h1 className="text-xl font-bold text-blue-700">Tuition Mantra</h1>
        </div>
        <a
          href="#lead-form"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Get Tuition
        </a>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Tuition Mantra</h1>
        <p className="text-lg max-w-xl mx-auto">
          Personalized Home Tuition for All Classes & Subjects. Let us help your
          child succeed academically.
        </p>
        <a
          href="#lead-form"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Book a Free Demo
        </a>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Tuition Mantra?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Tutors</h3>
            <p>Qualified, experienced, and passionate educators.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Flexible Timings</h3>
            <p>Choose tuition slots that work for you.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Affordable Fees</h3>
            <p>High-quality education at competitive prices.</p>
          </div>
        </div>
      </section>

      {/* Courses Offered */}
      <section className="py-16 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-bold mb-6">We Offer Tuition For</h2>
        <p className="max-w-2xl mx-auto">
          All Classes from 1st to 12th | All Boards (CBSE, ICSE, State) |
          Subjects: Math, Science, English, Social Studies, and more.
        </p>
      </section>

      {/* Lead Form Section */}
      <section id="lead-form" className="py-16 px-6 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">Request a Callback</h2>
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-100 shadow-md p-6 rounded w-full max-w-md mx-auto space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              name="studentClass"
              placeholder="Class"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            <input
              type="text"
              name="location"
              placeholder="Location (for home tuition)"
              onChange={handleChange}
              required
              className="w-full p-3 border rounded"
            />
            <textarea
              name="message"
              placeholder="Additional Message (optional)"
              onChange={handleChange}
              className="w-full p-3 border rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
            >
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </form>
        ) : (
          <p className="text-green-600 font-semibold text-xl">
            Thank you! We will contact you soon.
          </p>
        )}
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919599452301"
        className="fixed bottom-6 right-6 bg-green-500 text-white rounded-full shadow-lg p-4 hover:bg-green-600 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>

      {/* Call Floating Button */}
      <a
        href="tel:+919599452301"
        className="fixed bottom-24 right-6 bg-blue-600 text-white rounded-full shadow-lg p-4 hover:bg-blue-700 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaPhoneAlt className="w-6 h-6" />
      </a>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6">
        <div className="flex flex-wrap justify-center gap-4 mt-4 text-xl">
          <a
            href="https://tuitionmantra.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 flex items-center space-x-1"
            >
            <FaGlobe />
            <span>Tuition Mantra</span>
          </a>
          <a
            href="https://instagram.com/tuitionmantra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 flex items-center space-x-1"
            >
            <FaInstagram />
            <span>Instagram</span>
          </a>
          <a
            href="https://facebook.com/tuitionmantra"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 flex items-center space-x-1"
            >
            <FaFacebook />
            <span>Facebook</span>
          </a>
        </div>
            <p>
              &copy; {new Date().getFullYear()} Tuition Mantra. All rights reserved.
            </p>
      </footer>
    </div>
  );
};

export default Home;
