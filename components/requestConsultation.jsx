import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CheckMark from './CheckMark'; // Update the path to your Lottie component

export default function RequestConsultation() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY); // Use the environment variable

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setIsModalOpen(true);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="lg:w-1/2 bg-white p-8 rounded-lg shadow-xl relative">
      <h3 className="text-2xl font-serif mb-6 text-black">Request a Consultation</h3>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          type="text"
          name="Name of Client"
          placeholder="Your Name"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <input
          type="email"
          name="Email of Client"
          placeholder="Your Email"
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <textarea
          name="Message"
          placeholder="Tell us about your dream piece"
          rows={4}
          required
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors"
        >
          Request Consultation
        </button>
      </form>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-8 rounded-lg shadow-2xl text-center max-w-sm mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.5 }}
                  className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto"
                >
                  <CheckMark /> {/* Use the Lottie check mark here */}
                </motion.div>
              </div>
              <h3 className="text-2xl font-serif mb-4 text-black">Email Sent</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest. We'll be in touch with you shortly to discuss your dream piece.
              </p>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
