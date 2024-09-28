import React from 'react'
import { useState, useEffect } from "react";
import { useScroll, useTransform, AnimatePresence, motion } from 'framer-motion'
import { Menu, X, MessageCircle, Palette, Diamond, Hammer } from 'lucide-react'
import CheckMark from '../components/CheckMark'; // Update the path to your Lottie component
import Footer from '@/components/footer';
import Link from 'next/link';

export default function AboutUs() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      setIsSubmitted(true); // Change to success state
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling on the body when the menu is open
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling when the menu is closed
      document.body.style.overflow = '';
    }

    // Clean up overflow style on component unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    (<div className="min-h-screen bg-white text-black">
      <motion.header
        style={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-md shadow-md"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button className="lg:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <h1 className="text-2xl font-serif tracking-wider">DRA Jewelry</h1>

          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a href="#custom-design" className="hover:text-gold transition-colors">
                  Custom Design
                </a>
              </li>
              <li>
                <a href="/aboutus" className="hover:text-gold transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
          >
            <ul className="text-center space-y-8">
              <li>
                <Link
                  href="/"
                  className="text-3xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Still closing the menu on click
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#custom-design"
                  className="text-3xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom Design
                </a>
              </li>
              <li>
                <a
                  href="#custom-design"
                  className="text-3xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-3xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <section id="our-story" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Story</h2>
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 mb-8 lg:mb-0"
              >
                <p className="text-lg mb-6">
                  Founded in 1950, DRA Jewelry Shop has been at the forefront of luxury jewelry craftsmanship for over seven decades. Our journey began with a simple yet profound vision: to create exquisite pieces that capture the essence of timeless elegance.
                </p>
                <p className="text-lg">
                  From our humble beginnings in a small workshop to becoming a globally recognized brand, we have never wavered from our commitment to quality, innovation, and personalized service.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <img
                  src="/placeholder.svg?height=400&width=600&text=Vintage+Workshop+Photo"
                  alt="Vintage Workshop Photo"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="our-craft" className="py-20 bg-black text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Our Craft</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Design", description: "Our designers blend tradition with innovation to create unique, stunning pieces.", icon: Palette },
                { title: "Materials", description: "We source only the finest gemstones and precious metals for our creations.", icon: Diamond },
                { title: "Craftsmanship", description: "Each piece is meticulously handcrafted by our master artisans.", icon: Hammer }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-4">
                    <item.icon className="w-12 h-12 text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif mb-4 text-gold">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="our-team" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Emma Thompson", role: "Lead Designer", image: "Emma+Thompson" },
                { name: "Paolo Araniego", role: "Boss", image: "Paolo" },
                { name: "Michael Chen", role: "Master Craftsman", image: "Michael+Chen" },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  className="text-center"
                >
                  <img
                    src={`/placeholder.svg?height=300&width=300&text=${member.image}`}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-serif mb-2">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-gold to-gold-dark text-black">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-8">Experience DRA Jewelry</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We invite you to visit our showroom and experience the DRA Jewelry difference. Our expert consultants are ready to guide you through our collections and help you find the perfect piece to celebrate life's most precious moments.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-black text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-800 transition-colors"
        >
          Book an Appointment
        </button>
      </div>

      {/* Modal for Request Consultation */}
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
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-serif mb-6 text-black">Book an Appointment</h3>
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
                      Book Appointment
                    </button>
                  </form>
                </>
              ) : (
                <div className="mt-4">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: [0, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                    className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckMark /> {/* Use the Lottie check mark here */}
                  </motion.div>
                  <h3 className="text-2xl font-serif mb-4 text-black">Email Sent</h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for your interest. We'll be in touch with you shortly to discuss your dream piece.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setIsSubmitted(false); // Reset to show form next time
                    }}
                    className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:bg-gray-800 transition-colors"
                  >
                    Close
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
      </main>

      <Footer />

      {/* Facebook Messenger Icon */}
      <a
        href="#"
        className="fixed bottom-4 right-4 z-50 bg-black rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Contact us on Facebook Messenger"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>)
  );
}