"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronDown, Menu, X, MessageCircle } from "lucide-react";
import { bannerData, specialtiesData, customDesignData } from "./data";
import Footer from "../components/footer";
import ConsultationForm from "../components/requestConsultation";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Disable scrolling on the body when the menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when the menu is closed
      document.body.style.overflow = "";
    }

    // Clean up overflow style on component unmount
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const testimonials = [
    {
      name: "",
      imageSrc: "/images/testimonial1.png",
      alt: "First testimonial screenshot",
    },
    {
      name: "",
      imageSrc: "/images/testimonial2.png",
      alt: "Second testimonial screenshot",
    },
    {
      name: "",
      imageSrc: "/images/testimonial3.png",
      alt: "Third testimonial screenshot",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length),
    onSwipedRight: () =>
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + testimonials.length) % testimonials.length
      ),
  });

  return (
    <div className="min-h-screen bg-white text-black">
      <motion.header
        style={{ opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-99 backdrop-blur-md shadow-md"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <button className="lg:hidden z-50" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
          <h1 className="text-xl sm:text-xs md:text-2xl lg:text-2xl font-serif tracking-wider">
            DRA Jewelry
          </h1>

          <nav className="hidden lg:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="hover:text-gold transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/aboutus"
                  className="hover:text-gold transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="hover:text-gold transition-colors"
                >
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
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white z-40 flex items-center justify-center"
          >
            <ul className="text-center space-y-8">
              <li>
                <Link
                  href="/"
                  className="text-2xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Still closing the menu on click
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-2xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Gallery
                </a>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  className="text-2xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)} // Still closing the menu on click
                >
                  About Us
                </Link>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-2xl font-serif hover:text-gold transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <img
              src={bannerData.image}
              alt="Luxury Jewelry"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="relative z-10 text-center text-black">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-4xl md:text-6xl font-serif mb-4"
            >
              {bannerData.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 1 }}
              className="text-xl md:text-2xl mb-8"
            >
              {bannerData.description}
            </motion.p>
            <motion.a
              href="#collections"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="bg-gold text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-gold-dark transition-colors inline-block"
            >
              Explore Collections
            </motion.a>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="absolute bottom-8 inset-x-0 mx-auto flex justify-center"
          >
            <ChevronDown className="w-8 h-8 text-black" />
          </motion.div>
        </section>

        <section id="collections" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
              Artisan's Specialties
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {specialtiesData.map((specialty, index) => (
                <Link key={specialty.name} href="/gallery" passHref>
                  <div className="group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <img
                        src={specialty.image}
                        alt={specialty.name}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white text-xl font-serif">
                          Explore {specialty.name}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-xl font-serif mt-4 mb-2">
                      {specialty.name}
                    </h3>
                    <p className="text-gray-600">{specialty.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section
          id="custom-design"
          className="py-20 bg-black text-white overflow-hidden"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 ml-4"
              >
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  {customDesignData.title}
                </h2>
                <p className="text-lg mb-6">{customDesignData.description}</p>
                <a
                  href="#contact"
                  className="bg-white text-black px-6 py-2 rounded-full text-lg font-semibold hover:bg-gold-dark transition-colors inline-block"
                >
                  Start Your Journey
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2 mb-8 lg:mb-0 pr-4"
              >
                <img
                  src={customDesignData.image}
                  alt={customDesignData.title}
                  className="w-full h-auto rounded-lg shadow-lg mt-8 ml-2 lg:mt-0 lg:ml-0"
                />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif mb-8 text-center">
              Client Testimonials
            </h2>

            {isMobile ? (
              <div {...swipeHandlers} className="flex overflow-hidden relative">
                <div
                  className="flex transition-transform duration-300"
                  style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                    width: `${testimonials.length * 100}%`,
                  }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.name}
                      className="w-full flex-shrink-0"
                      style={{ width: "100%" }}
                    >
                      <div className="flex flex-col items-center">
                        <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={testimonial.imageSrc}
                            alt={testimonial.alt}
                            layout="fill"
                            objectFit="contain"
                            className="transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <p className="font-serif text-gold text-lg">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination dots */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-2">
                  {testimonials.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 w-2 rounded-full ${
                        currentIndex === index ? "bg-black" : "bg-gray-400"
                      }`}
                      style={{ transition: "background-color 0.3s" }}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="flex flex-col items-center"
                  >
                    <div className="relative w-full aspect-[3/4] mb-4 rounded-lg overflow-hidden ">
                      <Image
                        src={testimonial.imageSrc}
                        alt={testimonial.alt}
                        layout="fill"
                        objectFit="contain"
                        className="transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <p className="font-serif text-gold text-lg">
                      {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        <section
          id="contact"
          className="py-20 bg-gradient-to-r from-gold to-gold-dark text-black"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 mb-8 lg:mb-0 mr-8">
                {" "}
                {/* Margin added here */}
                <h2 className="text-3xl md:text-4xl font-serif mb-6">
                  Experience Luxury
                </h2>
                <p className="text-xl mb-8">
                  Embark on a journey of unparalleled craftsmanship and
                  elegance. Our expert artisans are ready to bring your vision
                  to life.
                </p>
                <ul className="text-lg space-y-4">
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Personalized Consultation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Custom Design Process
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Exquisite Craftsmanship
                  </li>
                </ul>
              </div>
              <ConsultationForm />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {/* Facebook Messenger Icon */}
      <a
        href="https://m.me/DraJewelryShop29"
        className="fixed bottom-4 right-4 z-50 bg-black rounded-full p-3 shadow-lg hover:bg-gray-800 transition-colors"
        aria-label="Contact us on Facebook Messenger"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </a>
    </div>
  );
}
